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

function displayNameWords(){
  const nameWordsElement = document.getElementById('name-words');

  for(let i = 0; i < wordsArray.length; i++) {
      const word = wordsArray[i];

      if(wordsArray[i].startsWith ('a')) {
        const wordElement = document.createElement('li');
        wordElement.innerText = word;
        nameWordsElement.appendChild(wordElement);
      }
  }
}

function displaySmallWords(){
  const smallWordsElement = document.getElementById('small-words');

  for(let i = 0; i < wordsArray.length; i++) {
      const word = wordsArray[i];

      if(word.length <= 2) {
        const wordElement = document.createElement('li');
        wordElement.innerText = word;
        smallWordsElement.appendChild(wordElement);
      }
  }
}

function displayThirdWords(){
  const thirdWordsElement = document.getElementById('third-words');

  for(let i = 2; i <= 100; i += 3) {
      const word = wordsArray[i];



      if(word) {
        const wordElement = document.createElement('li');
        wordElement.innerText = word;
        thirdWordsElement.appendChild(wordElement);
      }



  }
}

function displayUncommonWords() {

  let commonWords = [ 'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'I']

  const uncommonWordsElement = document.getElementById('uncommon-words');

      for(let word of wordsArray) {


        if( !commonWords.includes(word)){
          const wordElement = document.createElement('li');
          wordElement.innerText = word;
          uncommonWordsElement.appendChild(wordElement);
        }
      }
}




// TODO: Define your own functions here!

function displaySpeechStats() {
  document.getElementById('speech').innerText = speech;

  displayLongWords();

  displayShortWords();

  displayNameWords();

  displaySmallWords();

  displayThirdWords();

  displayUncommonWords();
  // TODO: Call your functions here!
}
