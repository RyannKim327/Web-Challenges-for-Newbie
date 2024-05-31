let currentInput = "";
let currentOperator = "";
let currentValue = "";
const result = document.getElementById("result")

clearInput()

function appendNumber(n){
  if(n == "." && !currentValue.includes(".")){
    currentValue += n;
  }else if(n != "."){
    currentValue += n;
  }
  if(currentValue.startsWith("0") && !currentValue.includes(".")){
    currentValue = currentValue.substring(1);
  }
  result.value = currentValue;
  currentOperator = "";
  result.selectionStart = result.selectionEnd.length;
}

function operator(o){
  currentOperator = o;
  currentInput += currentValue;
  currentInput += currentOperator;
  currentValue = "0";
  result.value = "0";
}

function equals(){
  let val = eval(`${currentInput}${currentValue}`);
  if(!val){
    val = "Error";
  }
  result.value = val;
}

function clearInput(){
  result.value = "0";
  currentOperator = "";
  currentInput = "";
  currentValue = "";
}

function backspace(){
  if(currentValue.length > 0){
    currentValue = currentValue.substring(0, result.value.length - 1);
  }
  if(currentValue <= 0){
    currentValue = "0";
  }
  result.value = currentValue;
}
