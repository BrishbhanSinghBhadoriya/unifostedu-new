// import courseData from '@/data/courseData.json';
// import catalog from '@/knowledge/catalog.json';
// import unifostData from '@/app/api/v1/unifostData.json';

// /**
//  * Recursively searches through an object for a query string
//  * @param {Object} obj - The object to search
//  * @param {string} query - The search query
//  * @param {string} path - Current path in the object (for source tracking)
//  * @returns {Array} Array of matches with {value, path, key}
//  */
// function searchInObject(obj, query, path = '') {
//   const results = [];
//   const queryLower = query.toLowerCase();
//   const queryWords = queryLower.split(/\s+/).filter(w => w.length > 2);

//   function traverse(current, currentPath) {
//     if (current === null || current === undefined) return;

//     if (typeof current === 'string') {
//       const currentLower = current.toLowerCase();
//       // Check if query matches the string
//       const matches = queryWords.every(word => currentLower.includes(word)) || 
//                      currentLower.includes(queryLower);
//       if (matches) {
//         results.push({
//           value: current,
//           path: currentPath,
//           key: currentPath.split('.').pop()
//         });
//       }
//     } else if (Array.isArray(current)) {
//       current.forEach((item, index) => {
//         if (typeof item === 'string') {
//           const itemLower = item.toLowerCase();
//           const matches = queryWords.every(word => itemLower.includes(word)) || 
//                          itemLower.includes(queryLower);
//           if (matches) {
//             results.push({
//               value: item,
//               path: `${currentPath}[${index}]`,
//               key: `${currentPath.split('.').pop()}[${index}]`
//             });
//           }
//         } else if (typeof item === 'object' && item !== null) {
//           traverse(item, `${currentPath}[${index}]`);
//         }
//       });
//     } else if (typeof current === 'object') {
//       Object.keys(current).forEach(key => {
//         const keyLower = key.toLowerCase();
//         // Check if key matches query
//         if (keyLower.includes(queryLower) || queryWords.some(word => keyLower.includes(word))) {
//           results.push({
//             value: typeof current[key] === 'object' ? JSON.stringify(current[key]) : current[key],
//             path: currentPath ? `${currentPath}.${key}` : key,
//             key: key
//           });
//         }
//         // Traverse nested objects
//         traverse(current[key], currentPath ? `${currentPath}.${key}` : key);
//       });
//     }
//   }

//   traverse(obj, path);
//   return results;
// }

// /**
//  * Formats the answer from search results
//  * @param {Array} matches - Array of search matches
//  * @param {string} sourceName - Name of the data source
//  * @param {Object} context - Additional context (e.g., course object)
//  * @returns {string} Formatted answer
//  */
// function formatAnswer(matches, sourceName, context = null) {
//   if (matches.length === 0) return null;

//   // Prioritize matches from important fields
//   const priorityFields = ['title', 'name', 'description', 'fee', 'duration', 'eligibility'];
//   const priorityMatches = matches.filter(m => 
//     priorityFields.some(field => m.path.toLowerCase().includes(field))
//   );
  
//   const matchesToUse = priorityMatches.length > 0 ? priorityMatches : matches;

//   // Get unique values to avoid repetition
//   const uniqueValues = [...new Set(matchesToUse.map(m => {
//     const value = typeof m.value === 'string' ? m.value : JSON.stringify(m.value);
//     // Clean up JSON stringified values
//     if (value.startsWith('"') && value.endsWith('"')) {
//       return value.slice(1, -1);
//     }
//     return value;
//   }))];

//   // If we have a single clear match, return it
//   if (uniqueValues.length === 1) {
//     return uniqueValues[0];
//   }

//   // If multiple matches, format them nicely
//   if (uniqueValues.length <= 5) {
//     return uniqueValues.join(', ');
//   }

//   // If too many matches, return the first few
//   return uniqueValues.slice(0, 5).join(', ') + ' (and more)';
// }

// /**
//  * Main function to search JSON data and return answer in required format
//  * @param {string} query - User's question/query
//  * @returns {Object} Response in format {answer: string, source: string}
//  */
// export function searchJSONData(query) {
//   if (!query || typeof query !== 'string' || query.trim().length === 0) {
//     return {
//       answer: "Sorry, the requested information is not available in the provided data.",
//       source: "none"
//     };
//   }

//   const queryLower = query.toLowerCase().trim();
//   const allMatches = [];

//   // Search in courseData
//   Object.keys(courseData).forEach(courseKey => {
//     const course = courseData[courseKey];
//     const matches = searchInObject(course, queryLower, `courseData.${courseKey}`);
//     if (matches.length > 0) {
//       allMatches.push({
//         source: `courseData.${courseKey}`,
//         matches: matches,
//         courseTitle: course.title || courseKey
//       });
//     }
//   });

//   // Search in catalog
//   const catalogMatches = searchInObject(catalog, queryLower, 'catalog');
//   if (catalogMatches.length > 0) {
//     allMatches.push({
//       source: 'catalog',
//       matches: catalogMatches
//     });
//   }

//   // Search in unifostData
//   const unifostMatches = searchInObject(unifostData, queryLower, 'unifostData');
//   if (unifostMatches.length > 0) {
//     allMatches.push({
//       source: 'unifostData',
//       matches: unifostMatches
//     });
//   }

//   // If no matches found
//   if (allMatches.length === 0) {
//     return {
//       answer: "Sorry, the requested information is not available in the provided data.",
//       source: "none"
//     };
//   }

//   // Find the best match (most relevant)
//   // Sort by number of matches and relevance
//   allMatches.sort((a, b) => {
//     // Prioritize exact matches in titles/names
//     const aHasExact = a.matches.some(m => 
//       m.path.includes('title') || m.path.includes('name') || m.path.includes('description')
//     );
//     const bHasExact = b.matches.some(m => 
//       m.path.includes('title') || m.path.includes('name') || m.path.includes('description')
//     );
    
//     if (aHasExact && !bHasExact) return -1;
//     if (!aHasExact && bHasExact) return 1;
    
//     return b.matches.length - a.matches.length;
//   });

//   const bestMatch = allMatches[0];
  
//   // Get context if available (for course data)
//   let context = null;
//   if (bestMatch.source.startsWith('courseData.')) {
//     const courseKey = bestMatch.source.replace('courseData.', '');
//     context = courseData[courseKey];
//   }
  
//   const answer = formatAnswer(bestMatch.matches, bestMatch.source, context);
//   const source = bestMatch.courseTitle || bestMatch.source;

//   return {
//     answer: answer || "Sorry, the requested information is not available in the provided data.",
//     source: source
//   };
// }

