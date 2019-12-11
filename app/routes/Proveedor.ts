import { Router } from 'express';
import { getProveedor} from './../controllers/Proveedor';

export let proveedor_router = Router();
proveedor_router.get('/proveedor', getProveedor);