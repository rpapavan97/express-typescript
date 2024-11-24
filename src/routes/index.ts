import express, { Request, Response } from "express";

const sampleRouter = express.Router();

// Version 1 API endpoint
sampleRouter.get("/query", (req: Request, res: Response) => {
  const { name } = req.query;

  if (!name) {
    res.status(400).json({
      message: `Please provide 'name' query parameters.`
    });
    return;
  }

  res.json({
    message: 'Query parameter received successfully!',
    data: { name },
  });
});

sampleRouter.post("/mutation", (req: Request, res: Response) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({
      message: `Please provide 'name'`
    });
    return;
  }

  res.json({
    message: 'Request payload received successfully!',
    data: { name },
  });
});

export default sampleRouter;