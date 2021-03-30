function wordCounter(text) {
  if (text.length === 0) {
    return 0;
  }
  let wordCount = 0;
  const words = text.split(" ");
  words.forEach(function (word) {
    wordCount++;
  });
  return wordCount;
}

function wordCounterWithArrow(text) {
  if (text.length === 0) return 0
  let wordCount = 0
  const words = text.split(" ")
  words.forEach(word => {
    wordCount++
  })
  return wordCount
}


function doubleMe(number) {
  const doubledNumber = number * 2
  return doubledNumber
}
const doubleMe = number => {
  return number * 2
}
const doubleMe = number => number * 2