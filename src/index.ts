import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import sampleRouter from "./routes/index";
import { name, version } from "../package.json";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.json({ app_name: name, version });
});

app.get('/health', (_req: Request, res: Response) => {
  res.json({ isHealthy: true });
});

app.use('/v1', sampleRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
