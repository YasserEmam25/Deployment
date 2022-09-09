const exprss = require("express");
const path = require("path");

const app = exprss();

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

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
