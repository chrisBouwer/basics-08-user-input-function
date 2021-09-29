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

function log(logEntry) {
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNum;
  displayEquation(initialResult, '-', enteredNum);
  const logEntry = {
    operation: 'ADD',
    prevResult: initialResult,
    number: enteredNum,
    newResutl: currentResult,
  };
  console.log(logEntry.operation);
  log(logEntry);
}

function subtract() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNum;
  displayEquation(initialResult, '-', enteredNum);
  const logEntry = {
    operation: 'SUBTRACT',
    prevResult: initialResult,
    number: enteredNum,
    newResutl: currentResult,
  };
  console.log(logEntry.operation);
  log(logEntry);
}

function multiply() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNum;
  displayEquation(initialResult, 'x', enteredNum);
  const logEntry = {
    operation: 'MULTIPLY',
    prevResult: initialResult,
    number: enteredNum,
    newResutl: currentResult,
  };
  console.log(logEntry.operation);
  log(logEntry);
}

function divide() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNum;
  displayEquation(initialResult, '÷', enteredNum);
  const logEntry = {
    operation: 'DIVIDE',
    prevResult: initialResult,
    number: enteredNum,
    newResutl: currentResult,
  };
  console.log(logEntry.operation);
  log(logEntry);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
