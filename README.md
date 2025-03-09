# Stack Editor Project

## Project Overview

This project demonstrates how a **stack** (Last In, First Out - LIFO) data structure works behind the scenes. The application captures text input and displays each push and pop operation to help you understand how stack operations occur.

**Key Features:**
- **Real-time Visualization:** See every stack operation as text is inserted or deleted.
- **Live Character and Word Count:** Monitor the number of characters and words as you type.
- **Undo Functionality:** Reverse the most recent operation to showcase LIFO behavior.
- **Reset Functionality:** Clear the stack and text for a fresh start.

Navigate through the application to observe how each keystroke affects the underlying stack data structure.

## Technical Documentation

### Overview

This project is built to demonstrate the inner workings of a stack data structure using a text editor interface. Every key operation (insertion or deletion) is recorded in a stack, illustrating the fundamental **LIFO** behavior.

### Stack Implementation

The stack is implemented via a `Stack` class that manages an array of operations. Each entry in the stack consists of:
- **Type:** `0` for an insertion (push operation) and `1` for a deletion (pop operation).
- **Value:** The character(s) involved in the operation.

#### Key Methods

- **`push(type, char)`**:  
  Adds a new operation to the stack. If the previous operation is of the same type and within a defined buffer limit, it concatenates the characters together.

- **`pop()`**:  
  Removes and returns the most recent operation. This method is used during the **Undo** process to reverse the last text change.

- **`clear()`**:  
  Resets the stack, removing all recorded operations.

### Operation Flow

- **Insertion:**  
  When the user types, an insertion operation (push) is recorded on the stack.
  
- **Deletion:**  
  When the user deletes a character (using backspace), a deletion operation is recorded.
  
- **Undo:**  
  Clicking the **Undo** button pops the last operation from the stack and reverses the corresponding text change, thereby demonstrating the LIFO principle.

This technical documentation provides an in-depth explanation of the mechanisms behind the Stack Editor, making it clear how the stack handles text modifications.

## Files and Structure

- **index.html:** Main application containing the Stack Editor interface.
- **stack.js:** Contains the `Stack` class implementation.
- **script.js:** Application logic handling text input, stack operations, and UI updates.
- **style.css:** Styling for the project, including the stack visualization and overall UI.

## How to Run

1. Clone the repository.
2. Open `index.html` in your preferred web browser.
3. Begin typing in the text area to see the stack operations visualized in real-time.
4. Use the **Undo** button to reverse operations and the **Reset** button to clear the stack and text.

---

