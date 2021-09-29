const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value); //parseInt(value) == +value
}

function displayEquation(startNumb, symbol, enteredNum) {
  const calcDescription = `${startNumb} ${symbol} ${enteredNum}`;
  outputResult(currentResult, calcDescription);
}

function log(numb) {
  logEntries.push(numb);
  console.log(logEntries);
}

function add() {
  const enteredNum = getUserNumberInput(),
    calcDescription = `${currentResult} + ${enteredNum}`;
  currentResult += enteredNum;
  outputResult(currentResult, calcDescription);
  log(enteredNum);
}

function subtract() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNum;
  displayEquation(initialResult, '-', enteredNum);
  log(enteredNum);
}

function multiply() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNum;
  displayEquation(initialResult, 'x', enteredNum);
  log(enteredNum);
}

function divide() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNum;
  displayEquation(initialResult, '÷', enteredNum);
  log(enteredNum);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
