const reverseString = function (string) {
  if (string === "") {
    return "";
  } else {
    let newString = "";
    let num = string.length;
    for (let i = 0; i < num; i++) {
      newString += string.slice(num - (i + 1), num - i);
    }
    return newString;
  }
};

// Do not edit below this line
module.exports = reverseString;
