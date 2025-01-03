const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Simulate a ChatBot response
app.post('/chat', (req, res) => {
  const { message } = req.body;

  // Simulate a simple AI response (you can replace this with real AI logic or APIs)
  const botResponse = `ChatGPT: You said "${message}", how can I help further?`;

  res.json({ reply: botResponse });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
