const sumAll = function (start, end) {
  //   if (typeof start !== "number" || typeof end !== "number") {
  //     return "ERROR";
  //   }
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return "ERROR";
  }
  if (start < 0 || end < 0) {
    return "ERROR";
  }

  let total = 0;
  if (start > end) {
    for (let i = start; i >= 0; i--) {
      total += i;
    }
  } else {
    for (let i = start; i <= end; i++) {
      total += i;
    }
  }
  return total;
};

console.log(sumAll(1, 2));

// Do not edit below this line
module.exports = sumAll;
