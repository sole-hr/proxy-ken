const dotenv = require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');

app.use(cors());
app.use(express.static(__dirname + "/../client/dist"));

app.listen(port, () => {
  console.log("Ken's Proxy listening on port, ", port);
}); 