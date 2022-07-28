const express = require("express");
const app = express();
app.use(express.static("public"));
app.listen(3000);

app.get("*", (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});
