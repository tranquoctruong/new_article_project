const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compromise = require('compromise');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

// API endpoint để đánh giá bài báo
app.post('/api/evaluate', (req, res) => {
    const articleText = req.body.text;
    const doc = compromise(articleText);
    const sentiment = doc.sentiment().score;
    
    res.json({ evaluation: sentiment > 0 ? 'Tích cực' : 'Tiêu cực' });
});

// Bắt đầu server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
