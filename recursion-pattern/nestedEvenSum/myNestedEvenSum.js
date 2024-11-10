function myNestedEvenSum(obj) {
  let sum = 0;

  function myNestedEvenSumInner(arr) {
    if (!arr.length) return;

    if (typeof arr[0][1] === "number" && arr[0][1] % 2 === 0) sum += arr[0][1];

    if (typeof arr[0][1] === "object")
      myNestedEvenSumInner(Object.entries(arr[0][1]));

    myNestedEvenSumInner(arr.slice(1));
  }

  const arr = Object.entries(obj);

  myNestedEvenSumInner(arr);

  return sum;
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(myNestedEvenSum(obj1)); // 6
console.log(myNestedEvenSum(obj2)); // 10
