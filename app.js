const percentBtns = document.querySelectorAll(".percent-btn");
let activeButton = null;
const customBtn = document.getElementById("custom-input");
const billInput = document.getElementById("bill-amount");

percentBtns.forEach((button) => {
  button.addEventListener("click", () => {
    if (activeButton) {
      activeButton.classList.toggle("active");
    }
    activeButton = button;
    activeButton.classList.toggle("active");
  });

  button.addEventListener("click", () => {});
});

const removeActive = () => {
  activeButton.classList.remove("active");
};

billInput.addEventListener("input", () => {});

customBtn.addEventListener("click", removeActive);
