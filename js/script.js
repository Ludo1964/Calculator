const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
const history = document.querySelector(".history");
let pressedDigit = '';
let pressedOperator = '';
let classValue;
let firstNum = '';
let secondNum = '';
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

function power(a,b){
	sum = a;
	for(let i = 1; i<b; i++){
		sum = sum * a;

	}return sum;
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
	}else if(pressedOperator === '˄'){
		power(firstNum, secondNum);
	}
}

function displayNum(){
	if(pressedOperator === 'ce'){
		history.textContent = '';
		display.textContent = '';
		firstNum = '';
		secondNum = '';
		pressedOperator = '';
		sum = '';
	}else if(classValue === 'back' && secondNum === ''){
		let s = display.textContent;
		let z = s.slice(0, s.length-1);
		display.textContent = z;
		firstNum = z;
		//secondNum = z;
		//sum = z;
	}else if(classValue === 'back' && secondNum !== ''){
		let s = display.textContent;
		let z = s.slice(0, s.length-1);
		display.textContent = z;
		secondNum = z;
		operate(Number(firstNum), Number(secondNum), pressedOperator);
	}else if(pressedOperator === ''&& secondNum ==''){
		firstNum = firstNum + pressedDigit;
		display.textContent = firstNum;
		pressedDigit = '';
	}else if(pressedOperator !== '' && classValue === 'operator' && secondNum === ''){
		history.textContent = firstNum + ' ' + pressedOperator;
	}else if(pressedOperator !== '' && classValue === 'number'){
		display.textContent = '';
		secondNum = secondNum + pressedDigit;
		display.textContent = secondNum;
		operate(Number(firstNum), Number(secondNum), pressedOperator);
	}else if(firstNum !== '' && secondNum !== '' && classValue === 'operator'){
		firstNum = sum;
		secondNum = '';
		history.textContent = sum + ' ' + pressedOperator;
		display.textContent = sum;
	}else if(classValue === 'equal'){
		history.textContent = firstNum + ' ' +  pressedOperator + ' ' + secondNum + ' =';
		display.textContent = sum;
	}
}

buttons.forEach(button =>{
	button.addEventListener('click', (e) =>{
		if(e.target.classList.contains("back")){
			classValue = "back";
			//pressedOperator = 'back';
		}else if(e.target.classList.contains("number")){
			classValue = "number";
			pressedDigit  = e.target.value;
		}else if(e.target.classList.contains("operator")){
			classValue = "operator";
			pressedOperator  = e.target.value;
		}else if(e.target.classList.contains("equal")){
			classValue = "equal";
		}

		displayNum();
	});
});

