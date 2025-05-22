let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value; // Concatenate values
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    console.log("error");
    display.value = "Error";
  }
}
