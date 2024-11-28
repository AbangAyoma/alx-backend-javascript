function calculateNumber(type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
  
    if (type === 'SUM') {
      return roundedA + roundedB;
    } else if (type === 'SUBTRACT') {
      return roundedA - roundedB;
    } else if (type === 'DIVIDE') {
      if (roundedB === 0) {
        return 'Error'; // Division by zero
      }
      return roundedA / roundedB;
    } else {
      throw new Error('Invalid type. Allowed types are SUM, SUBTRACT, and DIVIDE.');
    }
  }
  
  module.exports = calculateNumber;
  