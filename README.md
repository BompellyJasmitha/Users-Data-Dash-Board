# Getting Started with the CRUD Application
This project is a simple CRUD (Create, Read, Update, Delete) application built with React. It allows users to manage a list of users through various operations.

# Project Structure
In the project directory, you'll find the following main files:

src/ - Contains the React components and application logic.
public/ - Contains the HTML file and other public assets.
db.json - A mock API for user data.
package.json - Contains project dependencies and scripts.

# Available Scripts
In the project directory, you can run:

npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

# npm test
Launches the test runner in interactive watch mode.
See the section about running tests for more information.

# npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.
Your app is ready to be deployed!
See the section about deployment for more information.

# npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All commands except eject will still work, but they will point to the copied scripts, so you can tweak them. At this point, you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and medium deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you're ready for it.

# Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

# Code Splitting
This section has moved here: Code Splitting

# Analyzing the Bundle Size
This section has moved here: Analyzing the Bundle Size

# Making a Progressive Web App
This section has moved here: Making a Progressive Web App

# Advanced Configuration
This section has moved here: Advanced Configuration

# Deployment
This section has moved here: Deployment

# npm run build fails to minify
This section has moved here: Troubleshooting - Build Fails to Minify

# API Mocking
This application uses a mock API defined in db.json. The structure of the data includes user information such as id, name, username, and email.

# Sample Data
Here is a sample structure for the db.json file:

# json code
{
  "users": [
    {
      "id": "1",
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "leanne@example.com"
    },
    {
      "id": "2",
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "ervin@example.com"
    }
  ]
}
You can add more user entries following the same structure. This mock API will allow your React app to perform CRUD operations seamlessly.