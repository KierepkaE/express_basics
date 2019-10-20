const express = require('express');
const path = require('path');
const app = express();
app.listen(3000, () => {
  console.log('listening . . . ');
});



app.get('/', (req, res) => {

})
app.get('/hi/:name', (req, res) => {
  const { name } = req.params;
  const date = new Date();
  date.setDate(getDate() + 7);
  res.cookie('visitor_name', name, {
    experies: date
  });
  res.send('your name is saved!')
})




