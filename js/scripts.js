// business logic
function wordCounter(text) {
  const stringIsEmpty = text.trim().length === 0;
  if (stringIsEmpty) return 0;
  let wordCount = 0;
  const elements = text.split(" ");
  elements.forEach(function (element) {
    const elementIsntNumber = Number.isNaN(Number(element));
    if (elementIsntNumber) wordCount++;
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}
console.log(numberOfOccurrencesInText("red", "red"));
