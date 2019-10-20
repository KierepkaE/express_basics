const express = require('express');
const path = require('path');
const app = express();
app.listen(3000, () => {
  console.log('listening . . . ');
});

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html>
<body>
<img src='/logo'>
</body>
</html>

`
  )
});

app.get('/logo', (req, res) => {
  const fileName = path.join(__dirname + 'static/cat.jpg')
  res.sendFile(fileName);
  res.end();
})

// app.get('/hello/new-user', (req, res) => {
//   console.log('add new user');
// });


// app.get('/hello/:name', (req, res) => {
//   console.log('hello ' + req.params.name);
// });


