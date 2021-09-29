const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){
  return parseInt(userInput.value); //parseInt(value) == +value
}

function add() {
  const enteredNum = getUserNumberInput(),
  calcDescription = `${currentResult}` + ${enteredNum};
  currentResult += enteredNum; 
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
