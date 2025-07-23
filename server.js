const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.static(__dirname));

app.post('/transcribe', upload.single('audio'), async (req, res) => {
  try {
    const audioPath = path.join(__dirname, req.file.path);
    
    // TODO: Call Gemini Speech-to-Text API here with `audioPath`
    // For now, return dummy transcript
    res.json({ transcript: 'This is a dummy transcript. Gemini integration pending.' });

    // Cleanup
    fs.unlinkSync(audioPath);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to process audio.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
