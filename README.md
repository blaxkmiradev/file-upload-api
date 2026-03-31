Simple Express File Upload API

A lightweight and secure Express.js API for handling image uploads. This project uses the Multer middleware to handle multipart/form-data requests, validating file type and size before storing uploaded files.

🚀 Features
File Type Filtering: Accepts only .jpg, .jpeg, .png, and .gif.
File Size Limit: Maximum upload size is 5MB.
Unique Filenames: Files are renamed with a timestamp to prevent overwriting.
Auto Directory Creation: Automatically creates the uploads/ folder if it doesn’t exist.
🛠 Installation & Setup
1. Prerequisites

Make sure Node.js is installed on your system.

2. Clone or Navigate to Project Folder
cd file-upload-api
3. Install Dependencies
npm install
4. Start the Server
npm start

The server will run at: http://localhost:3000

📤 API Usage
Upload an Image
Endpoint: POST /upload
Content-Type: multipart/form-data
Parameters
Parameter	Type	Description
image	File	The image file to upload (.jpeg, .jpg, .png, .gif)
Example cURL Request
curl -X POST -F "image=@/path/to/your/photo.jpg" http://localhost:3000/upload
Success Response
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
🔒 Security & Validation
Allowed File Types: .jpg, .jpeg, .png, .gif
Max File Size: 5MB
Filename Safety: Timestamp-based unique names
Automatic Directory Creation: Ensures uploads/ exists before saving files
