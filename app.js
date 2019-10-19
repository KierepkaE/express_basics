const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('listening . . . ');
});

app.get('/google', (req, res) => {
  res.redirect('https://google.com', 301);


})


// app.get('/hello/new-user', (req, res) => {
//   console.log('add new user');
// });


// app.get('/hello/:name', (req, res) => {
//   console.log('hello ' + req.params.name);
// });


