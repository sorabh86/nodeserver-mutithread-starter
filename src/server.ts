import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {fork} from "child_process"
import { ChildRequest } from './utils/types';

dotenv.config();

const app: Express = express()
const port = process.env.PORT || 3001

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Node Server</h1>');
})

app.get('/prime', (req:Request, res:Response) => {
    const childReq:ChildRequest = {value:parseInt(req.query.number as string)}
    const childProcess = fork('./dist/childserver.js')
    childProcess.send(childReq)
    childProcess.on('message', msg=>res.send(msg))
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});