import {
  serializeArray,
  getRandomArray,
  getArrayUsingQtyOfItems,
  getArrayUsingLengthOfItem,
  getArrayUsingUniqueQty,
} from "./index.js";

const initialArr = getRandomArray();

const testCallback = (testArr) => {
  const expectedResult = {};
  const result = serializeArray(testArr);

  if (!result) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  } else {
    console.log({ initialArr, testArr, result });
  }
};

it("Array of 50 numbers", function () {
  const testArr = getArrayUsingQtyOfItems(initialArr, 50);
  return testCallback(testArr);
});
it("Array of 100 numbers", function () {
  const testArr = getArrayUsingQtyOfItems(initialArr, 100);
  return testCallback(testArr);
});
it("Array of 500 numbers", function () {
  const testArr = getArrayUsingQtyOfItems(initialArr, 500);
  return testCallback(testArr);
});
it("Array of 1000 numbers", function () {
  const testArr = getArrayUsingQtyOfItems(initialArr, 1000);
  return testCallback(testArr);
});
it("Array of numbers from 1 symbol", function () {
  const testArr = getArrayUsingLengthOfItem(initialArr, 1);
  return testCallback(testArr);
});
it("Array of numbers from 2 symbols", function () {
  const testArr = getArrayUsingLengthOfItem(initialArr, 2);
  return testCallback(testArr);
});
it("Array of numbers from 3 symbols", function () {
  const testArr = getArrayUsingLengthOfItem(initialArr, 3);
  return testCallback(testArr);
});
it("Array of 3 repeating numbers from 900 ", function () {
  const testArr = getArrayUsingUniqueQty(
    getArrayUsingQtyOfItems(initialArr, 900),
    3
  );
  return testCallback(testArr);
});
