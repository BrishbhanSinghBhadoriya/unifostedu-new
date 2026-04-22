const fs = require('fs');
const path = require('path');

const DATA_DIR = './src/data';
const universityFile = path.join(DATA_DIR, 'Universities.json');

function generateMasterData() {
    try {
        const universitiesData = JSON.parse(fs.readFileSync(universityFile, 'utf8'));
        const masterList = [];

        universitiesData.universities.forEach(uni => {
            const uniNameLower = uni.name.toLowerCase();
            
            // Try to find specific course files dynamically
            let specificFile = null;
            if (uniNameLower.includes('amity')) specificFile = 'amitycourses.json';
            else if (uniNameLower.includes('manipal') || uniNameLower.includes('mahe')) specificFile = 'mahecourses.json';
            else if (uniNameLower.includes('nmims')) specificFile = 'nmimscourses.json';
            else if (uniNameLower.includes('amrita')) specificFile = 'amritacourse.json';
            
            if (specificFile && fs.existsSync(path.join(DATA_DIR, specificFile))) {
                const specificData = JSON.parse(fs.readFileSync(path.join(DATA_DIR, specificFile), 'utf8'));
                
                // Normalizing specific data
                if (specificFile === 'amitycourses.json') {
                    Object.keys(specificData).forEach(courseKey => {
                        const course = specificData[courseKey];
                        if (course.specializations) {
                            course.specializations.forEach(spec => {
                                masterList.push({
                                    university: uni.name,
                                    course: course.about?.title || courseKey.toUpperCase(),
                                    specialization: spec.name,
                                    fees: spec.fee || spec.totalFee,
                                    duration: course.about?.duration || "N/A"
                                });
                            });
                        }
                    });
                } else if (specificFile === 'mahecourses.json') {
                    if (specificData.courses) {
                      specificData.courses.forEach(course => {
                          if (course.specializations) {
                              course.specializations.forEach(spec => {
                                  masterList.push({
                                      university: uni.name,
                                      course: course.title,
                                      specialization: spec.name,
                                      fees: course.courseFee,
                                      duration: course.duration
                                  });
                              });
                          }
                      });
                    }
                } else if (specificFile === 'amritacourse.json') {
                    if (specificData.courses) {
                        specificData.courses.forEach(course => {
                            if (course.specializations) {
                                course.specializations.forEach(spec => {
                                    masterList.push({
                                        university: uni.name,
                                        course: course.title,
                                        specialization: spec.name,
                                        fees: course.courseFee,
                                        duration: course.duration
                                    });
                                });
                            }
                        });
                    }
                } else if (specificFile === 'nmimscourses.json') {
                     // Handle NMIMS structure if it differs
                     if (Array.isArray(specificData)) {
                        specificData.forEach(course => {
                            masterList.push({
                                university: uni.name,
                                course: course.title || course.name,
                                specialization: course.specialization || "General",
                                fees: course.fees,
                                duration: course.duration
                            });
                        });
                     } else {
                         // Default fallback for object structures
                         Object.keys(specificData).forEach(k => {
                             masterList.push({
                                university: uni.name,
                                course: k,
                                specialization: "General",
                                fees: specificData[k].fees || "N/A",
                                duration: specificData[k].duration || "N/A"
                             });
                         });
                     }
                }
            } else {
                // Fallback to Universities.json data
                uni.courses.forEach(course => {
                    if (course.specializations && course.specializations.length > 0) {
                        course.specializations.forEach(spec => {
                            masterList.push({
                                university: uni.name,
                                course: course.label,
                                specialization: spec.name,
                                fees: spec.fees?.min || course.baseFees?.min,
                                duration: course.duration
                            });
                        });
                    } else {
                        masterList.push({
                            university: uni.name,
                            course: course.label,
                            specialization: "General",
                            fees: course.baseFees?.min || "N/A",
                            duration: course.duration
                        });
                    }
                });
            }
        });

        const outputPath = path.join(DATA_DIR, 'master_specializations.json');
        fs.writeFileSync(outputPath, JSON.stringify(masterList, null, 2));
        console.log(`Successfully generated master data with ${masterList.length} entries at ${outputPath}`);

    } catch (error) {
        console.error('Error generating master data:', error);
    }
}

generateMasterData();
