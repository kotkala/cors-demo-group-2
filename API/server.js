// Server (server.js)
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

let clickCount = 0;

app.use(cors({
  origin: ['http://localhost:3001', 'http://localhost:3002']
}));

app.get('/click', (req, res) => {
  clickCount++;
  res.json({ count: clickCount });
});

app.get('/count', (req, res) => {
  res.json({ count: clickCount });
});

app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});