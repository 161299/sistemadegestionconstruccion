import {Request, Response} from 'express';
import { Usuario } from './../config/sequelize';

export const getUsuarios = (req: Request, res: Response)=>{
    Usuario.findAll()
    .then((arregloUsuarios: any)=>{
        let rpta = {ok: true, message: arregloUsuarios};
        res.json(rpta)
    })
    .catch((error:any)=>{console.log(error);
    })
}