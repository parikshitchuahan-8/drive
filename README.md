# Drive Clone – Cloud File Storage Web Application

This project is a cloud-based file storage web application inspired by Google Drive. It allows users to upload, view, download, and manage files through a web interface.

The application is built using Node.js and Express.js for backend development, MongoDB for storing file metadata, and Cloudinary for cloud-based file storage. The frontend uses EJS templates and Tailwind CSS to provide a clean and responsive UI.

## Features

- User registration and login
- Upload files to cloud storage
- View uploaded files
- Download files
- Delete files
- Secure backend using Express.js
- Cloudinary integration for file storage
- MongoDB database for storing file information

 ## Tech Stack

Backend
- Node.js
- Express.js

Database
- MongoDB
- Mongoose

Cloud Storage
- Cloudinary

File Handling
- Multer

Frontend
- EJS
- Tailwind CSS
- Flowbite

## Installation

1. Clone the repository

git clone https://github.com/parikshitchauhan-8/drive.git

2. Go to the project directory

cd drive

3. Install dependencies

npm install

4. Create a .env file and add:

PORT=3000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

5. Start the server
npm start

## Project Structure

drive
│
├── config
├── middleware
├── models
├── routes
├── views
│
├── app.js
├── package.json
└── .env

## Author
Parikshit Chauhan  
GitHub: https://github.com/parikshitchauhan-8
