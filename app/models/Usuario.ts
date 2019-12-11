import {Sequelize, DataTypes} from 'sequelize';

export const usuario_model: Function = ( conexion: Sequelize)=>{
    const modelo = conexion.define('usuario',{
        usu_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
        usu_email: {type: DataTypes.STRING(45), allowNull: false},
        usu_hash: {type: DataTypes.TEXT, allowNull: false},
        usu_salt: {type: DataTypes.TEXT, allowNull: false},
        usu_tipo: {type: DataTypes.STRING, allowNull: false},
        usu_nom: {type: DataTypes.STRING, allowNull: false},
        usu_ape: {type: DataTypes.STRING, allowNull: false}
    },{
        tableName: 't_usuario',
        timestamps: true
    })
    return modelo
}