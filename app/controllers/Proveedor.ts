import { Request, Response} from 'express';
import { Proveedor } from './../config/sequelize';

export const getProveedor = ( req: Request, res: Response ) => {
    Proveedor.findAll()
    .then((arregloProveedor: any)=>{
        let rpta = {ok:true, message: arregloProveedor}
        res.json(rpta)
    })
    .catch((error: any)=>{console.log(error);
    })
}