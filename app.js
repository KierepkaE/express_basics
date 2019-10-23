const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();
app.listen(3000, () => {
  console.log('listening . . . ');
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));
app.use(cookieParser());


app.get('/', (req, res) => {
  const { visitor_name } = req.params;
  if (visitor_name) {
    res.send(`Hello ${visitor_name}`)
  } else {
    res.send('Do we know each other?');
  }
})
app.get('/hi/:name', (req, res) => {
  const { name } = req.params;
  res.cookie('visitor_name', name);
  res.send('Saved!');
})

