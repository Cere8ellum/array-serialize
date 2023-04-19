import zlib from "node:zlib";

const SUPER_DUPER_ARRAY_DATA_SEPARATOR = "(_!_)";

/**
 *
 * @param {*} numsQty
 * @param {*} symbQty
 * @returns @Array
 */
export function getRandomArray() {
  const resultArr = [];
  for (let i = 1; i <= 1000; i++) {
    const rnd = Math.floor(Math.random() * 299) + 1;
    resultArr.push(rnd);
  }
  return resultArr;
}

/**
 *
 * @param {*} arr
 * @param {*} qty
 * @returns
 */
export function getArrayUsingQtyOfItems(arr, qty) {
  const testArr = [];
  for (let i = 0; i < qty; i++) {
    const rnd = Math.floor(Math.random() * qty).toString();
    testArr.push(arr[rnd]);
  }
  return testArr;
}

/**
 *
 * @param {*} arr
 * @param {*} len
 * @returns
 */
export function getArrayUsingLengthOfItem(arr, len) {
  return arr.filter((v) => v.toString().length == len);
}

/**
 *
 * @param {*} arr
 * @param {*} qty
 * @returns
 */
export function getArrayUsingUniqueQty(arr, qty) {
  const uniqueArr = arr.reduce((acc, item) => {
    // Array includes item and qty of these items is <= than qty
    if (acc.includes(item)) {
      return acc.filter((el) => el === item).length < qty
        ? [...acc, item]
        : acc;
    }
    return [...acc, item];
  }, []);
  return uniqueArr.sort();
}

/**
 *
 * @param {*} arr
 * @param {*} numsQty
 * @param {*} symbQty
 * @returns @String
 */
export function serializeArray(arr) {
  // Work with rndArr
  const str = arr
    .map((el) => {
      const splited = el.toString().split("");
      // To ASCII
      return splited.map((el) => el.charCodeAt(0)).join();
    })
    .join(SUPER_DUPER_ARRAY_DATA_SEPARATOR);

  const input = new Buffer.from(str, "utf8");
  const deflated = zlib.deflateSync(input).toString("base64");

  return deflated;
}

/**
 *
 * @param {*} str
 * @returns @Array
 */
export function deSerializeArray(str) {
  const input = new Buffer.from(str, "utf8");
  const inflated = zlib.deflateSync(input).toString("base64");
  console.log(inflated);
  const arr = JSON.parse(arr);
  console.log(arr);
  return arr;
}
