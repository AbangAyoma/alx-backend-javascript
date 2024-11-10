export default function appendToEachArrayValue(array, appendString) {
    for (let [idx, value]  of array.entries()) {
    //   var value = array[idx];
      array[idx] = appendString + value;
    }
  
    return array;
  }