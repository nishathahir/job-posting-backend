# Job Posting Backend

This repository contains the backend API for a job posting application, designed to facilitate job postings and interview scheduling through email notifications.

## Table of Contents

- [Technologies Used]
- [Features]
- [API Endpoints]
- [Setup Instructions]
- [Usage]
- [Contributing]
- [License]

## Technologies Used

- **Node.js**: JavaScript runtime for building scalable applications.
- **Express.js**: Web application framework for Node.js.
- **Mongoose**: ODM for MongoDB and Node.js.
- **Nodemailer**: Module for sending emails.
- **MongoDB Atlas**: Cloud database service for hosting MongoDB.

## Features

- Create job postings with details such as title, description, experience level, and end date.
- Send email notifications to candidates about job openings.
- Basic validation of input data.
- Connection to MongoDB for persistent data storage.

## API Endpoints

- **POST `/api/jobs`**: Create a new job posting.
  - Request Body:
    ```json
    {
      "jobTitle": "Software Engineer",
      "jobDescription": "Develop software solutions.",
      "experienceLevel": "Mid Level",
      "candidates": ["candidate1@example.com", "candidate2@example.com"],
      "endDate": "2024-12-31"
    }
    ```

## Setup Instructions

1. Clone this repository:
   git clone https://github.com/nishathahir/job-posting-backend.git
   cd job-posting-backend
2. Install dependencies
   npm install
3. Create a .env file in the root directory and add your environment variables:
   PORT=5001
   MONGO_URI=your_mongodb_uri
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_app_password

4. Start the server
   npx ts-node server.ts
