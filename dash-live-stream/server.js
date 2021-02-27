const express = require("express");
const app = express();

app.use(express.static("static"));
app.use(express.static("../files"));

app.listen(8002, function () {
  console.log("Listening on port 8002!");
});
