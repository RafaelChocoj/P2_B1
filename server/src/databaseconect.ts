import mysql from 'promise-mysql';
//import mysql from 'mysql2';

import keys from './dbconfig';

const pool = mysql.createPool(keys.database);

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


export default pool;
