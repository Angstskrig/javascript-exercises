const removeFromArray = function (array, remove) {
  if (array === "") {
    return "";
  } else {
    let element = [];
    let num = array.length;
    for (const arg of remove) {
      for (let i = 0; i < num; i++) {
        if (array[i] !== remove) {
          element.push(array[i]);
          console.log(element);
        }
      }
    }
    return element;
  }
};

// Do not edit below this line
module.exports = removeFromArray;
