✨ Secure Uploader API ✨
A simple yet robust Express.js API designed for secure file uploads. This API goes beyond basic checks by validating files based on their magic numbers, ensuring that only genuine image files (JPEG, PNG, GIF) are accepted, effectively blocking spoofed file extensions.

🚀 Key Features
Secure by Default: Validates files by their actual binary content (magic numbers), not just by their extension or MIME type.

Image-Only Filter: Configured to only allow JPEG, PNG, and GIF images.

File Size Limitation: Protects your server by limiting the size of uploaded files (default is 1MB).

Built with Express & Multer: A lightweight and powerful stack for handling HTTP requests and file uploads.

Easy to Use & Deploy: Get up and running with just a few commands.

🛠️ Tech Stack
Node.js: JavaScript runtime environment.

Express.js: Fast, unopinionated, minimalist web framework for Node.js.

Multer: Node.js middleware for handling multipart/form-data, primarily used for uploading files.

file-type: A library to detect the file type of a Buffer/Uint8Array by checking for magic numbers.

📁 Project Structure
file-upload-api/
├── uploads/              # Directory for storing valid uploaded images
├── node_modules/         # Project dependencies
├── index.js              # Main application logic
├── package.json          # Project metadata and dependencies
└── README.md             # You are here!
⚙️ Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

Prerequisites
Make sure you have Node.js and npm installed on your system.

Installation
Clone the repository (or create the files as described previously):


bash
npm install
Running the Application
To start the server, run the following command. The server will start on http://localhost:3000.

bash
npm start
You should see the following output in your console:
Server started on port 3000

⚡ API Usage
Here’s how to interact with the API endpoint.

Upload an Image
Endpoint: /upload

Method: POST

Body: form-data

Field Name: myImage

Example using cURL
bash
curl -X POST -F "myImage=@/path/to/your/image.jpg" http://localhost:3000/upload
✅ Success Response (200 OK)
If the file is a valid image and successfully uploaded:

JSON
{
  "message": "File Uploaded!",
  "file": "uploads/myImage-1678886400000.jpg"
}
❌ Error Responses (400 Bad Request)
If no file is selected:

JSON
{
  "message": "Error: No File Selected!"
}
If the file is not a valid image type (e.g., you try to upload a .txt file renamed to .jpg):

JSON
{
  "message": "Error: Invalid file type. Only JPG, PNG, and GIF are allowed."
}
🛡️ The "Magic Number" Security Advantage
Why not just trust the file extension? Because it's easy to lie!

A user could rename a malicious script like virus.exe to harmless.jpg. A basic filter would be fooled, but our API is smarter. It reads the first few bytes of the file—its "magic number"—to identify its true identity.

File Type	Magic Number (Hex)
JPEG	FF D8 FF
PNG	89 50 4E 47
GIF	47 49 46 38
