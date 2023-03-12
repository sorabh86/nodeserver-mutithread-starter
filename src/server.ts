import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {fork} from "child_process"

dotenv.config();

const app: Express = express()
const port = process.env.PORT || 3001

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Express + TypeScript Server</h1>');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});