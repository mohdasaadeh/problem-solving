function myMerge(arr1, arr2) {
  let arr1Index = 0;
  let arr2Index = 0;

  const mergedArr = [];

  while (arr2Index < arr2.length || arr1Index < arr1.length) {
    if (arr1[arr1Index] < arr2[arr2Index] || arr2[arr2Index] === undefined) {
      mergedArr.push(arr1[arr1Index]);

      arr1Index++;
    } else {
      mergedArr.push(arr2[arr2Index]);

      arr2Index++;
    }
  }

  return mergedArr;
}

console.log(myMerge([1, 2, 10, 30], [3, 14, 20, 25]));
console.log(myMerge([3, 14, 20, 25], [1, 2, 10, 30]));
console.log(myMerge([3, 14], [1, 2, 10, 30]));
console.log(myMerge([], [1, 2, 10, 30]));
