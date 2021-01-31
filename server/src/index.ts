import express, { Application, Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";
import { validateUrl, generateShortenedUrl } from "./utils";

const app: Application = express();
const PORT = 5000;

const mockUrls: Record<string, string> = {
  "https://google.com": "shrt.io/eeeeee1",
  "https://google2.com": "shrt.io/eeeeee2",
};

app.use(helmet());
app.use(cors());

app.get("/urls", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({
    data: mockUrls,
  });
});

app.post("/urls", (req: Request, res: Response, next: NextFunction) => {
  const userUrl = req.body.url;
  console.log("Getting user URL", userUrl);

  if (validateUrl(userUrl)) {
    console.log("Valid url");

    const alreadySavedUrl = mockUrls[userUrl];
    if (alreadySavedUrl) return res.status(200).send({ data: alreadySavedUrl });

    const shortenedUrl = generateShortenedUrl(userUrl);
    mockUrls[userUrl] = shortenedUrl;
    return res.status(200).send({ data: shortenedUrl });
  } else {
    res.status(400).send({ error: "Provided URL is invalid or empty." });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
