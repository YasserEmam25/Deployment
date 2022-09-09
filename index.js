const exprss = require("express");
const path = require("path");
require("dotenv").config();

const app = exprss();
const port = process.env.PORT || 3004;

let options = {
  root: path.join(__dirname, "/"),
  dotfiles: "deny",
  headers: {
    "x-timestamp": Date.now(),
    "x-sent": true,
  },
};

app.get("/", (req, res, next) => {
  res.sendFile("adel_shkl.jpg", options);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
