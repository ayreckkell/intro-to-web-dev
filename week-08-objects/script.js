// Array of objects representing a todo list.
// Modify this array to contain your own list.
const bloodborneArray = [
  {bossname: 'Orphan Of Kos',
   Location: 'Lighthouse Hut' ,
   Difficulty: 8.5 + "/" + 10},

  {bossname: 'Ludwig',
   Location: 'Hunters Nightmare',
   Difficulty: 7 + "/" + 10},

  {bossname: 'Gehrman, The First Hunter',
   Location: 'Hunters Dream',
   Difficulty: 9 + "/" + 10},

  {bossname: 'Martyr Logarius',
   Location: 'Forsaken Cainhurst Castle' ,
   Difficulty: 8 + "/" + 10},

  {bossname: 'Cleric Beast',
   Location: 'Central Yharnam The Great Bridge' ,
   Difficulty: 5 + "/" + 10},

  {bossname: 'Father Gascoigne',
   Location: 'Cathedral Ward Great Cathedral' ,
   Difficulty: 6 + "/" + 10},

  {bossname: 'Vicar Amelia',
   Location: 'Central Yharnam Oedons Tombe' ,
   Difficulty: 4.5 + "/" + 10},

  {bossname: 'Blood-Starved Beast',
   Location: 'Hemick Charnel Lane Witchs Abode' ,
   Difficulty: 6.5 + "/" + 10},

  {bossname: 'The Witch of Hemwick',
   Location: 'Old Yharnam Church of the Good Chalice' ,
   Difficulty: .5 + "/" + 10},

  {bossname: 'Darkbeast Paarl',
   Location: 'Graveyard of the Darkbeast' ,
   Difficulty: 5 + "/" + 10},



];

// Loads the content into the page.
function loadContent() {
  // This line of code sorts the array alphabetically by the task bossnames.
  // Modify this to sort your data by a different field, or just delete it.
  bloodborneArray.sort((a, b) => compare(a.Difficulty, b.Difficulty));

  loadTable();
  loadShortestTask();
  loadAverage();
}

// Adds a task to the array and reloads the page content.
function addNewTask() {
  const newTaskbossname = document.getElementById('bossname-input').value;
  const newTaskDifficulty = document.getElementById('Difficulty-input').value + '/10';
  const newTaskLocation = document.getElementById('Location-input').value;
  const newTask = {bossname: newTaskbossname, Difficulty: newTaskDifficulty, Location: newTaskLocation };
  bloodborneArray.push(newTask);

  loadContent();
}

// Iterates over the data array to create a table.
function loadTable() {
  const tableElement = document.createElement('table');

  // Create a header row.
  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', 'Boss Name'));
  headerRowElement.appendChild(createElement('th', 'Location'));
  headerRowElement.appendChild(createElement('th', 'Difficulty'));
  tableElement.appendChild(headerRowElement);

  // Iterate over the array and create a table row for each object.
  for (let i = 0; i < bloodborneArray.length; i++) {
    const task = bloodborneArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', task.bossname));
    rowElement.appendChild(createElement('td', task.Location));
    rowElement.appendChild(createElement('td', task.Difficulty));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

// Displays the name of the shortest task.
function loadShortestTask(){
  // Assume the first task is shortest
  let shortestTask = bloodborneArray[0];

  // Starting with the second task, look for a shorter task
  for (let i = 1; i < bloodborneArray.length; i++) {
    const task = bloodborneArray[i];
    // If this task is shorter than the previous shortest, it's now the shortest
    if(task.Difficulty < shortestTask.Difficulty) {
      shortestTask = task;
    }
  }
  document.getElementById('shortest-task').innerText = shortestTask.bossname;
}




// Displays the name of the Average task.
function loadAverage(){
  let total = 0;
 for(let i = 0; i < bloodborneArray.length; i++){
    console.log (total)
   const boss = bloodborneArray[i];
    total += Number(boss.Difficulty.split('/')[0]);

 }
  let average = total / bloodborneArray.length;
  console.log (average);
  document.getElementById('average-task').innerText = average
  }







// Helper function that creates an element that contains text content.
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;
}

// Helper function that compares two values.
// Works on strings, numbers, and dates.
function compare(valueOne, valueTwo) {
  // valueOne comes before valueTwo
  if (valueOne < valueTwo) {
    return -1;
  }

  // valueOne comes after valueTwo
  if (valueOne > valueTwo) {
    return 1;
  }

  // valueOne and valueTwo are equal
  return 0;
}
