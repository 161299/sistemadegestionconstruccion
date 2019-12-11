import { Router } from 'express';
import { getUMedidas } from './../controllers/uMedida';

export let uMedida_router = Router();
uMedida_router.get('/umedida', getUMedidas)