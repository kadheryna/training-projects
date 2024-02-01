const inputDay = document.getElementById("day");
const labelForDay = document.querySelector(`label[for="${inputDay.id}"]`);
const warningDay = document.getElementById("warningDay");

const inputMonth = document.getElementById("month");
const labelForMonth = document.querySelector(`label[for="${inputMonth.id}"]`);
const warningMonth = document.getElementById("warningMonth");

const inputYear = document.getElementById("year");
const labelForYear = document.querySelector(`label[for="${inputYear.id}"]`);
const warningYear = document.getElementById("warningYear");

const resultDays = document.getElementById("resultDays");
const resultMonths = document.getElementById("resultMonths");
const resultYears = document.getElementById("resultYears");
const calculate = document.getElementById("calculate");

let date = new Date();
let currentDay = date.getDate();
let currentMonth = date.getMonth() + 1;
let currentYear = date.getFullYear();

function checkDay() {
  const day = Number(inputDay.value);
  const month = Number(inputMonth.value);
  const year = Number(inputYear.value);
  const thirtyDaysMonths = [4, 6, 9, 11];
  let isValidDay = true;

  function checkLeapYear() {
    return (0 == year % 4 && 0 != year % 100) || 0 == year % 400;
  }

  if (
    day < 1 ||
    day > 31 ||
    (thirtyDaysMonths.includes(month) && day > 30) ||
    (month === 2 &&
      ((checkLeapYear(year) && day > 29) || (!checkLeapYear(year) && day > 28)))
  ) {
    isValidDay = false;
  }

  warningDay.innerText = "Must be a valid day";
  warningDay.classList.toggle("invisible", isValidDay);
  inputDay.classList.toggle("invalidInput", !isValidDay);
  labelForDay.classList.toggle("text-warningRed", !isValidDay);

  return day;
}

function checkMonth() {
  const month = Number(inputMonth.value);
  let isValidMonth = true;
  if (month < 1 || month >= 13) isValidMonth = false;

  warningMonth.innerText = "Must be a valid month";
  warningMonth.classList.toggle("invisible", isValidMonth);
  inputMonth.classList.toggle("invalidInput", !isValidMonth);
  labelForMonth.classList.toggle("text-warningRed", !isValidMonth);

  return month;
}

function checkYear() {
  const year = Number(inputYear.value);
  const isInvalidYear = year < 1936 && year < currentYear;
  const isFutureYear = year > currentYear;

  warningYear.innerText = "Must be a valid year";
  warningYear.classList.toggle("invisible", !isInvalidYear && !isFutureYear);
  inputYear.classList.toggle("invalidInput", isInvalidYear || isFutureYear);
  labelForYear.classList.toggle(
    "text-warningRed",
    isInvalidYear || isFutureYear,
  );

  return year;
}

function calculateAge() {
  let userDay = Number(inputDay.value);
  let userMonth = Number(inputMonth.value);
  let userYear = Number(inputYear.value);
  let userDate = new Date(`${userYear}-${userMonth}-${userDay}`);

  let differenceMs = date - userDate;

  let milForDay = 24 * 60 * 60 * 1000;
  let milForMonth = milForDay * 30.44;
  let milForYear = milForDay * 365.25;

  let years = Math.floor(differenceMs / milForYear);
  differenceMs %= milForYear;

  let months = Math.floor(differenceMs / milForMonth);
  differenceMs %= milForMonth;

  let days = Math.floor(differenceMs / milForDay);

  animateNumbers(years, months, days);
}

function animateNumbers(targetYears, targetMonths, targetDays) {
  let currentYear = 0;
  let currentMonth = 0;
  let currentDay = 0;

  const interval = 50;
  const stepYear = Math.ceil(targetYears / (1000 / interval));
  const stepMonth = Math.ceil(targetMonths / (1000 / interval));
  const stepDay = Math.ceil(targetDays / (1000 / interval));

  const yearInterval = setInterval(() => {
    currentYear += stepYear;
    if (currentYear >= targetYears) {
      currentYear = targetYears;
      clearInterval(yearInterval);
    }
    resultYears.innerHTML = currentYear;
  }, interval);

  const monthInterval = setInterval(() => {
    currentMonth += stepMonth;
    if (currentMonth >= targetMonths) {
      currentMonth = targetMonths;
      clearInterval(monthInterval);
    }
    resultMonths.innerHTML = currentMonth;
  }, interval);

  const dayInterval = setInterval(() => {
    currentDay += stepDay;
    if (currentDay >= targetDays) {
      currentDay = targetDays;
      clearInterval(dayInterval);
    }
    resultDays.innerHTML = currentDay;
  }, interval);
}

function calculateButton() {
  let validDay = checkDay();
  let validMonth = checkMonth();
  let validYear = checkYear();
  let errorMessage = "This field is required";

  warningDay.innerText = !validDay ? errorMessage : "";
  warningMonth.innerText = !validMonth ? errorMessage : "";
  warningYear.innerText = !validYear ? errorMessage : "";

  const isInvalidDate = !validDay || !validMonth || !validYear;

  errorMessage = isInvalidDate ? "Must be a valid date" : "";
  warningDay.classList.toggle("invisible", !isInvalidDate);
  warningMonth.classList.toggle("invisible", !isInvalidDate);
  warningYear.classList.toggle("invisible", !isInvalidDate);

  if (!isInvalidDate) {
    calculateAge();
  }
}

inputDay.addEventListener("input", checkDay);
inputMonth.addEventListener("input", checkMonth);
inputYear.addEventListener("input", checkYear);
calculate.addEventListener("click", calculateButton);
