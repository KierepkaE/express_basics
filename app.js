const express = require('express');
const path = require('path');
const app = express();
app.listen(3000, () => {
  console.log('listening . . . ');
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.send("you've been logged out");
})
