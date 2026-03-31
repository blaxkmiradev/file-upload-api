🚀 Simple Express File Upload API

A minimalist, secure Express.js API designed for handling image uploads. This project uses Multer middleware to manage multipart/form-data, ensuring files are validated by type and size before being stored.

📂 Directory Structure

file-upload-api/
├── uploads/          # Validated images are saved here
├── node_modules/     # Installed dependencies (auto-generated)
├── index.js          # Main Express server logic
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation (this file)


🛠️ Installation & Setup

Follow these steps to get your server running locally:

1. Prerequisites

Ensure you have Node.js (v14 or higher) installed on your computer.

2. Navigate to Project

Open your terminal or command prompt and enter the project folder:

cd file-upload-api


3. Install Dependencies

Install the required packages (Express and Multer):

npm install


4. Start the Server

Launch the API:

npm start


The server will be active at: http://localhost:3000

🚀 API Reference

Upload an Image

Endpoint: POST /upload

Content-Type: multipart/form-data

Field

Type

Description

image

file

The image file to upload (Required)

Example using cURL:

curl -X POST -F "image=@/path/to/your/photo.jpg" http://localhost:3000/upload


Success Response:

{
  "message": "File uploaded successfully!",
  "file": {
    "fieldname": "image",
    "originalname": "photo.jpg",
    "filename": "1715832000000.jpg",
    "path": "uploads/1715832000000.jpg",
    "size": 102400
  }
}


🔒 Security & Validation

To prevent "glitches" and server abuse, the following rules are enforced:

File Type: Only .jpg, .jpeg, .png, and .gif are accepted.

Size Limit: Individual files are restricted to a maximum of 5MB.

Unique Naming: Files are automatically renamed using Date.now() to prevent overwriting existing files with the same name.

Directory Safety: The script automatically creates the uploads/ folder if it is missing.

📝 License

This project is open-source and free to use.
