const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());

app.get("/result/:num", (req, res) => {
  const result = req.params.num + 2;

  res.status(200).send(JSON.stringify({ primeNum: result }));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
