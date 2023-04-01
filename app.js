const percentBtns = document.querySelectorAll(".percent-btn");
const customBtn = document.getElementById("custom-input");
const billInput = document.getElementById("bill-amount");
const tipAmount = document.getElementById("total");
const billTotal = document.getElementById("bill-total");
const numberPeople = document.getElementById("number-people");
const resetButton = document.getElementById("reset");

let activeButton = null;

function calculateTipAmount() {
  const billAmount = parseFloat(billInput.value);
  const tipPercentage = parseFloat(activeButton.value);

  let tipTotal = billAmount * tipPercentage;

  tipAmount.textContent = `$${tipTotal.toFixed(2)}`;
  return tipTotal;
}

function handleCustomTip() {
  const customTipInput = document.getElementById("custom-tip");
  const customTipValue = parseFloat(customTipInput.value);
  if (customTipValue) {
    activateButton(customBtn);
    calculateTipAmount();
  }
}

function splitBillandTip() {
  const peopleCount = parseFloat(numberPeople.value);
  if (peopleCount) {
    const billAmount = parseFloat(billInput.value);
    const tipAmount = calculateTipAmount();
    const totalAmount = billAmount + tipAmount;
    const perPersonAmount = totalAmount / peopleCount;
    billTotal.textContent = `$${perPersonAmount.toFixed(2)}`;
  }
}

function activateButton(button) {
  if (activeButton) {
    activeButton.classList.remove("active");
  }
  activeButton = button;
  activeButton.classList.add("active");
}

function resetApp() {
  billInput.value = "";
  customBtn.value = "";
  numberPeople.value = "";
  tipAmount.textContent = "$0.00";
  billTotal.textContent = "$0.00";
  if (activeButton) {
    activeButton.classList.remove("active");
  }
}

const removeActive = () => {
  activeButton.classList.remove("active");
};

percentBtns.forEach((button) => {
  button.addEventListener("click", () => {
    activateButton(button);
    splitBillandTip();
  });
});

customBtn.addEventListener("click", handleCustomTip);
customBtn.addEventListener("click", removeActive);
numberPeople.addEventListener("input", splitBillandTip);
resetButton.addEventListener("click", resetApp);
