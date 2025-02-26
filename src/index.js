import express from 'express';
import { Port } from './config/server-config.js';
import {router as ApiRouter} from './routes/routes.js';
import { logger } from './config/logger-config.js';

const app=express();

app.use('/api',ApiRouter);
app.get("/",(req,res)=>{
  res.json({
    "message":"hiii"
  })
})

app.listen(Port,()=>{
  console.log(`http://localhost:${Port}`);
  
  
})