const express = require("express");
const dbConnection = require("./config/dbConnection");
const app = express();
const path = require("path");
const route = require("./route");

app.use(express.json());
app.use(route);
const port = 3000;
dbConnection();
app.use("/upload", express.static(path.join(__dirname, "upload")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
