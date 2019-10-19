const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('listening . . . ');
});

app.get('/', (req, res) => {
  res.write('hello world');
  res.end();
})
// app.get('/hello/new-user', (req, res) => {
//   console.log('add new user');
// });


// app.get('/hello/:name', (req, res) => {
//   console.log('hello ' + req.params.name);
// });


