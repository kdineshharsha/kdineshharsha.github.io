const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Handle POST request to save content
app.post('/save', (req, res) => {
  const { content } = req.body;

  fs.writeFile('saved_content.html', content, err => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving content');
    } else {
      res.status(200).send('Content saved successfully');
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
