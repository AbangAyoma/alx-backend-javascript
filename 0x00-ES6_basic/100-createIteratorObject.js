export default function createIteratorObject(report) {
    const allEmployees = report.allEmployees;
    const employeesList = [];
  
    for (const department of Object.values(allEmployees)) {
      employeesList.push(...department);
    }
  
    return employeesList[Symbol.iterator]();
  }
  