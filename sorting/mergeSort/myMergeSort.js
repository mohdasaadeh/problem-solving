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

function myMergeSort(arr) {
  if (!arr.length || arr.length === 1) return arr;

  const half = Math.floor(arr.length / 2);

  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(half);

  return myMerge(myMergeSort(firstHalf), myMergeSort(secondHalf));
}

console.log(myMergeSort([2, 3, 5, 1]));
console.log(myMergeSort([2, 3, 5, 1, 14]));
console.log(myMergeSort([2, 3, 5, 1, 14, -10, 70, -50]));
