const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const studentsCS = [];
      const studentsSWE = [];
      // Iterate through the lines and process student data
      lines.forEach(line => {
        const [firstname, lastname, age, field] = line.split(',');

        if (field === 'CS') {
          studentsCS.push(firstname);
        } else if (field === 'SWE') {
          studentsSWE.push(firstname);
        }
      });

      console.log(`Number of students: ${studentsCS.length + studentsSWE.length}`);
      console.log(`Number of students in CS: ${studentsCS.length}. List: ${studentsCS.join(', ')}`);
      console.log(`Number of students in SWE: ${studentsSWE.length}. List: ${studentsSWE.join(', ')}`);
      resolve();
    });
  });
}

module.exports = countStudents;
