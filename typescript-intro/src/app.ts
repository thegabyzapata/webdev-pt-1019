import express, { Request, Response } from "express";
import _ from "lodash";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({ hola: _.sample(["Hola", "que", "tal"]) });
});

app.listen(3000, () => {
  console.log("READY localhost:3000");
});
