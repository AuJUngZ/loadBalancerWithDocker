import express from "express";
import os from "os";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({
    message: `${os.hostname()} is running on port ${port}!`,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
