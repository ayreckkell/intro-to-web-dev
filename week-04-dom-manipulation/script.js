
// When this function is called, it takes the values from the inputs and adds
// them to the outputs.


function fillOutputs() {

  // Get the animal input element
  const animalInput = document.getElementById('animal-input');
  // Get the text from the input element
  const animal = animalInput.value;

  // Get the animal output element
  const animalOutput = document.getElementById('animal-output');
  // Set the text of the input element
  animalOutput.innerText = animal;

  // Get the output container element
  const outputDiv = document.getElementById('output');
  // Make the output container element visible
  outputDiv.style.display = 'block';

}


function fillOutputs1(){
  // Get the country input element
  const countryInput = document.getElementById('country-input');
  // Get the text from the input element
  const country = countryInput.value;

  // Get the country output element
  const countryOutput = document.getElementById('country-output');
  // Set the text of the input element
  countryOutput.innerText = country;

  // Get the output container element
  const outputDiv = document.getElementById('output');
  // Make the output container element visible
  outputDiv.style.display = 'block';
}

function fillOutputs2(){
  // Get the noun input element
  const pluralnounInput = document.getElementById('pluralnoun-input');
  // Get the text from the input element
  const pluralnoun = pluralnounInput.value;

  // Get the noun output element
  const pluralnounOutput = document.getElementById('pluralnoun-output');
  // Set the text of the input element
  pluralnounOutput.innerText = pluralnoun;

  // Get the output container element
  const outputDiv = document.getElementById('output');
  // Make the output container element visible
  outputDiv.style.display = 'block';
}

function fillOutputs3(){
  // Get the food input element
  const foodInput = document.getElementById('food-input');
  // Get the text from the input element
  const food = foodInput.value;

  // Get the food output element
  const foodOutput = document.getElementById('food-output');
  // Set the text of the input element
  foodOutput.innerText = food;

  // Get the output container element
  const outputDiv = document.getElementById('output');
  // Make the output container element visible
  outputDiv.style.display = 'block';
}

function fillOutputs4(){
  // Get the device input element
  const deviceInput = document.getElementById('device-input');
  // Get the text from the input element
  const device = deviceInput.value;

  // Get the device output element
  const deviceOutput = document.getElementById('device-output');
  // Set the text of the input element
  deviceOutput.innerText = device;

  // Get the output container element
  const outputDiv = document.getElementById('output');
  // Make the output container element visible
  outputDiv.style.display = 'block';
}
