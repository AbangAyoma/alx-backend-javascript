const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read the database file asynchronously
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the data into lines and filter out empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        reject(new Error('Database is empty or invalid'));
        return;
      }

      const header = lines[0].split(',');
      const students = lines.slice(1);
      const fieldCounts = {};

      students.forEach((studentLine) => {
        const fields = studentLine.split(',');
        if (fields.length !== header.length) {
          return; // Skip malformed rows
        }
        const field = fields[fields.length - 1].trim(); // Assume the last column is the field
        const name = fields[0].trim(); // Assume the first column is the name

        if (!fieldCounts[field]) {
          fieldCounts[field] = [];
        }
        fieldCounts[field].push(name);
      });

      // Log the results
      console.log(`Number of students: ${students.length}`);
      for (const [field, names] of Object.entries(fieldCounts)) {
        console.log(
          `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
        );
      }

      resolve();
    });
  });
}

module.exports = countStudents;
