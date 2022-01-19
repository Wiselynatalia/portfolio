const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static("src"));

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/src/contact.js");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
