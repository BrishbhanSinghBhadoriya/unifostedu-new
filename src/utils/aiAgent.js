// import { chatbotAPI } from '@/lib/axios';
// import { searchJSONData } from './jsonSearch';
// import courseData from '@/data/courseData.json';
// import catalog from '@/knowledge/catalog.json';
// import unifostData from '@/app/api/v1/unifostData.json';

// /**
//  * Gets relevant context from JSON data for the AI agent
//  * @param {string} query - User's question
//  * @returns {Object} Context object with relevant data
//  */
// function getRelevantContext(query) {
//   const queryLower = query.toLowerCase();
//   const context = {
//     courses: [],
//     universities: [],
//     company: null,
//     statistics: null
//   };

//   // Search in courseData
//   Object.keys(courseData).forEach(courseKey => {
//     const course = courseData[courseKey];
//     const courseText = JSON.stringify(course).toLowerCase();
    
//     // Check if query matches this course
//     if (courseText.includes(queryLower) || 
//         course.title?.toLowerCase().includes(queryLower) ||
//         course.subtitle?.toLowerCase().includes(queryLower)) {
//       context.courses.push({
//         title: course.title,
//         subtitle: course.subtitle,
//         description: course.description,
//         duration: course.duration,
//         fee: course.fee,
//         eligibility: course.eligibility,
//         features: course.features,
//         universities: course.universities?.slice(0, 3) // Limit to top 3 universities
//       });
//     }
//   });

//   // Search in catalog
//   if (catalog.universities) {
//     catalog.universities.forEach(uni => {
//       if (uni.name?.toLowerCase().includes(queryLower)) {
//         context.universities.push(uni);
//       }
//     });
//   }

//   // Search in unifostData
//   if (unifostData.company && JSON.stringify(unifostData.company).toLowerCase().includes(queryLower)) {
//     context.company = unifostData.company;
//   }

//   if (unifostData.statistics && JSON.stringify(unifostData.statistics).toLowerCase().includes(queryLower)) {
//     context.statistics = unifostData.statistics;
//   }

//   return context;
// }

// /**
//  * Formats context into a readable string for AI
//  * @param {Object} context - Context object
//  * @returns {string} Formatted context string
//  */
// function formatContextForAI(context) {
//   let contextText = "Available Data from Unifost:\n\n";

//   if (context.courses.length > 0) {
//     contextText += "COURSES:\n";
//     context.courses.forEach(course => {
//       contextText += `- ${course.title} (${course.subtitle || ''}):\n`;
//       contextText += `  Description: ${course.description}\n`;
//       contextText += `  Duration: ${course.duration}\n`;
//       contextText += `  Fee: ${course.fee}\n`;
//       contextText += `  Eligibility: ${course.eligibility}\n`;
//       contextText += `  Features: ${course.features?.join(', ')}\n`;
//       if (course.universities && course.universities.length > 0) {
//         contextText += `  Universities: ${course.universities.map(u => u.name).join(', ')}\n`;
//       }
//       contextText += "\n";
//     });
//   }

//   if (context.universities.length > 0) {
//     contextText += "UNIVERSITIES:\n";
//     context.universities.forEach(uni => {
//       contextText += `- ${uni.name}\n`;
//     });
//     contextText += "\n";
//   }

//   if (context.company) {
//     contextText += "COMPANY INFO:\n";
//     contextText += `Name: ${context.company.name}\n`;
//     contextText += `Contact: ${context.company.contact?.phone?.join(', ') || 'N/A'}\n`;
//     contextText += `Email: ${context.company.contact?.email || 'N/A'}\n`;
//     contextText += "\n";
//   }

//   if (context.statistics) {
//     contextText += "STATISTICS:\n";
//     contextText += `Students Guided: ${context.statistics.students_guided}\n`;
//     contextText += `Universities: ${context.statistics.universities}\n`;
//     contextText += `Programs: ${context.statistics.programs}\n`;
//     contextText += "\n";
//   }

//   return contextText;
// }

// /**
//  * AI Agent that uses JSON data to answer questions
//  * @param {string} query - User's question
//  * @returns {Promise<Object>} Response in format {answer: string, source: string}
//  */
// export async function aiAgent(query) {
//   if (!query || typeof query !== 'string' || query.trim().length === 0) {
//     return {
//       answer: "Sorry, the requested information is not available in the provided data.",
//       source: "none"
//     };
//   }

//   try {
//     // First, search JSON data to get relevant context
//     const searchResult = searchJSONData(query);
    
//     // If no data found in JSON, return early
//     if (searchResult.source === "none") {
//       return {
//         answer: "Sorry, the requested information is not available in the provided data.",
//         source: "none"
//       };
//     }

//     // Get relevant context from JSON data
//     const context = getRelevantContext(query);
//     const contextText = formatContextForAI(context);

//     // If no relevant context found, use the search result directly
//     if (!contextText.includes("Available Data") || contextText.split('\n').length < 5) {
//       return searchResult;
//     }

//     // Prepare the AI prompt with strict instructions
//     const systemInstruction = `You are an intelligent AI assistant for Unifost - an online education platform. Your role is to help students with information about courses, universities, admissions, and online education.

// CRITICAL RULES:
// 1. Answer STRICTLY and ONLY from the provided Context/Data below
// 2. If the answer is NOT explicitly present in the Context, respond with: "Sorry, the requested information is not available in the provided data."
// 3. Do NOT make assumptions or add external knowledge
// 4. Keep answers concise, helpful, and conversational
// 5. Use the exact data from the Context - do not modify fees, durations, or other factual information
// 6. If asked about something not in the Context, politely say the information is not available

// Context (from Unifost JSON data):
// ${contextText}

// Now answer the user's question based ONLY on the above context.`;

//     const userQuestion = `Question: ${query}`;
//     const fullPrompt = `${systemInstruction}\n\n${userQuestion}`;

//     // Call the AI API using chatbotAPI from axios.js
//     const response = await chatbotAPI.ask({ prompt: fullPrompt });

//     if (response.data && response.data.response) {
//       // Extract source from search result
//       const source = searchResult.source !== "none" ? searchResult.source : "unifostData";

//       return {
//         answer: response.data.response,
//         source: source
//       };
//     } else {
//       // Fallback to direct search result if API fails
//       return searchResult;
//     }

//   } catch (error) {
//     console.error('AI Agent Error:', error);
    
//     // Fallback to direct JSON search if AI API fails
//     const searchResult = searchJSONData(query);
//     return searchResult;
//   }
// }

