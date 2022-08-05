const removeFromArray = function (array, ...remove) {
  let element;
  let num;
  for (const arg of remove) {
    element = [];
    num = array.length;
    for (let i = 0; i < num; i++) {
      if (array[i] !== arg) {
        element.push(array[i]);
        // console.log("Element in the for loop = " + element);
      }
    }
    array = element;
  }
  // console.log("Final array = " + array);
  // console.log("Final element = " + element);
  // console.log("Num = " + num);
  console.log("Test done!");
  return element;
};
// Do not edit below this line
module.exports = removeFromArray;
