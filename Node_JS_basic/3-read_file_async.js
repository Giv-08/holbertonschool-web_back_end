const fs = require('fs').promises;

async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    const studentsCS = [];
    const studentsSWE = [];

    // Iterate through the lines and process student data
    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(',');

      if (field === 'CS') {
        studentsCS.push(firstname);
      } else if (field === 'SWE') {
        studentsSWE.push(firstname);
      }
    });

    // Return the final list of students
    return [...studentsCS, ...studentsSWE];
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
