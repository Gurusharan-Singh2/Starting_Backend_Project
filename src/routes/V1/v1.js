import express from 'express';
import { info } from '../../controllers/info.js';

const router=express.Router();

router.get('/info',info)

export { router};

