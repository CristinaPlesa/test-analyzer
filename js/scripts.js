function wordCounter(text) {
  const stringIsEmpty = text.trim().length === 0
  if (stringIsEmpty) return 0
  let wordCount = 0;
  const words = text.split(" ");
  words.forEach(function (word) {
    const wordIsntNumber = !Number(word)
    if (wordIsntNumber) wordCount++;

  });
  return wordCount;
}