const codeCVC = document.getElementById("cvc");
const wrongCode = document.getElementById("wrongCode");
const cardCVC = document.getElementById("cardCVC");

const inputName = document.getElementById("inputName");
const cardholderName = document.getElementById("cardholderName");
const wrongName = document.getElementById("wrongName");

const cardNumber = document.getElementById("cardNumber");
const inputNumber = document.getElementById("inputNumber");
const wrongNumber = document.getElementById("wrongNumber");

const month = document.getElementById("month");
const year = document.getElementById("year");
const wrongDate = document.getElementById("wrongDate");
const cardMonth = document.getElementById("cardMonth");
const cardYear = document.getElementById("cardYear");

const confirmButton = document.getElementById("confirmButton");
const complete = document.getElementById("complete");
const userData = document.getElementById("userData");

function checkCardNumber() {
	const cardNumberValue = inputNumber.value.replace(/\s/g, "");
	const cardNumberExpression = /^\d{16}$/;
	const containsNonDigits = /[^\d]/.test(cardNumberValue);
	const defaultNumber = "1234 5678 9123 0000";
	let errorMessage = "";
	let formattedCardNumber;

	if (!cardNumberValue.length) {
		errorMessage = "Can't be blank";
	} else if (!cardNumberExpression.test(cardNumberValue)) {
		errorMessage = containsNonDigits
			? "Wrong format, letters only"
			: "Must be 16 digits";
	} else {
		formattedCardNumber = cardNumberValue.match(/.{1,4}/g).join(" ");
		cardNumber.innerText = formattedCardNumber;
	}

	wrongNumber.innerText = errorMessage;
	wrongNumber.classList.toggle("invisible", errorMessage === "");
	inputNumber.classList.toggle("invalidInput", errorMessage !== "");

	if (errorMessage === "") {
		cardNumber.innerText = formattedCardNumber || defaultNumber;
	}

	return formattedCardNumber;
}

function checkName() {
	const userName = inputName.value.trim();
	const containsDigits = /\d/.test(userName);
	const defaultName = "JANE APPLESEED";
	let errorMessage;

	let isValid = true;

	if (!userName) {
		errorMessage = "Can't be blank";
		isValid = false;
	} else if (containsDigits) {
		errorMessage = "Wrong format, letters only";
		isValid = false;
	}

	wrongName.innerText = errorMessage;
	wrongName.classList.toggle("invisible", isValid);
	inputName.classList.toggle("invalidInput", !isValid);

	cardholderName.innerText = isValid ? userName.toUpperCase() : defaultName;
	return userName;
}

function checkMonth() {
	const inputMonth = month.value;
	const defaultMonth = "00";
	let errorMessage;

	let isValid = true;

	if (inputMonth.length === 0) {
		errorMessage = "Can't be blank";
		isValid = false;
	} else {
		const monthNumber = Number(inputMonth);
		if (monthNumber < 1 || monthNumber > 12) {
			errorMessage = "Invalid date";
			isValid = false;
		}
	}

	if (inputMonth.length > 2) {
		errorMessage = "Number is too long";
		isValid = false;
	}

	wrongDate.classList.toggle("invisible", isValid);
	month.classList.toggle("invalidInput", !isValid);

	cardMonth.innerText = isValid ? inputMonth.padStart(2, "0") : defaultMonth;
	wrongDate.innerText = errorMessage;

	return inputMonth;
}

function checkYear() {
	const inputYear = year.value;
	const defaultYear = "00";
	let errorMessage;

	let isValid = true;

	if (inputYear.length > 2) {
		errorMessage = "Number is too long";
		isValid = false;
	} else if (inputYear.length === 0) {
		errorMessage = "Can't be blank";
		isValid = false;
	}

	wrongDate.classList.toggle("invisible", isValid);
	year.classList.toggle("invalidInput", !isValid);

	cardYear.innerText = isValid ? inputYear : defaultYear;
	wrongDate.innerText = errorMessage;

	return inputYear;
}

function checkCardCode() {
	const inputCode = codeCVC.value;
	const defaultCode = "000";
	let errorMessage;

	let isValid = true;

	if (inputCode.length > 3) {
		errorMessage = "Code is too long";
		isValid = false;
	} else if (inputCode.length === 0) {
		errorMessage = "Can't be blank";
		isValid = false;
	}

	wrongCode.classList.toggle("invisible", isValid);
	codeCVC.classList.toggle("invalidInput", !isValid);

	cardCVC.innerText = isValid ? inputCode.slice(0, 3) : defaultCode;
	wrongCode.innerText = errorMessage;

	return inputCode;
}

function confirmData() {
	const isValidCode = checkCardCode();
	const isValidMonth = checkMonth();
	const isValidYear = checkYear();
	const isValidName = checkName();
	const isValidNumber = checkCardNumber();

	if (
		isValidCode &&
		isValidMonth &&
		isValidYear &&
		isValidName &&
		isValidNumber
	) {
		userData.classList.add("hidden");
		complete.classList.remove("hidden");
	}
}

cvc.addEventListener("input", checkCardCode);
month.addEventListener("input", checkMonth);
year.addEventListener("input", checkYear);
inputName.addEventListener("input", checkName);
inputNumber.addEventListener("input", checkCardNumber);
confirmButton.addEventListener("click", confirmData);
