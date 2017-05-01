const express = require("express"),
  bodyparser = require("body-parser");

let app = express();

app.use(bodyparser.json());

app.get("/healthcheck", (req, res) => {
  res.send({"msg": "OK"});
});

app.listen(3000, () => {
  console.log("server is listening on port --> 3000");
});
