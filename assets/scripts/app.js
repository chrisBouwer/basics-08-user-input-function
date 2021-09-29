const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value); //parseInt(value) == +value
}

function displayEquation(startNumb, symbol, enteredNum) {
  const calcDescription = `${startNumb} ${symbol} ${enteredNum}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredNum = getUserNumberInput(),
    calcDescription = `${currentResult} + ${enteredNum}`;
  currentResult += enteredNum;
  outputResult(currentResult, calcDescription);
}

function subtract() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNum;
  displayEquation(initialResult, '-', enteredNum);
}

function multiply() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNum;
  displayEquation(initialResult, 'x', enteredNum);
}

function divide() {
  const enteredNum = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNum;
  displayEquation(initialResult, '÷', enteredNum);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
