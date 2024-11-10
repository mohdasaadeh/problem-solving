function myFlattenArray(arr) {
  const arrFlattened = [];

  function myFlattenArrayInner(arr) {
    if (!arr.length) return;

    if (!Array.isArray(arr[0])) {
      arrFlattened.push(arr[0]);
    } else {
      myFlattenArrayInner(arr[0]);
    }

    myFlattenArrayInner(arr.slice(1));
  }

  myFlattenArrayInner(arr);

  return arrFlattened;
}

console.log(myFlattenArray([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(myFlattenArray([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(myFlattenArray([[1], [2], [3]])); // [1,2,3]
console.log(myFlattenArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
