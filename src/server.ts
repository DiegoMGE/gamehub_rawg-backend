import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());

const API_KEY = process.env.GAME_API_KEY;
const API_URL = process.env.GAME_API_URL;
const URL = `${API_URL}/games?key=${API_KEY}`;

app.get('/games', async (req, res) => {
  console.log('GET /games route hit');
  try {
    console.log("Making request to:", URL);

    const response = await axios.get(URL);

    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));