const removeFromArray = function (arr, ...items) {
  return arr.filter((item) => !items.includes(item.name ?? item));
};

console.log(removeFromArray([1, 2, 3, 4, 5], 2, 3));

// Do not edit below this line
module.exports = removeFromArray;
