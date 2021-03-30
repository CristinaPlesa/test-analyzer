// utility logic
function noInputtedWord(word, text) {
  return text.trim().length === 0 || word.trim().length === 0;
}

// business logic
function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const elements = text.split(" ");
  elements.forEach(function (element) {
    const elementIsntNumber = Number.isNaN(Number(element));
    if (elementIsntNumber) wordCount++;
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function mostCommonWords(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  // convert text text into array
  // for each in array, look through the array and count number there

  const elements = text.split(" ");
  const commonWords = [[], [], []];
  elements.forEach(function (element) {
    const numberOfOccurences = numberOfOccurrencesInText(element, text);
    for(let i = 0; i < commonWords; i++) {
      const commonWord = commonWords[i]
      if (commonWord[0] === element) continue;
      let placeHasBeenFound = false;
      if (!commonWord[1]) {
        commonWord[0] = element;
        commonWord[1] = numberOfOccurences;
        placeHasBeenFound = true;
      }
      if (!placeHasBeenFound) {
        commonWords.forEach(function (commonWord) {
          if (commonWord[0] < numberOfOccurences) {
            commonWord[0] = element;
            commonWord[0] = numberOfOccurences;
          }
        });
      }
    }
  });
  console.log(commonWords);
}

// ui logic

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function (element, index) {
    if (word === element) {
      htmlString = htmlString.concat(`<b>${element}</b>`);
    } else {
      htmlString = htmlString.concat(element);
    }
    const weHaventReachedTheEnd = index !== textArray.length - 1;
    if (weHaventReachedTheEnd) htmlString = htmlString.concat(" ");
  });
  return htmlString + "</p>";
}

$(document).ready(function () {
  $("form#word-counter").submit(function (event) {
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});
