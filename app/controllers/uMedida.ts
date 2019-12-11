import { Request, Response } from 'express';
import  { UMedida}   from './../config/sequelize'

export const getUMedidas = (req: Request, res: Response)=>{
       UMedida.findAll()
       .then((arregloUMedidas: any)=>{
             let rpta = {ok: true, message: arregloUMedidas };
             res.json(rpta)              
       })
       .catch((error: any)=>{console.log(error);
       })             
}