const express = require('express');
const multer = require('multer');
const path = require('path');
const { fileTypeFromBuffer } = require('file-type');

const app = express();
const port = 3000;

// Use memory storage to access the file buffer
const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
}).single('myImage');

app.post('/upload', (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).send({ message: err.message });
    }

    if (!req.file) {
      return res.status(400).send({ message: 'Error: No File Selected!' });
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const fileInfo = await fileTypeFromBuffer(req.file.buffer);

    if (!fileInfo || !allowedTypes.includes(fileInfo.mime)) {
      return res.status(400).send({ message: 'Error: Invalid file type. Only JPG, PNG, and GIF are allowed.' });
    }

    // If the file type is valid, you can now save the file, for example:
    const fs = require('fs');
    const uploadsDir = './uploads';
    if (!fs.existsSync(uploadsDir)){
        fs.mkdirSync(uploadsDir);
    }
    const filename = `myImage-${Date.now()}${path.extname(req.file.originalname)}`;
    const filePath = path.join(uploadsDir, filename);

    fs.writeFile(filePath, req.file.buffer, (writeErr) => {
      if (writeErr) {
        return res.status(500).send({ message: 'Error saving the file.' });
      }

      res.send({
        message: 'File Uploaded!',
        file: `uploads/${filename}`
      });
    });
  });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
