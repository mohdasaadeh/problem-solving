function myCollectStrings(obj) {
  const strArr = [];

  for (const key in obj) {
    if (typeof obj[key] === "string") {
      strArr.push(obj[key]);
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      strArr.push(...myCollectStrings(obj[key]));
    }
  }

  return strArr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(myCollectStrings(obj)); // ["foo", "bar", "baz"])
