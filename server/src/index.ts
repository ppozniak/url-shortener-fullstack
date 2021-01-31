import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();
const PORT = 5000;

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: "Hello" });
});

// Start server
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
