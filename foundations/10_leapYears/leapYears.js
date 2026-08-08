const leapYears = function (year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

const result = leapYears(2100);
console.log(result);

// Do not edit below this line
module.exports = leapYears;
