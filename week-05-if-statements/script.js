// When this function is called, it takes the user's answer to the first
// question and uses if statements to check whether it's correct.
function submitAnswerOne() {
  // Get answer one's input element
  const answerOneInput = document.getElementById('answer-one-input');
  // Get the text from answer one's input element
  const answerOne = answerOneInput.value;

  if(answerOne == 'force') {
    alert("That's right!");
    hide('question-one');
    show('question-two');
  } else if(answerOne == 'Schwartz') {
    alert('That is from Spaceball. Different movie but you are on the right track');
  } else {
    alert('Wrong! Hint: It starts with a f')
  }
}

// When this function is called, it takes the user's answer to the second
// question and uses if statements to check whether it's correct.
function submitAnswerTwo() {
  // Get answer two's input element
  const answerTwoInput = document.getElementById('answer-two-input');
  // Get the number from answer two's input element
  const answerTwo = answerTwoInput.value;

  if(answerTwo == 'Darth Sidious'  ) {
    alert("That's right!");
    hide('question-two');
    show('question-three');
  } else if(answerTwo == 'Anakin Skywalker') {
    alert('Not quite, but the guy did influnce him to become a villian');
  } else {
    alert('His a dark lord of the sith')
  }
}

function submitAnswerThree(){
  const answerThreeInput = document.getElementById('answer-three-input');
    const answerThree = answerThreeInput.value;
      if(answerThree == 'Anakin Skywalker') {
          alert("That's right!");
          hide( 'question-three');
          show( 'question-four');
      } else if ( answerThree == 'Luke Skywalker'){
          alert('Close but that the son you want the father');
      } else {
        alert ('He is a Skywalker')
      }
}

function submitAnswerFour(){
  const answerFourInput = document.getElementById('answer-four-input');
    const answerFour = answerFourInput.value;
      if(answerFour == 'Slave 1') {
          alert("That's right!");
          hide( 'question-four');
          show( 'question-five');
      } else if ( answerFour == 'Slave'){
          alert('Almost you forgot the second part');
      } else {
        alert ('Sorry no hint here just google it')
      }
}

function submitAnswerFive(){
  const answerFiveInput = document.getElementById('answer-five-input');
    const answerFive = answerFiveInput.value;
      if(answerFive == 'Han') {
          alert("That's right!");
          hide( 'question-five');
          show( 'question-six');
      } else if ( answerFive == 'Luke'){
          alert('HEY THAT DID NOT HAPPEN. TRY AGAIN');
      } else {
        alert ('He is one of the best piolts in the galaxy')
      }
}

function submitAnswerSix(){
  const answerSixInput = document.getElementById('answer-six-input');
    const answerSix = answerSixInput.value;
      if(answerSix == 'Anakin Skywalker') {
          alert("That's right!");
          hide( 'question-six');
          show( 'question-seven');
      } else if ( answerSix == 'Luke Skywalker'){
          alert('Have you seen the movies? Luke is the one fighting Darth Vader. Try the other Skywalker');
      } else {
        alert ('He is a Skywalker')
      }
}

function submitAnswerSeven(){
  const answerSevenInput = document.getElementById('answer-seven-input');
    const answerSeven = answerSevenInput.value;
      if(answerSeven == 'Kylo Ren') {
          alert("That's right!");
          hide( 'question-seven');
          show( 'question-eight');
      } else if ( answerSeven == 'Darth Vader'){
          alert('Not quite, he is Darth Vaders Grandson');
      } else {
        alert ('This character is know for his corss-guard lightsaber')
      }
}

function submitAnswerEight(){
  const answerEightInput = document.getElementById('answer-eight-input');
    const answerEight = answerEightInput.value;
      if(answerEight == 'Darth Bane') {
          alert("That's right!");
          hide( 'question-eight');
          show( 'question-nine');
      } else if ( answerEight == 'Darth Sidious'){
          alert('Not Sidious but he is a Sith Lord');
      } else {
        alert ('He is a Sith Lord')
      }
}

function submitAnswerNine(){
  const answerNineInput = document.getElementById('answer-nine-input');
    const answerNine = answerNineInput.value;
      if(answerNine == 'Boba Fett') {
          alert("That's right!");
          hide( 'question-nine');
          show( 'question-ten');
      } else if ( answerNine == 'Jango Fett'){
          alert('My guy he is dead. What is the sone name.');
      } else {
        alert ('The only character that is not even a main character in his own show')
      }
}

function submitAnswerTen(){
  const answerTenInput = document.getElementById('answer-ten-input');
    const answerTen = answerTenInput.value;
      if(answerTen == 'Hutt') {
          alert("That's right!");
          hide( 'question-ten');
          show( 'done');
      } else if ( answerTen == 'Big Worm'){
          alert('Your not wrong but what is the species name');
      } else {
        alert ('Jabba lives on the dessert Planet')
      }
}

// Helper function that takes an ID and shows the element with that ID.
function show(id) {
  const element = document.getElementById(id);
  element.style.display = 'block';
}

// Helper  function that takes an ID and hides the element with that ID.
function hide(id) {
  const element = document.getElementById(id);
  element.style.display = 'none';
}
