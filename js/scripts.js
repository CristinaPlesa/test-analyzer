function wordCounter(text) {
  const stringIsEmpty = text.trim().length === 0
  if (stringIsEmpty) return 0
  let wordCount = 0;
  const elements = text.split(" ");
  elements.forEach(function (element) {
    const elementIsntNumber = Number.isNaN(Number(element))
    if (elementIsntNumber) wordCount++;

  });
  return wordCount;
}

// business logic

function numberOfOccurrencesInText(word, text) {
  if (word === text) {
    return 1;
  }
  return 0;
}
