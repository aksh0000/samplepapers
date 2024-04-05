const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path'); // Import path module to handle file paths

app.use(cors());

app.get('/file', (req, res) => {
    // Resolve the absolute path to the PDF file
    const filePath = path.resolve(__dirname, 'folder', 'pdf.pdf');
    
    // Send the file to the client
    res.sendFile(filePath);
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
