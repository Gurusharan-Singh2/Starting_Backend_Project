import express from 'express';
import {router as v1Router} from './V1/v1.js';
const router=express.Router();




router.use('/v1',v1Router);

export { router }