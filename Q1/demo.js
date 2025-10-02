import { lowerCaseWords } from "./lowerCaseWords.js";

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
  .then((out) => {
    console.log("Input:", mixedArray);
    console.log("Output:", out);   
  })
  .catch((err) => console.error("Error:", err.message));

