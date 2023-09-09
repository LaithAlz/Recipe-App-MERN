# Recipe Sharing Platform

A web-based recipe-sharing platform built using the MERN stack, allowing users to discover, create, and share recipes.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [API Endpoints](#API-Endpoints)

## Overview

The Recipe Sharing Platform is a web application designed to foster culinary creativity and make it easy for users to find and share their favorite recipes.

## Key Features

- **User-Friendly Recipe Management**: Easily create, edit, and manage your recipes with a user-friendly interface.

- **Discover Recipes**: Explore a diverse collection of recipes from other users or get random recipe recommendations.

- **Secure User Authentication**: Protect your data with a secure user authentication system using JWT.

## Technologies

- MongoDB
- Express.js
- React
- Node.js
- JSON Web Tokens (JWT)

## Getting Started

### Prerequisites

Before getting started, ensure that you have the following prerequisites:

1. **Node.js**: Make sure you have Node.js installed on your local machine. You can download it [here](https://nodejs.org/).

2. **MongoDB**: Ensure you have a running MongoDB server or access to a cloud-hosted MongoDB instance.



### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/[your-username]/recipe-sharing-platform.git

2. Navigate to project directory:
    ```sh
    cd recipe-sharing-platform

3. Install server dependencies:
    ```sh
    cd server
    npm install

4. Install client dependencies:
    ```sh
    cd ../client
    npm install


## Configuration

Before you can run the Recipe Sharing Platform, you'll need to set up some configurations and environment variables.

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your local machine. You can download it [here](https://nodejs.org/).

- **MongoDB**: Ensure you have a running MongoDB server or access to a cloud-hosted MongoDB instance.

### Environment Variables

Create a `.env` file in the root directory of the project and configure the following environment variables:

- `MONGODB_URI`: This variable should contain your MongoDB connection string. Replace `your-mongodb-connection-uri` with your MongoDB URI. Example:

  ```env
  MONGODB_URI=mongodb://localhost/recipe-sharing


- `SECRET_KEY: This variable is used for JWT token generation and should be kept secret. Replace your-secret-key with a strong, secret key. Example
  ```env
  SECRET_KEY=mysecretkey123


## API Endpoints

The Recipe Sharing Platform API provides the following endpoints:

### 1. Get All Recipes

- **Endpoint**: `/api/recipes`
- **Method**: `GET`
- **Description**: Fetches a list of all recipes.
- **Authentication**: Not required.
- **Response**: JSON array of recipe objects.

### 2. Get Recipe Details

- **Endpoint**: `/api/recipes/:id`
- **Method**: `GET`
- **Description**: Retrieves detailed information about a specific recipe by its ID.
- **Authentication**: Not required.
- **Response**: JSON object containing recipe details.

### 3. Add Recipe

- **Endpoint**: `/api/recipes`
- **Method**: `POST`
- **Description**: Allows authenticated users to add a new recipe.
- **Authentication**: Required with a valid JWT token.
- **Request Body**: JSON object containing recipe details (title, description, ingredients, instructions).
- **Response**: JSON object representing the added recipe.

### 4. Update Recipe

- **Endpoint**: `/api/recipes/:id`
- **Method**: `PATCH`
- **Description**: Allows authenticated users to update an existing recipe by its ID.
- **Authentication**: Required with a valid JWT token.
- **Request Body**: JSON object containing updated recipe details (title, description, ingredients, instructions).
- **Response**: JSON object representing the updated recipe.

### 5. Delete Recipe

- **Endpoint**: `/api/recipes/:id`
- **Method**: `DELETE`
- **Description**: Allows authenticated users to delete a recipe by its ID.
- **Authentication**: Required with a valid JWT token.
- **Response**: JSON object confirming the deletion.

### 6. User Authentication

- **Endpoint**: `/api/users`
- **Method**: `POST`
- **Description**: Registers a new user account.
- **Authentication**: Not required.
- **Request Body**: JSON object containing user registration details (email, password, name).
- **Response**: JSON object containing the newly registered user's data and a JWT token.

- **Endpoint**: `/api/users/login`
- **Method**: `POST`
- **Description**: Allows registered users to log in and obtain a JWT token.
- **Authentication**: Not required.
- **Request Body**: JSON object containing user login details (email, password).
- **Response**: JSON object containing the user's data and a JWT token upon successful login.

### 7. User Profile

- **Endpoint**: `/api/users/profile`
- **Method**: `GET`
- **Description**: Retrieves the user's profile data.
- **Authentication**: Required with a valid JWT token.
- **Response**: JSON object containing the user's profile data.

- **Endpoint**: `/api/users/profile`
- **Method**: `PATCH`
- **Description**: Allows users to update their profile information.
- **Authentication**: Required with a valid JWT token.
- **Request Body**: JSON object containing updated user profile details (name, email).
- **Response**: JSON object containing the updated user's profile data.

### 8. User Logout

- **Endpoint**: `/api/users/logout`
- **Method**: `POST`
- **Description**: Logs out the user and invalidates their JWT token.
- **Authentication**: Required with a valid JWT token.
- **Response**: JSON object confirming the logout.

Please note that some endpoints require user authentication using a JWT token. Make sure to include the JWT token in the `Authorization` header when making authenticated requests.

For more details on each endpoint, refer to the API documentation or the corresponding routes and controllers in the server code.

