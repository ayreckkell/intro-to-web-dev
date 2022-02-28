// Replace this speeh with your own.
// Notice the `` backticks, which let you split your string into multiple lines.
const speech =
`On to battle
  Here we are the hunters
  Red as fire
  Crimson Bow and Arrow
  Waiting for the storm won't help you
  Just the will to fight can change you
  Clean your weapons blow the dust off
  Fear and prayers will never save us

  We can't hide our pride behind fear
  We will not let them be this near
  In the end our strength unites us
  Just the will to fight will save us
  No, we will never ever fail
  We stand up and we fight for the moment of the truth
  Stand up and fight for their demise
  We won't surrender`;

// Remove punctuation from the speech. You might have to modify this if your
// speech contains other punctuation.
const speechPunctuationRemoved = speech.replace(',', '').replace('.', '');

// Use a regular expression to split the speech into individual words. You
// shouldn't need to change this, unless you want to split on characters other
// than whitespace.
const wordsArray = speechPunctuationRemoved.split(/\s+/);

// Displays words that have more than 5 characters.
function displayLongWords() {
  const longWordsElement = document.getElementById('long-words');

  // Loop over every word in the array.
  for(let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    // If the word has more than 5 characters, display it in the page.
    if(word.length > 5) {
      const wordElement = document.createElement('li');
      wordElement.innerText = word;
      longWordsElement.appendChild(wordElement);
    }
  }
}


function displayShortWords(){
  const shortWordsElement = document.getElementById('short-words');

  for(let i = 0; i < wordsArray.length; i++) {
      const word = wordsArray[i];

      if(word.length < 4) {
        const wordElement = document.createElement('li');
        wordElement.innerText = word;
        shortWordsElement.appendChild(wordElement);
      }
  }
}







// TODO: Define your own functions here!

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayLongWords();

  displayShortWords();

  displayNameWords();

  // TODO: Call your functions here!
}
