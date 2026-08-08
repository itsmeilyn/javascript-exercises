const leapYears = function (year) {
  if (year % 4 === 0) {
    return true;
  } else {
    false;
  }
};

const result = leapYears(2016);
console.log(result);

// Do not edit below this line
module.exports = leapYears;
