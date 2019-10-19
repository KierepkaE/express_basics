const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('listening at 3000');
});

app.get('/', (req, res) => {
  console.log(req.protocol);
  console.log(req.secure);
})
