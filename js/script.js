const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const history = document.querySelector(".history");
let firstNum = '';
let secondNum = '';
let pressedDigit = '';
let pressedOperator = '';



numbers.forEach(number =>{
	number.addEventListener('click', (e) =>{
		pressedDigit = (e.target.value);
		if(pressedOperator === ''){
			firstNum =  firstNum + pressedDigit;
			display.innerHTML = firstNum;
		}else if(pressedOperator !== ''){
			secondNum = secondNum + pressedDigit;
			display.innerHTML = secondNum;
			history.innerHTML = firstNum + pressedOperator + secondNum;
		}

	});
});

operators.forEach(number =>{
	number.addEventListener("click", (e) =>{
		pressedOperator = (e.target.value);
    	history.innerHTML = firstNum + pressedOperator;
	});
})



