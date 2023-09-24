const inputDay = document.getElementById("day");
const labelForDay = document.querySelector(`label[for="${inputDay.id}"]`);
const warningDay = document.getElementById("warningDay");

const inputMonth = document.getElementById("month");
const labelForMonth = document.querySelector(`label[for="${inputMonth.id}"]`);
const warningMonth = document.getElementById("warningMonth");

const inputYear = document.getElementById("year");
const labelForYear = document.querySelector(`label[for="${inputYear.id}"]`);
const warningYear = document.getElementById("warningYear");

const calculatedDay = document.getElementsByClassName("calculatedDay");
const calculatedMonth = document.getElementsByClassName("calculatedMonth");
const calculatedYear = document.getElementsByClassName("calculatedYear");
const calculate = document.getElementById("calculate");

function checkDay() {
	const day = Number(inputDay.value);
	const month = Number(inputMonth.value);
	const year = Number(inputYear.value);
	const thirtyDaysMonths = [4, 6, 9, 11];
	let isValidDay = true;

	function checkLeapYear() {
		if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
			return true;
		} else {
			return false;
		}
	}

	if (day < 1 || day > 31) {
		isValidDay = false;
	} else if (thirtyDaysMonths.includes(month) && day > 30) {
		isValidDay = false;
	} else if (month === 2 && checkLeapYear(year)) {
		if (day > 29) {
			isValidDay = false;
		}
	} else if (month === 2 && !checkLeapYear(year)) {
		if (day > 28) {
			isValidDay = false;
		}
	}

	if (!isValidDay) {
		warningDay.innerHTML = "Must be a valid day";
		warningDay.classList.remove("invisible");
		inputDay.classList.add("invalidInput");
		labelForDay.classList.add("text-warningRed");
		return;
	} else {
		warningDay.classList.add("invisible");
		inputDay.classList.remove("invalidInput");
		labelForDay.classList.remove("text-warningRed");
	}
	return day;
}

function checkMonth() {
	const month = Number(inputMonth.value);
	if (month < 1 || month > 13) {
		warningMonth.innerHTML = "Must be a valid month";
		warningMonth.classList.remove("invisible");
		inputMonth.classList.add("invalidInput");
		labelForMonth.classList.add("text-warningRed");
		return;
	} else {
		warningMonth.classList.add("invisible");
		inputMonth.classList.remove("invalidInput");
		labelForMonth.classList.remove("text-warningRed");
	}
	return month;
}

function checkYear() {
	let year = Number(inputYear.value);
	if (year < 1936 || year > 2023) {
		warningYear.innerHTML = "Must be a valid year";
		warningYear.classList.remove("invisible");
		inputYear.classList.add("invalidInput");
		labelForYear.classList.add("text-warningRed");
		return;
	} else {
		warningYear.classList.add("invisible");
		inputYear.classList.remove("invalidInput");
		labelForYear.classList.remove("text-warningRed");
	}
	return year;
}

function calculateAge() {
	checkDay();
	checkMonth();
	checkYear();
}

inputDay.addEventListener("input", checkDay);
inputMonth.addEventListener("input", checkMonth);
inputYear.addEventListener("input", checkYear);
calculate.addEventListener("click", calculateAge);
