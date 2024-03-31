const numberInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

let testRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/g;

const numberValidator = (number) => {
  if (number === "") {
    window.alert("Please provide a phone number");
  } else if (number.match(testRegex)) {
    console.log(`${number}`);
    resultsDiv.innerText += `Valid US number: ${number}\n`;
  } else {
    console.log(`${number} invalido`);
    resultsDiv.innerText += `Invalid US number: ${number}\n`;
  }
};

checkBtn.addEventListener("click", function () {
  const userInput = numberInput.value;
  numberValidator(userInput);
  numberInput.value = "";
});

numberInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const userInput = numberInput.value;
    numberValidator(userInput);
    numberInput.value = "";
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.innerText = "";
});
