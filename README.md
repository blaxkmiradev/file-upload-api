███████╗███████╗ ██████╗██╗   ██╗██████╗ ███████╗
██╔════╝██╔════╝██╔════╝██║   ██║██╔══██╗██╔════╝
███████╗█████╗  ██║     ██║   ██║██████╔╝█████╗
╚════██║██╔══╝  ██║     ██║   ██║██╔══██╗██╔══╝
███████║███████╗╚██████╗╚██████╔╝██║  ██║███████╗
╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
> SECURE UPLOADER // SYSTEM KERNEL
> STATUS: ONLINE | SECURE | AWAITING INPUT
A fortified Express.js API for handling file uploads. This system is designed to be a digital fortress, validating files not by their name, but by their very essence—their magic number. Only true image files (JPEG, PNG, GIF) are granted passage. All other data is considered a threat and is neutralized.

> SYSTEM SPECIFICATIONS
DEEP-LAYER VALIDATION: File extensions are irrelevant. We read the binary signature (magic number) to verify authenticity.

IMAGE-ONLY PROTOCOL: Only JPEG, PNG, and GIF files are permitted. All other formats are rejected.

RESOURCE PROTECTION: File size is limited to 1MB to prevent server overload.

CORE TECHNOLOGIES: Built on a foundation of Node.js, Express.js, Multer, and file-type.

> FILE DIRECTORY
/
├── uploads/              # VAULT: Authenticated files only
├── node_modules/         # CORE LIBRARIES: Do not touch
├── index.js              # MAIN KERNEL
├── package.json          # SYSTEM BLUEPRINT
└── README.md             # SYSTEM MANUAL (CURRENT FILE)
> BOOT SEQUENCE
// STEP 1: PREREQUISITES
Node.js must be installed.

npm must be installed.

// STEP 2: INSTALLATION
Establish connection:

bash
git clone <your-repo-url>
cd file-upload-api
Install dependencies:

bash
npm install
// STEP 3: EXECUTE
Start the server. It will initialize on http://localhost:3000.

bash
npm start
> API PROTOCOLS
// INITIATE UPLOAD
CHANNEL: /upload

METHOD: POST

PAYLOAD TYPE: form-data

FIELD NAME: myImage

> cURL TRANSMISSION EXAMPLE
bash
curl -X POST -F "myImage=@/path/to/your/image.jpg" http://localhost:3000/upload
> SUCCESS SIGNAL (200 OK)
JSON
{
  "message": "File Authenticated. Upload Complete.",
  "file": "uploads/myImage-1678886400000.jpg"
}
> ERROR SIGNAL (400 BAD REQUEST)
For invalid file types:

JSON
{
  "message": "Error: Unidentified file type. Access denied."
}
> THE MAGIC NUMBER ADVANTAGE
A file extension is a suggestion, not a fact. A malicious actor can name a virus cat.jpg. Our system is not so easily fooled. We read the first bytes of the file—the "magic number"—to determine its true nature.

File Type	Magic Number (Hex)
JPEG	FF D8 FF
PNG	89 50 4E 47
GIF	47 49 46 38
 
By verifying these "digital fingerprints," we ensure that your system remains secure.

> END OF TRANSMISSION
