const bill = document.getElementById("bill");
const people = document.getElementById("people");
const wrongNumber = document.getElementById("wrongNumber");
const wrongAmount = document.getElementById("wrongAmount");
const customTip = document.getElementById("customTip");
const tipTotal = document.getElementById("tipTotal");
const personTotal = document.getElementById("personTotal");
const resetButton = document.getElementById("reset");
const tipButton = document.querySelectorAll(".tipButton");

function checkData(event) {
  const input = event.target;
  let inputValue = input.value;

  input.value = inputValue.replace(/[^0-9.]/g, "");

  const hasInvalidChars =
    isNaN(inputValue) ||
    inputValue === "" ||
    inputValue == 0 ||
    /^0[0-9]+$/.test(inputValue) ||
    /\.\d*0$/.test(inputValue) ||
    inputValue.split(".").length > 2 ||
    inputValue.endsWith(".");

  input.classList.toggle("correctData", !hasInvalidChars);
  input.classList.toggle("invalidData", hasInvalidChars);

  if (input.id === "people") {
    wrongAmount.textContent = hasInvalidChars ? "Can't be zero" : "";
    wrongAmount.classList.toggle("invisible", !hasInvalidChars);
  } else if (input.id === "bill") {
    wrongNumber.textContent = hasInvalidChars ? "Can't be zero" : "";
    wrongNumber.classList.toggle("invisible", !hasInvalidChars);
  }

  if (!hasInvalidChars) return inputValue;
}

function calculate() {
  let tipValue = this.value;
  const billValue = parseFloat(checkData({ target: bill }));
  const peopleValue = parseFloat(checkData({ target: people }));
  const customTipValue = parseFloat(checkData({ target: customTip }));
  let result = 0;

  if (!isNaN(billValue) && !isNaN(peopleValue)) {
    switch (tipValue) {
      case "5%":
        result = billValue * 0.05;
        break;
      case "10%":
        result = billValue * 0.1;
        break;
      case "15%":
        result = billValue * 0.15;
        break;
      case "25%":
        result = billValue * 0.25;
        break;
      case "50%":
        result = billValue * 0.5;
        break;
      case `${customTipValue}`:
        result = billValue * (customTipValue / 100);
        break;
    }

    let calculatedTip = (result / peopleValue).toFixed(2);
    tipTotal.textContent = `$${calculatedTip}`;
    let calculatedTotal = (
      billValue / peopleValue +
      parseFloat(calculatedTip)
    ).toFixed(2);
    personTotal.textContent = `$${calculatedTotal}`;
  }
}

function reset() {
  personTotal.textContent = "$0.00";
  tipTotal.textContent = "$0.00";
  people.value = "";
  bill.value = "";
  customTip.value = "";
}

bill.addEventListener("input", checkData);
people.addEventListener("input", checkData);
customTip.addEventListener("input", checkData);
customTip.addEventListener("input", calculate);
resetButton.addEventListener("click", reset);
tipButton.forEach((button) => button.addEventListener("click", calculate));

function reset() {
  personTotal.textContent = "$0.00";
  tipTotal.textContent = "$0.00";
  people.value = "";
  bill.value = "";
  customTip.value = "";
}

bill.addEventListener("input", checkData);
people.addEventListener("input", checkData);
customTip.addEventListener("input", checkData);
customTip.addEventListener("input", calculate);
resetButton.addEventListener("click", reset);
tipButton.forEach((button) => button.addEventListener("click", calculate));
