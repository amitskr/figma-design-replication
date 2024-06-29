# Figma Design Replication

This project is a Node.js application that replicates a Figma design for a UpTodd Placement Drive. It includes an HTML form that collects user information and stores it in a MongoDB database.

## What Works?
Since the task was to replicate the design only, it's not a full fleged website.
- The youtube videos work if you hit the play button. Try clicking the play button under -> 2 Months & started Crawling!
- The Book a free demo button works because -> Bonus Points: Implementation of NodeJs functionality XD

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Form Details](#form-details)
- [Routes](#routes)
- [MongoDB](#mongodb)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js and npm**: Install from [Node.js official website](https://nodejs.org/).
- **MongoDB**: Install from [MongoDB official website](https://www.mongodb.com/try/download/community) and ensure it is running.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/amitskr/figma-design-replication.git
    ```
    Navigate to the project directory:
    ```bash
    cd figma-design-replication
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

## Running the Application

1. **Start MongoDB:**
    Ensure your MongoDB server is running. You can start MongoDB using the following command:
    ```bash
    mongod
    ```

2. **Start the Node.js server:**
    ```bash
    node index.js
    ```
    You should see the following message:
    ```
    Listening on port 3000
    ```

3. **Access the application:**
    Open your web browser and navigate to `http://localhost:3000`.

## Project Structure

- `index.html` - The main HTML file containing the form.
- `index.js` - The Node.js server file.
- `client/` - The directory where static files are served from.
- `styles.css` - The CSS file for styling the HTML elements.
- `scripts.js` - The JavaScript file for handling the modal functionality.

## Form Details

The form collects the following user information:
- Name
- Email
- Country Code
- Mobile Number
- Baby Stage (Infant, Toddler, Preschooler)

## Routes

- `POST /sign_up` - Receives form data and inserts it into the MongoDB database.
- `GET /` - Serves the `index.html` file.

## MongoDB

The form data is stored in a MongoDB collection named `users`. Make sure MongoDB is properly installed and running on `localhost:27017`.
