const fs = require('fs');

function countStudents(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
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

        console.log(`Number of students: ${studentsCS.length + studentsSWE.length}`);
        console.log(`Number of students in CS: ${studentsCS.length}. List: ${studentsCS.join(', ')}`);
        console.log(`Number of students in SWE: ${studentsSWE.length}. List: ${studentsSWE.join(', ')}`);
    } catch (error) {
        throw error('Cannot load the database:', error);
    }
}

module.exports = countStudents;
