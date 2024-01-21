const currentResult = document.querySelector(".currentResult p");
const previousResult = document.querySelector(".previousResult p");
const numbersButtons = document.querySelectorAll(".number");
const operatorsButtons = document.querySelectorAll(".operator");
const resetButton = document.querySelector(".reset");
const deleteButton = document.querySelector(".delete");
const equalButton = document.querySelector(".equal");
const mathSign = document.querySelector(".mathSign");

const toggleBtns = document.querySelectorAll(".themeSwitcher div");

toggleBtns.forEach(function(btn, index) {
  btn.addEventListener('click', function() {
    const body = document.body;

    toggleBtns.forEach(function(toggleBtn, i) {
      if (i === index) {
        toggleBtn.classList.add("active");
        toggleBtn.classList.remove("transparent");
      } else {
        toggleBtn.classList.remove("active");
        toggleBtn.classList.add("transparent");
      }
    });

    body.id = `theme${index + 1}`;
  });
});

let result = "";

function displayNumbers() {
	if (this.textContent === "." && currentResult.innerText.includes(".")) return;
	if (this.textContent === "." && currentResult.innerText === "")
		return (currentResult.innerText = "0.");

	currentResult.innerText += this.textContent;
}

function operate() {
	if (currentResult.innerText === "") {
		return;
	}

	if (mathSign.innerText !== "") {
		showResult();
	}

	previousResult.innerText = currentResult.innerText;
	mathSign.innerText = this.textContent;
	currentResult.innerText = "";
}

function showResult() {
	if (previousResult.innerText === "" || currentResult.innerText === "") return;

	let a = Number(currentResult.innerText);
	let b = Number(previousResult.innerText);
	let operator = mathSign.innerText;

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

	currentResult.innerText = result;
	previousResult.innerText = "";
	mathSign.innerText = "";
}

function clear() {
	result.innerText = "";
	currentResult.innerText = "";
	previousResult.innerText = "";
	operatorsButtons.innerText = "";
	mathSign.innerText = "";
}

function deleteNumber() {
	currentResult.innerText = currentResult.innerText.slice(0, -1);
}

operatorsButtons.forEach(button => button.addEventListener("click", operate));
equalButton.addEventListener("click", showResult);
deleteButton.addEventListener("click", deleteNumber);
numbersButtons.forEach(button =>
	button.addEventListener("click", displayNumbers)
);
resetButton.addEventListener("click", clear);
