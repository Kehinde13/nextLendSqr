# lendsqr dashboard

LendSqr dashboaard with nextJS

## Description

This project is a web application designed with four primary pages: Login, Dashboard, User Page, and User Details Page. It leverages a postgres Database containing 200 user records and utilizes prisma to retrieve user details on the User Details Page. The application is mobile-responsive, ensuring a seamless user experience across different devices.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Links](#links)

## Features

1. **Login Page**: A secure login interface for user authentication.
2. **Dashboard**: A central hub for accessing various functionalities of the application.
4. **User Details Page**: Shows detailed information of a selected user, stored and retrieved from local storage.
5. **Filter Users**: Filter users based on the value inputted.
6. **Mobile Responsive**: Ensures optimal viewing and interaction across various devices, including mobile phones and tablets.

## Technologies Used

- HTML5
- Shadcn
- TypeScript
- React.js 
- Postgres
- prisma
- Jest (for testing)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Kehinde13/nextLendSqr
    cd lendSqr
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```


## Usage

1. Navigate to the Login Page (`/login`) and enter your credentials to access the application.
2. Once logged in, you'll be redirected to the Dashboard (`/dashboard`).
3. From the Dashboard, navigate to the table and click on the option icon to view detailed information on the User Details Page (`/users/:id`).
4. Click the filter icon on the table header to toggle filter visibilty


### Example User Data
```json
{
    _id: "1",
    name: "John Doe",
    index: 0,
    guid: "guid-1",
    isActive: true,
    balance: "1000",
    picture: "picture-url",
    age: 30,
    username: "johndoe",
    gender: "male",
    organization: "Organization",
    email: "john@example.com",
    phone: "1234567890",
    marital: "single",
    residence: "Address",
    children: "none",
    status: "active",
    address: "Address",
    joined: "2020-01-01",
    guarantor: [
      {
        id: 1,
        name: "Guarantor 1",
        email: "guarantor1@example.com",
        phone: "0987654321",
        relationship: "friend",
      },
      {
        id: 2,
        name: "Guarantor 2",
        email: "guarantor2@example.com",
        phone: "1234509876",
        relationship: "colleague",
      },
    ],
  }
  ```

# Testing
This project includes tests written with Jest to ensure the functionality and reliability of the application.

## Running Tests
To run the tests, use the following command:

```bash
npm test
```
## Test Coverage
The tests cover various aspects of the application, including:

- Component rendering
- User interactions
- API calls and data handling

# Links
- [Repository](https://github.com/Kehinde13/lendSqr)
- [live site](https://lend-sqr-one.vercel.app/)




