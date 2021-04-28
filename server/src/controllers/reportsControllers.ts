import { Request, Response } from 'express';
import pool from '../databaseconect';


class ReportsController {

    public index(req: Request, res: Response) {
        //pool.query('Select * from Pais')
        res.json('xd')
    }

    public async listpais(req: Request, res: Response): Promise<void> {
        //const result = await pool.query('SELECT * FROM Pais');
        //res.json(result);
        //res.json(pais);

        try {
            const result = await pool.query('SELECT * FROM Pais');
            //res.json({ status: 1, message: 'usuario ingresado' });
            res.json(result);
          } catch (err) {
            res.status(404).json({ status: -1, error: err.sqlMessage });
            // handle errors here
          }

        /*pool.query('SELECT * FROM Pais',async function(error,result){
            if (error) {
                console.log("Error en consulta10");
                res.json(error)
            } else {
                //console.log(JSON.stringify(result));
                console.log("consulta exitosa 10");
                res.send(result)
            } 
        });*/

    }

    public async rep1(req: Request, res: Response): Promise<any> {
       var sql = "SELECT Profesional.idProfesional, Profesional.Nombre,\
       (select COUNT(Invento_AsignadoProf.idInvento) from Invento_AsignadoProf\
       WHERE Invento_AsignadoProf.idProfesional = Profesional.idProfesional) as cant_inven\
       FROM Profesional ORDER BY cant_inven DESC"
        try {
            const result = await pool.query(sql);
            //res.json({ status: 1, message: 'usuario ingresado' });
            res.json(result);
          } catch (err) {
            res.status(404).json( err.sqlMessage);
            // handle errors here
          }
    }


    public async rep2(req: Request, res: Response): Promise<any> {

       var sql = "SELECT RP.idRegion, RP.nombre, Pais.idPais, Pais.pais, \
       (select COUNT(Pais_Respuesta.idRespuesta) from Pais_Respuesta\
       where Pais.idPais = Pais_Respuesta.idPais ) as Cant_res\
       FROM Pais, Region, Region RP\
       WHERE Pais.idRegion = Region.idRegion AND\
       Region.idRegionPadre = RP.idRegion \
       ORDER BY Cant_res DESC, Pais.pais ASC;"
        try {
            const result = await pool.query(sql);
            //res.json({ status: 1, message: 'usuario ingresado' });
            res.json(result);
          } catch (err) {
            res.status(404).json( err.sqlMessage);
            // handle errors here
          }
    }

    public async rep3(req: Request, res: Response): Promise<any> {

       var sql = "SELECT Pais.idPais, Pais.pais, Pais.Area\
       FROM Pais, Frontera\
       WHERE Pais.idPais = Frontera.idPais AND\
       Frontera.idPaisFrontera is NULL AND\
       (SELECT COUNT(idInvento) FROM Invento WHERE Invento.idPais = Pais.idPais) = 0\
       ORDER BY Pais.Area DESC;"
        try {
            const result = await pool.query(sql);
            //res.json({ status: 1, message: 'usuario ingresado' });
            res.json(result);
          } catch (err) {
            res.status(404).json( err.sqlMessage);
            // handle errors here
          }
    }

    public async rep4(req: Request, res: Response): Promise<any> {
       var sql = "SELECT ProJ.Nombre as ProfJefe, \
       ProSJ.Nombre as ProfSubJefe,\
       ProSubAl.Nombre as ProfSubAlterno\
       FROM Area, Profesional ProJ, Profesional ProSJ, Profe_in_Area, Profesional ProSubAl\
       WHERE Area.idProfesionalJefe = ProJ.idProfesional AND\
       Area.idProfesionalSubJefe = ProSJ.idProfesional AND\
       Area.idArea = Profe_in_Area.idArea AND\
       Profe_in_Area.idProfesional = ProSubAl.idProfesional\
       ORDER BY ProJ.Nombre, ProSJ.Nombre, ProSubAl.Nombre ASC;"
        try {
            const result = await pool.query(sql);
            //res.json({ status: 1, message: 'usuario ingresado' });
            res.json(result);
          } catch (err) {
            res.status(404).json( err.sqlMessage);
            // handle errors here
          }
    }


    public async rep5(req: Request, res: Response): Promise<any> {

       var sql = "SELECT Profesional.Nombre, Profe_in_Area.idArea, Area.Nombre as areanombre,\
       Profesional.Salario, PromArea.prom_ar\
       FROM Profesional, Profe_in_Area,\
       (SELECT Profe_in_Area.idArea, AVG(Profesional.Salario) as prom_ar\
       FROM Profesional, Profe_in_Area\
       WHERE Profesional.idProfesional = Profe_in_Area.idProfesional\
       GROUP BY Profe_in_Area.idArea\
       ORDER BY Profe_in_Area.idArea ASC) PromArea, Area\
       WHERE Profesional.idProfesional = Profe_in_Area.idProfesional AND\
       Profe_in_Area.idArea = PromArea.idArea AND\
       Profe_in_Area.idArea = Area.idArea AND\
       Profesional.Salario > PromArea.prom_ar\
       ORDER BY Profe_in_Area.idArea ASC; "
        try {
            const result = await pool.query(sql);
            //res.json({ status: 1, message: 'usuario ingresado' });
            res.json(result);
          } catch (err) {
            res.status(404).json( err.sqlMessage);
            // handle errors here
          }
    }

    public async rep6(req: Request, res: Response): Promise<any> {
       var sql = "SELECT Pais.idPais, Pais.pais,\
       COUNT(Respuesta_Correcta.idRespuesta) as res_correctas\
       FROM Pais, Pais_Respuesta, Respuesta_Correcta\
       WHERE Pais.idPais = Pais_Respuesta.idPais AND\
       Pais_Respuesta.idRespuesta = Respuesta_Correcta.idRespuesta\
       GROUP BY Pais.idPais, Pais.pais\
       ORDER BY res_correctas DESC;"
        try {
            const result = await pool.query(sql);
            //res.json({ status: 1, message: 'usuario ingresado' });
            res.json(result);
          } catch (err) {
            res.status(404).json( err.sqlMessage);
            // handle errors here
          }
    }

    public async rep7(req: Request, res: Response): Promise<any> {
       var sql = "SELECT Invento.idInvento, Invento.Nombre \
       FROM Invento, Invento_AsignadoProf, Profe_in_Area, Area\
       WHERE Invento.idInvento = Invento_AsignadoProf.idInvento AND\
       Invento_AsignadoProf.idProfesional = Profe_in_Area.idProfesional AND\
       Profe_in_Area.idArea = Area.idArea AND\
       Area.Nombre = 'Óptica'\
       ORDER BY Invento.Nombre ASC;"
        try {
            const result = await pool.query(sql);
            //res.json({ status: 1, message: 'usuario ingresado' });
            res.json(result);
          } catch (err) {
            res.status(404).json( err.sqlMessage);
            // handle errors here
          }
    }


    public async rep8(req: Request, res: Response): Promise<any> {
       var sql = "SELECT SUBSTRING(pais, 1,1) as inicial_P, SUM(Area) as Suma_Areas\
       FROM Pais\
       GROUP BY  inicial_P\
       ORDER BY inicial_P ASC;"
        try {
            const result = await pool.query(sql);
            //res.json({ status: 1, message: 'usuario ingresado' });
            res.json(result);
          } catch (err) {
            res.status(404).json( err.sqlMessage);
            // handle errors here
          }
    }

    public async rep9(req: Request, res: Response): Promise<any> {
       var sql = "SELECT Inventor.Nombre as inventor_n, Invento.Nombre as invento_n\
       FROM Inventor, Inventados, Invento\
       WHERE UPPER(Inventor.Nombre) LIKE 'BE%' AND\
       Inventor.idInventor = Inventados.idInventor AND\
       Inventados.idInvento = Invento.idInvento\
       ORDER BY Inventor.Nombre ASC;"
        try {
            const result = await pool.query(sql);
            //res.json({ status: 1, message: 'usuario ingresado' });
            res.json(result);
          } catch (err) {
            res.status(404).json( err.sqlMessage);
            // handle errors here
          }
    }

    public async rep10(req: Request, res: Response): Promise<any> {
       var sql = "SELECT Inventor.Nombre as inventor_n, Invento.AnioInvento\
       FROM Inventor, Inventados, Invento\
       WHERE UPPER(Inventor.Nombre) LIKE 'B%' AND\
       (Inventor.Nombre LIKE '%r' OR Inventor.Nombre LIKE '%n') AND\
       Inventor.idInventor = Inventados.idInventor AND\
       Inventados.idInvento = Invento.idInvento AND\
       Invento.AnioInvento >= 1801 and Invento.AnioInvento <= 1900\
       ORDER BY Inventor.Nombre ASC;"
        try {
            const result = await pool.query(sql);
            //res.json({ status: 1, message: 'usuario ingresado' });
            res.json(result);
          } catch (err) {
            res.status(404).json( err.sqlMessage);
            // handle errors here
          }
    }


    public async rep11(req: Request, res: Response): Promise<any> {
       var sql = "SELECT Pais.idPais, Pais.pais, Pais.Area,\
       (SELECT \
       SUM(if(norte = 'X',1,0) +\
       if(sur = 'X',1,0) +\
       if(este = 'X',1,0) +\
       if(oeste = 'X',1,0))\
       FROM Frontera\
       WHERE Frontera.idPais = Pais.idPais) as fronterasn\
       FROM Pais\
       WHERE (SELECT \
       SUM(if(norte = 'X',1,0) +\
       if(sur = 'X',1,0) +\
       if(este = 'X',1,0) +\
       if(oeste = 'X',1,0))\
       FROM Frontera\
       WHERE Frontera.idPais = Pais.idPais) > 7\
       ORDER BY Pais.Area DESC;"
        try {
            const result = await pool.query(sql);
            //res.json({ status: 1, message: 'usuario ingresado' });
            res.json(result);
          } catch (err) {
            res.status(404).json( err.sqlMessage);
            // handle errors here
          }
    }

    public async rep12(req: Request, res: Response): Promise<any> {
       var sql = "SELECT Invento.Nombre, LENGTH(Invento.Nombre) as tamnom\
       FROM  Invento\
       WHERE UPPER(Invento.Nombre) LIKE 'L%' AND\
       LENGTH(Invento.Nombre) = 4\
       ORDER BY Invento.Nombre ASC;"
        try {
            const result = await pool.query(sql);
            //res.json({ status: 1, message: 'usuario ingresado' });
            res.json(result);
          } catch (err) {
            res.status(404).json( err.sqlMessage);
            // handle errors here
          }
    }

    public async rep13(req: Request, res: Response): Promise<any> {
       var sql = "SELECT idProfesional, Nombre, Salario, Comision,\
       (Salario + Comision) as Total_salario, (Salario*0.25) as sal25\
       FROM Profesional\
       WHERE Comision > (Salario*0.25);"
        try {
            const result = await pool.query(sql);
            //res.json({ status: 1, message: 'usuario ingresado' });
            res.json(result);
          } catch (err) {
            res.status(404).json( err.sqlMessage);
            // handle errors here
          }
    }

    public async rep14(req: Request, res: Response): Promise<any> {
        var sql = "SELECT Encuesta.idEncuesta, Encuesta.Nombre,\
        COUNT(distinct Pais_Respuesta.idPais) as No_Paises\
        FROM Encuesta, Pregunta, Respuestas, Pais_Respuesta\
        WHERE Encuesta.idEncuesta = Pregunta.idEncuesta AND\
        Pregunta.idPregunta = Respuestas.idPregunta AND\
        Respuestas.idRespuesta = Pais_Respuesta.idRespuesta\
        GROUP BY  Encuesta.idEncuesta, Encuesta.Nombre\
        ORDER BY No_Paises DESC;"
         try {
             const result = await pool.query(sql);
             //res.json({ status: 1, message: 'usuario ingresado' });
             res.json(result);
           } catch (err) {
             res.status(404).json( err.sqlMessage);
             // handle errors here
           }
    }

    public async rep15(req: Request, res: Response): Promise<any> {
        var sql = "SELECT idPais, pais, Poblacion, Po_ca.Poblacion_Centroamer\
        FROM Pais,\
        (SELECT SUM(Pais.Poblacion) as Poblacion_Centroamer\
        FROM Pais, Region\
        WHERE Pais.idRegion = Region.idRegion AND\
        Region.nombre = 'Centro America') Po_ca\
        WHERE Poblacion > Po_ca.Poblacion_Centroamer\
        ORDER BY pais ASC;"
         try {
             const result = await pool.query(sql);
             //res.json({ status: 1, message: 'usuario ingresado' });
             res.json(result);
           } catch (err) {
             res.status(404).json( err.sqlMessage);
             // handle errors here
           }
    }

    public async rep16(req: Request, res: Response): Promise<any> {
        var sql = "SELECT distinct Profgen.Nombre as JefeGen, Profesional.Nombre as SubJefe, Prof.Nombre as Profesional,\
        /*Inventor.Nombre as inventor,*/ Area.Nombre as depart_area\
        FROM Area, Profesional, Profesional Profgen, Profe_in_Area, Profesional Prof, Invento_AsignadoProf,\
        Inventados, Inventor\
        WHERE Area.idProfesionalSubJefe = Profesional.idProfesional AND\
        Area.idProfesionalJefe = Profgen.idProfesional AND\
        Area.idArea = Profe_in_Area.idArea AND\
        Profe_in_Area.idProfesional = Prof.idProfesional AND\
        Profe_in_Area.idProfesional = Invento_AsignadoProf.idProfesional AND\
        Invento_AsignadoProf.idInvento = Inventados.idInvento AND\
        Inventados.idInventor = Inventor.idInventor AND\
        /*Inventor.Nombre <> 'Pasteur' AND*/\
        Area.idArea NOT IN \
        (SELECT Area.idArea\
        FROM Area, Profesional, Profe_in_Area, Profesional Prof, Invento_AsignadoProf,\
        Inventados, Inventor\
        WHERE Area.idProfesionalSubJefe = Profesional.idProfesional AND\
        Area.idArea = Profe_in_Area.idArea AND\
        Profe_in_Area.idProfesional = Prof.idProfesional AND\
        Profe_in_Area.idProfesional = Invento_AsignadoProf.idProfesional AND\
        Invento_AsignadoProf.idInvento = Inventados.idInvento AND\
        Inventados.idInventor = Inventor.idInventor AND\
        Inventor.Nombre = 'Pasteur')\
        ORDER BY Profesional.Nombre ASC;"
         try {
             const result = await pool.query(sql);
             //res.json({ status: 1, message: 'usuario ingresado' });
             res.json(result);
           } catch (err) {
             res.status(404).json( err.sqlMessage);
             // handle errors here
           }
    }

    public async rep17(req: Request, res: Response): Promise<any> {
        var sql = "SELECT Invento.idInvento, Invento.Nombre, Invento.AnioInvento\
        FROM Invento\
        WHERE Invento.AnioInvento IN (SELECT Invento.AnioInvento\
        FROM Inventor, Inventados, Invento\
        WHERE Inventor.idInventor = Inventados.idInventor AND\
        Inventados.idInvento = Invento.idInvento AND\
        Inventor.Nombre = 'Benz');"
         try {
             const result = await pool.query(sql);
             //res.json({ status: 1, message: 'usuario ingresado' });
             res.json(result);
           } catch (err) {
             res.status(404).json( err.sqlMessage);
             // handle errors here
           }
    }

    public async rep18(req: Request, res: Response): Promise<any> {
        var sql = "SELECT Pais.idPais, Pais.pais, Pais.Poblacion, Pais.Area,\
        AreaJapon.Area as JaponArea\
        FROM Pais, Frontera,\
        (SELECT Pais.idPais, Pais.pais, Pais.Poblacion, Pais.Area\
        FROM Pais\
        WHERE Pais.pais = 'Japon') AreaJapon\
        WHERE Pais.idPais = Frontera.idPais AND\
        Frontera.idPaisFrontera is NULL AND\
        Pais.Area >= AreaJapon.Area;"
         try {
             const result = await pool.query(sql);
             //res.json({ status: 1, message: 'usuario ingresado' });
             res.json(result);
           } catch (err) {
             res.status(404).json( err.sqlMessage);
             // handle errors here
           }
    }

    public async rep19(req: Request, res: Response): Promise<any> {
        var sql = "SELECT distinct Pais.idPais, Pais.pais, Frontera.idPais, Frontera.idPaisFrontera, PaisFron.pais as PaisFrontera\
        FROM Pais, Frontera, Pais PaisFron\
        WHERE Pais.idPais = Frontera.idPais AND\
        Frontera.idPaisFrontera = PaisFron.idPais\
        ORDER BY Pais.pais;"
         try {
             const result = await pool.query(sql);
             //res.json({ status: 1, message: 'usuario ingresado' });
             res.json(result);
           } catch (err) {
             res.status(404).json( err.sqlMessage);
             // handle errors here
           }
    }

    public async rep20(req: Request, res: Response): Promise<any> {
        var sql = "SELECT idProfesional, Nombre, Salario, Comision, 2*Comision as doble_comi\
        FROM Profesional\
        WHERE Salario > 2*Comision;"
         try {
             const result = await pool.query(sql);
             //res.json({ status: 1, message: 'usuario ingresado' });
             res.json(result);
           } catch (err) {
             res.status(404).json( err.sqlMessage);
             // handle errors here
           }
    }


}

const repController = new ReportsController;
export default repController;