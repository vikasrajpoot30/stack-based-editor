import { Stack } from "./stack.js";

// Preventing user from copy-pasting text in the textbox
document.onkeydown = function (event) {
  if (event.ctrlKey || event.metaKey) {
    event.preventDefault();
  }
};

window.onload = function () {
  // Get references to elements
  const textbox = document.getElementById("comment");
  const undo = document.getElementById("undo");
  const clear = document.getElementById("clear");
  const temptext = document.getElementById("temptext");
  const charCount = document.createElement("p");
  const wordCount = document.createElement("p");

  // Add character and word count display
  charCount.id = "charCount";
  wordCount.id = "wordCount";
  temptext.parentNode.appendChild(charCount);
  temptext.parentNode.appendChild(wordCount);

  textbox.value = "";
  let text = "";
  let stack = new Stack();

  textbox.onclick = function () {
    textbox.selectionStart = textbox.selectionEnd = textbox.value.length;
  }; // Cursor always remains at the end of the string

  clear.onclick = function () {
    stack.clear();
    text = "";
    textbox.value = "";
    temptext.innerHTML = "LIFO REAL WORLD EXAMPLE";
    updateCounts();
    updateStackVisual();
  };

  textbox.oninput = function (event) {
    // Check input type for push/pop operation
    switch (event.inputType) {
      case "insertText":
        stack.push(0, event.data);
        break;
      case "deleteContentBackward":
        stack.push(1, text[text.length - 1]);
        break;
    }

    temptext.innerHTML = "On Stack: " + JSON.stringify(stack.top()) + "<br>" + temptext.innerHTML;
    text = textbox.value;
    updateCounts();
    updateStackVisual();
  };

  undo.onclick = function () {
    let operation = stack.pop();
    if (operation[0] !== -1) {
      temptext.innerHTML = "Undo operation in Progress..<br>" + temptext.innerHTML;
      if (operation[0] === 0) {
        let len = operation[1].length;
        textbox.value = textbox.value.substring(0, textbox.value.length - len);
      } else {
        textbox.value += operation[1];
      }
      text = textbox.value;
      updateCounts();
      updateStackVisual();
    }
  };

  function updateCounts() {
    let charLength = textbox.value.length;
    let wordLength = textbox.value.trim() ? textbox.value.trim().split(/\s+/).length : 0;
    charCount.innerText = "Characters: " + charLength;
    wordCount.innerText = "Words: " + wordLength;
  }

  // Update the visual representation of the stack
  function updateStackVisual() {
    const stackVisual = document.getElementById("stackVisual");
    stackVisual.innerHTML = ""; // Clear previous visualization

    // Display stack items; top of the stack will appear last in the array, so we reverse the order for display.
    stack.stack.forEach(item => {
      let div = document.createElement("div");
      div.classList.add("stack-item");
      let operation = item[0] === 0 ? "Push" : "Pop";
      div.innerText = `${operation}: ${item[1]}`;
      stackVisual.appendChild(div);
    });
  }
};
