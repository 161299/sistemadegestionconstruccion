import { Request , Response} from 'express';
import { Familia } from './../config/sequelize'

export const getFamilias = (req: Request, res: Response)=>{
    Familia.findAll()
    .then((arregloFamilias: any)=>{
        let rpta = {ok: true, message: arregloFamilias};
        res.json(rpta)
    })
    .catch((error:any)=>{console.log(error);
    })
}