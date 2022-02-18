import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import mysql2 from 'mysql2';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const router = express.Router();
const PORT = 8081;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, '/views')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
});

app.listen(PORT, (req, res) => {
    console.log("Listening on port " + PORT);
});