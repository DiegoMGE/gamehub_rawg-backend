import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());

const API_KEY = process.env.GAME_API_KEY;
const API_URL = process.env.GAME_API_URL;
const URL_GAMES = `${API_URL}/games?key=${API_KEY}`;
const URL_GENRES = `${API_URL}/genres?key=${API_KEY}`;

app.get('/games', async (req, res) => {
  console.log('GET /games route hit');
  try {
    const response = await axios.get(URL_GAMES);

    console.log("URL del servidor:", URL_GAMES);

    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/genres', async (req, res) => {
  console.log('GET /games route hit');
  try {
    const response = await axios.get(URL_GENRES);

    console.log("URL del servidor:", URL_GENRES);

    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));