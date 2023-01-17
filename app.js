function getFourDigitPin() {
  let generatePin = Math.round(Math.random() * 10000);
  let pinStr = generatePin + "";
  if (pinStr.length == 4) {
    return generatePin;
  } else {
    return getFourDigitPin();
  }
}

document.getElementById("generate-pin").addEventListener("click", () => {
  document.getElementById("displayPin").value = getFourDigitPin();
});
let wrongPin = document.getElementById("wrong");
let successPin = document.getElementById("success");
let counter = 3;

document.getElementById("keypad").addEventListener("click", (e) => {
  let allnum = e.target.innerText;

  if (isNaN(allnum)) {
    if (allnum == "C") {
      document.getElementById("showNum").value = "";
    }
    if (allnum == "<") {
      document.getElementById("showNum").value = document
        .getElementById("showNum")
        .value.slice(0, -1);
    }
    if (allnum == "Submit") {
      let pin = document.getElementById("displayPin").value;
      let userInput = document.getElementById("showNum").value;
      if (pin == userInput) {
        wrongPin.style.display = "none";
        successPin.style.display = "block";
      } else {
        counter--;
        if (counter <= 0 && counter <= 3) {
          tryAgain.innerText = `try again new pin`;
        } else if (counter <= 3) {
          let tryAgain = document.getElementById("tryAgain");
          tryAgain.innerText = `${counter} try left`;
        }
        wrongPin.style.display = " block";
        successPin.style.display = "none";
      }
    }
  } else {
    document.getElementById("showNum").value += allnum;
  }
});
