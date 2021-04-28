"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
//import mysql from 'mysql2';
const dbconfig_1 = __importDefault(require("./dbconfig"));
const pool = promise_mysql_1.default.createPool(dbconfig_1.default.database);
pool.getConnection()
    .then(connection => {
    pool.releaseConnection(connection);
    console.log('DB esta conectada');
});
/*pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.release();
    console.log('DB esta conectada');
})*/
/*pool.then((r: any) => r.getConnection().then((connection:any)=>{
    r.releaseConnection(connection);
    console.log('DB, Conexion exitosa.')
}));*/
exports.default = pool;
