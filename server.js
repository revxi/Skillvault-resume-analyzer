const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Multer setup for file upload
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('resume'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }
  res.json({ message: 'Resume received successfully.', filename: req.file.originalname });
});

app.get('/', (req, res) => {
  res.send('SkillVault Backend is Running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});