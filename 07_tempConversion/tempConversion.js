const ftoc = function (f) {
  let celc = Math.round((f - 32) * (5 / 9) * 10) / 10;
  return celc;
};

const ctof = function (c) {
  let fahr = Math.round((c * (9 / 5) + 32) * 10) / 10;
  return fahr;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
