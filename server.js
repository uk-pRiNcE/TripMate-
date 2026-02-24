const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "AI Trip Engine Backend Running",
        status: "success"
    });
});

// Temporary test endpoint
app.post('/api/recommend', (req, res) => {
    const { destination, budget, distance, experience } = req.body;

    res.json({
        receivedData: {
            destination,
            budget,
            distance,
            experience
        },
        message: "Backend connected successfully"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});