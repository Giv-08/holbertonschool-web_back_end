const readDatabase = require('../utils');
const path = require('path');
const databaseFilePath = path.join(__dirname, '..', '..', 'database.csv');

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const data = await readDatabase(databaseFilePath);
      const text = 'This is the list of our students\n';
      // sort alphabetically
      const fields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      fields.forEach((field) => {
        const students = data[field];
        text += `Number of students in ${field} : ${students.length}. List: ${students.join(', ')}\n`;
      })

      return response.status(200).send('This is the list of our students');
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const major = request.params.major;

    if ( major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase(databaseFilePath);
      const students = data[major];

      return response.status(200).send(`List: ${students.join(', ')}\n`);
    } catch (error) {
      return response.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
