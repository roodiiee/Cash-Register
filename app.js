const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes")
const availableNote = [2000, 500, 100, 20, 10, 1];

function validateAmount() {
  message.style.display = "none";
  if (Number(billAmount.value) > 0) {
    if (Number(cashGiven.value) >= Number(billAmount.value)) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage();
      message.innerText = "DO YOU WANT TO WASH PLATES??";
    }
  } else {
    showMessage();
  }
}
function showMessage() {
  message.style.display = "block";
  message.innerText = "The bill amount should be greater than 0";
}
function calculateChange(amountToBeReturned) {
  for (let i = 0; i <= availableNote.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNote[i]);
    amountToBeReturned %= availableNote[i]
    noOfNotes[i].innerText = numberOfNotes
  }
}

checkButton.addEventListener("click", validateAmount);
