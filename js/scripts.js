function wordCounter(text) {
  if (text.length === 0) return 0;
  let wordCount = 0;
  const words = text.split(" ");
  words.forEach(function (word) {
    wordCount++;
  });
  return wordCount;
}