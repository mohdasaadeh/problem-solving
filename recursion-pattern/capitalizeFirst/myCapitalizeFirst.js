function myCapitalizeFirst(arr) {
  const arrCap = [];

  function myCapitalizeFirstInner(arr) {
    if (!arr.length) return;

    arrCap.push(arr[0][0].toUpperCase());
    arrCap[arrCap.length - 1] += arr[0].slice(1);

    myCapitalizeFirstInner(arr.slice(1));
  }

  myCapitalizeFirstInner(arr);

  return arrCap;
}

console.log(myCapitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
