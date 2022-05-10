const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const num = 2 + 2;

  res.send(`Your median prime is: ${num}`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
