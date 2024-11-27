const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, { encoding: 'utf-8' }).trim();

    // Split data into rows and filter out empty lines
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Extract the headers (optional, not used directly here)
    const headers = lines[0].split(',');

    // Process the student data (ignore headers)
    const students = lines.slice(1);
    const totalStudents = students.length;

    console.log(`Number of students: ${totalStudents}`);

    // Create a map to count students in each field
    const fields = {};

    students.forEach((student) => {
      const details = student.split(',');
      const firstname = details[0];
      const field = details[3];

      if (field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    // Log the number of students in each field and their names
    for (const [field, names] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
