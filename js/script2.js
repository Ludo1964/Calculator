const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const history = document.querySelector(".history");
let firstNum = '';
let secondNum = '';
let pressedDigit = '';
let pressedOperator = '';
let sum;

function add(x,y){
	sum = x + y;
	return sum;
}

function deduct(x,y){
	sum = x - y;
	return sum;
}

function multiply(x,y){
	sum = x * y;
	return sum;
}

function devide(x,y){
	sum = x / y;
	return sum;
}

function operate(firstNum, secondNum, pressedOperator){
	if(pressedOperator === '+'){
		add(firstNum,secondNum);
	}else if(pressedOperator === 'x'){
		multiply(firstNum, secondNum);
	}else if(pressedOperator === '÷'){
		devide(firstNum, secondNum);
	}else if(pressedOperator === '-'){
		deduct(firstNum, secondNum);
	}
}


operators.forEach(operator =>{
	operator.addEventListener("click", (e) =>{

		pressedOperator = (e.target.value);

		if(secondNum == ""){
			history.innerHTML = firstNum + pressedOperator;
		}else if(secondNum !== ""){
			operate(Number(firstNum), Number(secondNum), pressedOperator);
			firstNum = sum;
			secondNum = '';
			history.innerHTML = sum + pressedOperator;
			display.innerHTML = sum;
		}
	});
});

numbers.forEach(number =>{
	number.addEventListener('click', (e) =>{
		pressedDigit = (e.target.value);
		if(pressedOperator === ""){
			firstNum = firstNum + pressedDigit;
			display.innerHTML = firstNum;
		}else {
			secondNum = secondNum + pressedDigit;
			display.innerHTML = secondNum;
		}


	});
});