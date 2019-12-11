import { proyecto_model } from './../models/Proyecto';
import { umedida_model} from './../models/uMedida';
import { familia_model  } from './../models/Familia';
import { usuario_model } from './../models/Usuario';
import { proveedor_model } from './../models/Proveedor';

import {Sequelize} from 'sequelize';

export const conexion: Sequelize = new Sequelize('proyectos', 'root', 'root', 
       {host: 'localhost',dialect: 'mysql', logging: console.log, 
       dialectOptions:{useUTC: false, dateStrings: true, typeCast: true}});

export const Proyecto = proyecto_model(conexion);
export const UMedida = umedida_model(conexion);
export const Familia = familia_model(conexion);
export const Usuario = usuario_model(conexion);
export const Proveedor = proveedor_model(conexion),