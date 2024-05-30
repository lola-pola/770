import express, { Request, Response } from 'express';

const app = express();
const port = 3034;

// Middleware to parse JSON
app.use(express.json());

// GET endpoint
app.get('/hello', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

// POST endpoint
app.post('/echo', (req: Request, res: Response) => {
  const data = req.body;
  res.json({ message: 'Received data', data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

