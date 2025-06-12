const express = require('express');
const cors = require('cors');
const aiAgent = require('./services/aiAgent');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/generate-action', async (req, res) => {
    const { message } = req.body;
    const action = await aiAgent(message);
    res.json({ action });
});

app.listen(5000, () => console.log('Backend running on port 5000'));
