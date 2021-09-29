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

function log(operatorIdentier, prevResult, operationNum, newResult) {
  const logEntry = {
    operation: operatorIdentier,
    prevResult: prevResult,
    number: operationNum,
    newResult: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNum;
  displayEquation(initialResult, '-', enteredNum);
  log('ADD', initialResult, enteredNum, currentResult);
}

function subtract() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNum;
  displayEquation(initialResult, '-', enteredNum);
  log('SUBTRACT', initialResult, enteredNum, currentResult);
}

function multiply() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNum;
  displayEquation(initialResult, 'x', enteredNum);
  log('MULTIPLY', initialResult, enteredNum, currentResult);
}

function divide() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNum;
  displayEquation(initialResult, '÷', enteredNum);
  log('DIVIDE', initialResult, enteredNum, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
