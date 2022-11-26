const express = require('express');
const home = require('./routes/home');
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/home', home);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})