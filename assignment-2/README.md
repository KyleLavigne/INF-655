# React Application - Assignment 2

## Overview
This React project demonstrates JSX, functional and class components, state management, props, dynamic content rendering, and parent-child component interaction.

## Features

### Greeting Component
- Displays a personalized greeting message using the `username` prop.
- Shows the current date dynamically.
- Includes a "Change Greeting" button that toggles the greeting message back and forth between two states.

### UserInfo Component
- Displays user information including name, profession, and a lucky number.
- Includes a "Generate New Lucky Number" button to dynamically update the lucky number.
- Includes a "Show Alert" button that triggers an alert message.

### TaskComponent
- Displays a list of tasks with the ability to:
  - **Search Tasks**: Filter tasks dynamically based on the entered text.
  - **Sort by Name**: Sort tasks alphabetically with a button click.
  - **Delete Tasks**: Remove tasks from the list with a confirmation prompt.

### TaskForm Component
- Allows users to add new tasks with a name and description.
- Includes form validation to ensure both fields are filled before submission.
- Dynamically updates the task list upon successful submission.

## Getting Started

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) and npm installed.

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/KyleLavigne/INF-655/Assignment2.git
   cd assignment-2
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application:
   ```bash
   npm start
   ```

### Project Structure
```
assignment-2/
│── src/
│   ├── components/
│   │   ├── Greeting.js
│   │   ├── UserInfo.js
│   │   ├── TaskComponent.js
│   │   ├── TaskForm.js
│   ├── App.js
│   ├── index.js
│── package.json
│── README.md
```

## Future Improvements
- Add more user interaction features.
- Enhance styling for better user experience.