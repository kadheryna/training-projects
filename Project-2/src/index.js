const currentResult = document.querySelector(".currentResult p");
const previousResult = document.querySelector(".previousResult p");
const numbersButtons = document.querySelectorAll(".number");
const operatorsButtons = document.querySelectorAll(".operator");
const deleteButton = document.querySelector(".delete");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");
const mathSign = document.querySelector(".mathSign");

let result = "";

function displayNumbers() {
	if (this.textContent === "." && currentResult.innerHTML.includes(".")) return;
	if (this.textContent === "." && currentResult.innerHTML === "")
		return (currentResult.innerHTML = "0.");

	currentResult.innerHTML += this.textContent;
}

function operate() {
	if (currentResult.innerHTML === "" && this.textContent === "-") {
		currentResult.innerHTML = "-";
		return;
	} else if (currentResult.innerHTML === "") {
		return;
	}

	if (mathSign.innerHTML !== "") {
		showResult();
	}

	previousResult.innerHTML = currentResult.innerHTML;
	mathSign.innerHTML = this.textContent;
	currentResult.innerHTML = "";
}

function showResult() {
	if (previousResult.innerHTML === "" || currentResult.innerHTML === "") return;

	let a = Number(currentResult.innerHTML);
	let b = Number(previousResult.innerHTML);
	let operator = mathSign.innerHTML;

	switch (operator) {
		case "+":
			result = a + b;
			break;
		case "-":
			result = b - a;
			break;
		case "x":
			result = a * b;
			break;
		case "/":
			result = b / a;
			break;
	}

	currentResult.innerHTML = result;
	previousResult.innerHTML = "";
	mathSign.innerHTML = "";
}

function clear() {
	result = "";
	currentResult.innerHTML = "";
	previousResult.innerHTML = "";
	operatorsButtons.innerHTML = "";
}

function deleteNumber() {
	currentResult.innerHTML = currentResult.innerHTML.slice(0, -1);
}

operatorsButtons.forEach(button => button.addEventListener("click", operate));
equalButton.addEventListener("click", showResult);
clearButton.addEventListener("click", clear);
numbersButtons.forEach(button =>
	button.addEventListener("click", displayNumbers)
);
deleteButton.addEventListener("click", deleteNumber);
