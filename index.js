const express = require("express");
const home = require("./routes/home");
const app = express();
const port = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/home", home);
app.use("/", (req, res) => {
  res.send("This is nodeJs application on Vercel !");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
