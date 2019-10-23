const express = require('express');
const path = require('path');
const app = express();
app.listen(3000, () => {
  console.log('listening . . . ');
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send("you've been logged out");
})

app.get('/hi/:name', (req, res) => {
  const { name } = req.params;
  const date = new Date();
  date.setDate(date.getDate() + 7);
  res.cookie('visitor_name', name, {
    expires: date
  });
  res.send('your name is saved!')
})

app.get('/logout', (req, res) => {
  res.clearCookie('visitor_name');
  res.redirect('/');
});




