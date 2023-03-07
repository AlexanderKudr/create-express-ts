import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
