var express = require("express");
const app = express();

app.get("/teste", (req, res) => res.send("Hello World"));

const PORT = process.env.PORT || 5000;
app.listen(PORT);