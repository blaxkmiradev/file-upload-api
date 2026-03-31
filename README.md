Simple Express File Upload API

A lightweight, secure Express.js API designed for handling image uploads. This project uses the Multer middleware to manage multipart/form-data, ensuring files are validated by type and size before being stored.

How to Install and Run

1. Prerequisites

Make sure you have Node.js installed on your computer.

2. Open terminal and go to project folder

cd file-upload-api


3. Install dependencies

npm install


4. Start the server

npm start


The server will be running at: http://localhost:3000

API Usage

Upload an Image

To upload a file, send a POST request to the /upload endpoint.

Endpoint: POST /upload
Content-Type: multipart/form-data

Parameter

Type

Description

image

File

The image file to upload (jpeg, jpg, png, gif)

Example using cURL:

curl -X POST -F "image=@/path/to/your/photo.jpg" http://localhost:3000/upload


Example Success Response:

{
  "message": "File uploaded successfully!",
  "file": {
    "fieldname": "image",
    "originalname": "photo.jpg",
    "filename": "1698765432123.jpg",
    "path": "uploads/1698765432123.jpg",
    "size": 102400
  }
}


Security Features

File Type Filtering: Only allows .jpg, .jpeg, .png, and .gif.

File Size Limit: Maximum file size is restricted to 5MB.

Unique Filenames: Files are renamed with a timestamp to prevent overwriting existing files.

Auto-Directory Creation: Automatically creates the uploads/ folder if it doesn't exist on startup.
