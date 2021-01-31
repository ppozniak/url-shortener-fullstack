import express, { Application, Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";

const app: Application = express();
const PORT = 5000;

app.use(helmet());
app.use(cors());

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: "Hello" });
});

// Start server
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
