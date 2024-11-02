const inputField = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputContainer = document.querySelector(".output-container");
const output = document.getElementById("output");
let roman = "";
let arabicArr = [];

convertBtn.addEventListener("click", () => {
  outputContainer.classList.remove("hidden");
  if (!inputField.value.trim()) {
    output.textContent = "Please enter a valid number";
  } else if (inputField.value.trim() < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (inputField.value.trim() > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    setPositions(inputField.value);
    makeRoman(arabicArr);
  }
});

const setPositions = (arabicNumber) => {
  arabicArr = arabicNumber.split("");
  for (let i = 1; i <= 4 - arabicNumber.length; i++) {
    arabicArr.unshift(0);
  }
};

const makeRoman = (arabicArr) => {
  roman = "";
  for (let index = 0; index <= arabicArr.length; index++) {
    if (arabicArr[index] > 0) {
      if (index === 0) {
        while (arabicArr[index] > 0) {
          roman += "M";
          arabicArr[index]--;
        }
      } else if (index === 1) {
        if (arabicArr[index] == 9) {
          roman += "CM";
        } else if (arabicArr[index] >= 5) {
          roman += "D";
          while (arabicArr[index] > 5) {
            roman += "C";
            arabicArr[index]--;
          }
        } else if (arabicArr[index] == 4) {
          roman += "CD";
        } else {
          while (arabicArr[index] > 0) {
            roman += "C";
            arabicArr[index]--;
          }
        }
      } else if (index === 2) {
        if (arabicArr[index] == 9) {
          roman += "XC";
        } else if (arabicArr[index] >= 5) {
          roman += "L";
          while (arabicArr[index] > 5) {
            roman += "X";
            arabicArr[index]--;
          }
        } else if (arabicArr[index] == 4) {
          roman += "XL";
        } else {
          while (arabicArr[index] > 0) {
            roman += "X";
            arabicArr[index]--;
          }
        }
      } else {
        if (arabicArr[index] == 9) {
          roman += "IX";
        } else if (arabicArr[index] >= 5) {
          roman += "V";
          while (arabicArr[index] > 5) {
            roman += "I";
            arabicArr[index]--;
          }
        } else if (arabicArr[index] == 4) {
          roman += "IV";
        } else {
          while (arabicArr[index] > 0) {
            roman += "I";
            arabicArr[index]--;
          }
        }
      }
    }
  }
  console.log(roman);
};
