# Login App

### [Explore Login App ](https://youtu.be/vUjZyujM6Sw)
<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="GitHub License">
  <img src="https://img.shields.io/github/stars/Harischand2/Joy_Ride_Junction" alt="GitHub Repo stars">
</p>




## Description
The Login App is a web application designed to manage user accounts securely using JWT (JSON Web Tokens) authentication. It provides functionality for user registration, login, profile management, and account deletion. The app ensures user data privacy and security through encrypted JWT tokens and server-side validation.
## Features

1. **User Registration:**
   - Users can register by providing their first name, last name, email, and password.
   - Input validation ensures that all required fields are filled, and password strength is enforced.
   - Upon successful registration, users are redirected to the login page.

2. **User Login:**
   - Registered users can log in using their email and password.
   - JWT tokens are generated upon successful login and stored securely in cookies.
   - Authenticated users gain access to protected routes and personalized content.

3. **Profile Management:**
   - Authenticated users can view and update their profile information, including first name and last name.
   - The app fetches user details from the server and pre-fills the profile form.
   - Profile updates are securely sent to the server and reflected in real-time.

4. **Account Deletion:**
   - Users have the option to permanently delete their account from the application.
   - Account deletion triggers the removal of user data from the database and revokes access tokens.

## Implementation
- **Backend:** The backend of the application is built using Node.js and Express.js.
  - MongoDB database stores user information securely.
  - Routes are defined for user registration, login, profile management, and account deletion.
  - JWT tokens are generated upon authentication and used to authorize protected routes.
  
- **Frontend:** The frontend is developed using React.js.
  - User interface components are built using React components and Bootstrap for styling.
  - UserContextProvider manages user authentication state throughout the application.
  - Forms are implemented for user registration, login, and profile management.

## Security
- **JWT Authentication:** JSON Web Tokens are used for secure user authentication and authorization.
- **Password Encryption:** User passwords are hashed using bcrypt before storing them in the database.
- **HTTPS:** The application enforces secure communication over HTTPS to protect user data during transmission.

## Usage
- Users can navigate through the app using a user-friendly interface.
- Account-related actions such as registration, login, and profile updates are intuitive and responsive.
- Authentication and authorization mechanisms ensure that only authenticated users can access protected routes and perform CRUD operations on their accounts.

## Future Enhancements
- Implementing email verification for user registration to enhance security.
- Adding additional profile information fields such as profile picture, bio, etc.
- Enhancing the user interface with more interactive elements and animations.
- Implementing role-based access control (RBAC) for admin users to manage user accounts.

## Tech Stack

[![My Skills](https://skillicons.dev/icons?i=html,css,react,js,bootstrap,express,mongodb)](https://skillicons.dev)


## Getting Started Frontend

### 1. Clone the repository
```shell
[git clone https://github.com/Harischand2/Joy_Ride_Junction.git](https://github.com/Harischand2/Login-App.git)
cd login_app
```
### 2. Install npm dependencies
```shell
npm install
```
### 3. Start your App
```shell
npm run dev
```
### 4. Open the app in your browser
* Visit http://localhost:5173 in your browser.

## Getting Started Backend
### 5. Copy the environment variables to .env and change the values
```shell
cp .env.example .env
Change your MongoDB URI with your password
```
### 6. 
```shell
npm start
```
## Author
### Adrian Harischand

[![My Skills](https://skillicons.dev/icons?i=github)](https://github.com/Harischand2)
[![My Skills](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/adrian-harischand-94b803236/)

## Inspired by
- Brett Westwood - Software Engineer --> https://www.youtube.com/watch?v=XPC81RWOItI

## License
* Copyright @ 2024 <b>Adrian Harischand</b> <br>
 <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="GitHub License">
