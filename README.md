# Drive Clone

Drive Clone is a server-rendered file storage application inspired by Google Drive. Users can create accounts, upload files to Cloudinary, browse their stored assets, and manage downloads from a simple web dashboard.

## Highlights

- User registration and login flow
- JWT-based authentication with cookies
- File uploads handled with Multer
- Cloudinary-backed file storage
- MongoDB for user and file metadata
- EJS-based interface styled with Tailwind CSS

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- Cloudinary
- Multer
- EJS
- Tailwind CSS

## Project Structure

```text
drive/
|-- config/
|-- middleware/
|-- models/
|-- routes/
|-- views/
|-- uploads/
|-- app.js
`-- package.json
```

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Copy the example environment file and add your own values:

```bash
cp .env.example .env
```

3. Start the development server:

```bash
npm start
```

4. Open `http://localhost:3000`

## Environment Variables

Use the values in `.env.example` as a template:

- `PORT`
- `MONGO_URI`
- `JWT_SECRET`
- `CLOUD_NAME`
- `CLOUD_API_KEY`
- `CLOUD_API_SECRET`

## Notes

- This repository should not include runtime secrets, uploaded files, or installed dependencies in source control.
- Cloudinary stores uploaded assets while MongoDB stores the related metadata.

## Author

Parikshit Chauhan
