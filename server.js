'use strict';

const express = require('express');
const app = express();

let theCount = 0;

app.use(express.static('public'));

app.get("/the-count", (req, res) => {
  console.log('incrementing the count');
  theCount += 1;
  console.log(`the count is ${theCount}`);
  res.json({count: theCount});
});

// listen for requests and log when you've started doing it
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
