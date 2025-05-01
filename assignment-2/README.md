# React Application - Assignment 2

## Overview
This React project demonstrates JSX, functional components, state management, props, dynamic content rendering, and real-time updates using Firestore.

## Features

### TopBar Component
- Displays a top navigation bar with:
  - A logo on the left.
  - The application title in the center.
  - A profile icon on the right with a dropdown menu.
    - Dropdown options include:
      - **Edit User Info**: Opens a popup to edit the user's profession.
      - **Logout**: Logs the user out and redirects to the login page.

### Greeting Component
- Displays a personalized greeting message using the user's name from Firestore.
- Shows the current date dynamically.
- Includes a "Change Greeting" button to toggle between two greeting styles.

### UserInfo Component
- Displays user information including:
  - Name (fetched from Firestore).
  - Profession (fetched from Firestore and updates live).
  - A lucky number.
- Includes a "Generate New Lucky Number" button to dynamically update the lucky number.
- Includes a "Show Alert" button that triggers an alert message.

### TaskComponent
- Displays a list of tasks with the ability to:
  - **Search Tasks**: Filter tasks dynamically based on the entered text.
  - **Sort Tasks**: Sort tasks by newest, oldest, alphabetically, or reverse alphabetically.
  - **Delete Tasks**: Remove tasks from the list with a confirmation prompt.
  - **View Task Details**: Opens a modal to view task details.

### TaskForm Component
- Allows users to add new tasks with a name and description.
- Includes form validation to ensure both fields are filled before submission.
- Dynamically updates the task list upon successful submission.

### EditUserInfoPopup Component
- Opens a popup window to edit the user's profession.
- Updates the profession in Firestore in real-time.
- The name field is displayed but not editable.

### Authentication
- Includes login and signup functionality using Firebase Authentication.
- Creates a Firestore document for new users during signup to store additional user information (e.g., profession).

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
│   │   ├── Login.js
│   │   ├── Signup.js
│   │   ├── TopBar.js
│   │   ├── Greeting.js
│   │   ├── UserInfo.js
│   │   ├── TaskComponent.js
│   │   ├── TaskForm.js
│   │   ├── EditUserInfoPopup.js
│   ├── App.js
│   ├── index.js
│── package.json
│── README.md
```

## Future Improvements
- Add more user interaction features.
- Enhance styling for better user experience.
- Implement additional user settings and preferences.