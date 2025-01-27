// const fs = require('fs').promises;

// async function readDatabase(filePath) {
//   try {
//     const data = await fs.readFile(filePath, 'utf-8');
//     const students = JSON.parse(data);
//     // object of arrays
//     const result = {};

//     students.forEach((student) => {
//       const field = student.field;
//       result[field].push(student.firstname);
//     });
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// module.exports = readDatabase;
const fs = require('fs').promises;

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter((line) => line.trim());

      const fields = {};
      students.forEach((student) => {
        const [firstname, , , field] = student.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      resolve(fields);
    })
    .catch(() => reject(new Error('Cannot load the database')));
});

module.exports = readDatabase;
