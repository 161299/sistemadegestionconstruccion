import { Router } from 'express';
import { getFamilias } from './../controllers/Familia'

export let familia_router = Router();
familia_router.get('/familia',getFamilias)