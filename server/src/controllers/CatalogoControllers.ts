import { Request, Response } from 'express';
import pool from '../databaseconect';


class catalogController {


    public index(req: Request, res: Response) {
        /////pool.query('DESCRIBE pais')
        /////res.json('pais')
    }

    public async regiones(req: Request, res: Response): Promise<any> {
      var sql = "SELECT idRegion, nombre, idRegionPadre FROM Region;"
       try {
           const result = await pool.query(sql);
           //res.json({ status: 1, message: 'usuario ingresado' });
           res.json(result);
         } catch (err) {
           res.status(404).json( err.sqlMessage);
           // handle errors here
         }
    }

    public async encuestas(req: Request, res: Response): Promise<any> {
      var sql = "SELECT idEncuesta, Nombre FROM Encuesta;"
       try {
           const result = await pool.query(sql);
           //res.json({ status: 1, message: 'usuario ingresado' });
           res.json(result);
         } catch (err) {
           res.status(404).json( err.sqlMessage);
           // handle errors here
         }
    }

    public async listpais(req: Request, res: Response): Promise<any> {
      var sql = "SELECT idPais, pais, Capital, Poblacion, Pais.area, Region.nombre\
      FROM Pais, Region\
      WHERE Pais.idRegion = Region.idRegion ORDER BY idPais ASC;"
       try {
           const result = await pool.query(sql);
           //res.json({ status: 1, message: 'usuario ingresado' });
           res.json(result);
         } catch (err) {
           res.status(404).json( err.sqlMessage);
           // handle errors here
         }
    }

    public async listinventores(req: Request, res: Response): Promise<any> {
      var sql = "SELECT idInventor, Nombre, idPais FROM Inventor ORDER BY Nombre ASC;"
       try {
           const result = await pool.query(sql);
           //res.json({ status: 1, message: 'usuario ingresado' });
           res.json(result);
         } catch (err) {
           res.status(404).json( err.sqlMessage);
           // handle errors here
         }
    }

    public async listInventos(req: Request, res: Response): Promise<any> {
      var sql = "SELECT Invento.idInvento, Invento.Nombre, Invento.AnioInvento, Invento.idPais, Pais.pais \
      FROM Invento, Pais\
      WHERE Invento.idPais = Pais.idPais ORDER BY Invento.idInvento ASC;"
       try {
           const result = await pool.query(sql);
           //res.json({ status: 1, message: 'usuario ingresado' });
           res.json(result);
         } catch (err) {
           res.status(404).json( err.sqlMessage);
           // handle errors here
         }
    }

    public async editInventos(req: Request, res: Response): Promise<any> {
      const { idinv } = req.params;
      var sql = "SELECT Invento.idInvento, Invento.Nombre, Invento.AnioInvento, Invento.idPais\
      FROM Invento\
      WHERE Invento.idInvento = ?;"
       try {
           const result = await pool.query(sql, [idinv]);
           //res.json({ status: 1, message: 'usuario ingresado' });
           res.json(result);
         } catch (err) {
           res.status(404).json( err.sqlMessage);
           // handle errors here
         }
    }

    public async g_edInventores(req: Request, res: Response): Promise<any> {
      const { idinv } = req.params;
      var sql = "SELECT idInvento, idInventor \
      FROM Inventados WHERE idInvento = ?;"
       try {
           const result = await pool.query(sql, [idinv]);
           //res.json({ status: 1, message: 'usuario ingresado' });
           res.json(result);
         } catch (err) {
           res.status(404).json( err.sqlMessage);
           // handle errors here
         }
    }

   public async paisedit(req: Request, res: Response): Promise<any> {
    const { idpais } = req.params;
    var sql = "SELECT idPais, pais, Capital, Poblacion, area, idRegion\
    FROM Pais WHERE idPais = ?;"
     try {
         const result = await pool.query(sql, [idpais] );
         //res.json({ status: 1, message: 'usuario ingresado' });
         res.json(result);
       } catch (err) {
         res.status(404).json( err.sqlMessage);
         // handle errors here
       }
  }

  public async fron_edit(req: Request, res: Response): Promise<any> {
    const { idpais } = req.params;
    var sql = "SELECT Norte, Sur, Este, Oeste, idPais, idPaisFrontera\
    FROM Frontera WHERE idPais = ?;"
     try {
         const result = await pool.query(sql, [idpais] );
         //res.json({ status: 1, message: 'usuario ingresado' });
         res.json(result);
       } catch (err) {
         res.status(404).json( err.sqlMessage);
         // handle errors here
       }
  }
    /////agregando Pais
    public async addPais(req: Request, res: Response): Promise<void> {
        const { pais, Capital, Poblacion, Area, idRegion, front_list } = req.body;
        //var Carnet  = req.userId
  
        var sql = "INSERT INTO Pais (pais, Capital, Poblacion, Area, idRegion) VALUES\
         (?, ?, ?, ?, ?)";
  
    try {
        const result = await pool.query(sql, [pais, Capital, Poblacion, Area, idRegion] );

        console.log("result", result.insertId)
        var sql_fron = "INSERT INTO Frontera (Norte, Sur, Este, Oeste, idPais, idPaisFrontera) VALUES\
         (?, ?, ?, ?, ?, ?)";
        for (var i = 0; i < front_list.length; i++) {
          console.log(front_list[i])
          var nor =''
          var sur =''
          var este =''
          var oeste =''
          if (front_list[i].Norte){
            nor = 'X'
          }
          if (front_list[i].Sur){
            sur = 'X'
          }
          if (front_list[i].Este){
            este = 'X'
          }
          if (front_list[i].Oeste){
            oeste = 'X'
          }
          const res_fron = await pool.query(sql_fron, [nor, sur, este, oeste, result.insertId, front_list[i].idPaisFrontera] );
        }

        res.status(200).json('Pais agregado');
      } catch (err) {
        res.status(404).json(err.sqlMessage);
        // handle errors here
      }
  
    }


  public async addFront(req: Request, res: Response): Promise<void> {
      const { idPais, idPaisFrontera, Norte, Sur, Este, Oeste } = req.body;

      var sql_fron = "INSERT INTO Frontera (Norte, Sur, Este, Oeste, idPais, idPaisFrontera) VALUES\
       (?, ?, ?, ?, ?, ?)";

  try {
      
      const res_fron = await pool.query(sql_fron, [Norte, Sur, Este, Oeste, idPais, idPaisFrontera] );

      res.status(200).json('Frontera agregada');
    } catch (err) {
      res.status(404).json(err.sqlMessage);
      // handle errors here
    }

  }

  public async addRespuesta(req: Request, res: Response): Promise<void> {
    const { idPregunta, Respuesta, Letra } = req.body;

    var sql_fron = "INSERT INTO Respuestas (idPregunta, Respuesta, Letra) VALUES\
     (?, ?, ?)";

  try {
      
      const res_fron = await pool.query(sql_fron, [idPregunta, Respuesta, Letra] );

      res.status(200).json('Respuesta agregada');
    } catch (err) {
      res.status(404).json(err.sqlMessage);
      // handle errors here
    }

  }

  public async addResCorrect(req: Request, res: Response): Promise<void> {
    const { idPregunta, idRespuesta } = req.body;

    var sql_exis = "SELECT idPregunta FROM Respuesta_Correcta WHERE idPregunta = ? AND idRespuesta = ?;";

    var sql_fron = "INSERT INTO Respuesta_Correcta (idPregunta, idRespuesta) VALUES\
     (?, ?)";

    try {

      const exist_r = await pool.query(sql_exis, [idPregunta, idRespuesta] );
      console.log(exist_r.length);
        if (exist_r.length == 0) {
          const res_fron = await pool.query(sql_fron, [idPregunta, idRespuesta] );
          res.status(200).json('Respuesta Correcta Seleccionada');
        } else {
          res.status(200).json("Ya esta marcado como correcto");
        } 

      } catch (err) {
        res.status(404).json(err.sqlMessage);
        // handle errors here
      }

  }

  public async quitResCorrect(req: Request, res: Response): Promise<void> {
    const { idPregunta, idRespuesta } = req.body;

    var sql_fron = "DELETE FROM Respuesta_Correcta WHERE idPregunta = ? AND idRespuesta = ?";

    try {
        
        const res_fron = await pool.query(sql_fron, [idPregunta, idRespuesta] );

        res.status(200).json('Respuesta Correcta Quitada');
      } catch (err) {
        res.status(404).json(err.sqlMessage);
        // handle errors here
      }

  }

    /////eliminar Pais
    public async delPais(req: Request, res: Response): Promise<void> {
        const { idpais } = req.params;
        var sqlfron = "DELETE FROM Frontera\
        WHERE idPais = ?";

        var sql = "DELETE FROM Pais\
        WHERE idPais = ?";
        try {

            const result2 = await pool.query(sqlfron, [idpais] );
            const result = await pool.query(sql, [idpais] );
            res.status(200).json('Pais Eliminado' );
        } catch (err) {
          //res.status(404).json({ status: -1, error: err.sqlMessage });
          console.log(err.sqlMessage)
          res.status(404).json(err.sqlMessage);
          // handle errors here
        }
  
    }

    public async delFront(req: Request, res: Response): Promise<void> {
      const { idPais, idPaisFrontera } = req.body;
      var sql = "DELETE FROM Frontera\
      WHERE idPais = ? AND idPaisFrontera = ?";
      try {
          const result = await pool.query(sql, [idPais, idPaisFrontera] );
          res.status(200).json('Frontera Eliminada' );
      } catch (err) {
        //res.status(404).json({ status: -1, error: err.sqlMessage });
        res.status(404).json(err.sqlMessage);
        // handle errors here
      }
    }

    public async delResp(req: Request, res: Response): Promise<void> {
      const { idPregunta, idRespuesta } = req.body;

      var sql_fron = "DELETE FROM Respuesta_Correcta WHERE idPregunta = ? AND idRespuesta = ?";

      var sql = "DELETE FROM Respuestas\
      WHERE idPregunta = ? AND idRespuesta = ?";
      try {
        const result0 = await pool.query(sql_fron, [idPregunta, idRespuesta] );

        const result = await pool.query(sql, [idPregunta, idRespuesta] );
          res.status(200).json('Respuesta Eliminada' );
      } catch (err) {
        //res.status(404).json({ status: -1, error: err.sqlMessage });
        await pool.query("rollback;");
        res.status(404).json(err.sqlMessage);
        // handle errors here
      }
    }

    /////actual Pais
    public async upPais(req: Request, res: Response): Promise<void> {
        const { pais, Capital, Poblacion, Area, idRegion, idPais } = req.body;
        var sql = "UPDATE Pais SET pais = ?, Capital = ?, Poblacion = ?, Area = ?, idRegion = ?\
        WHERE idPais = ?";

    try {
        const result = await pool.query(sql, [pais, Capital, Poblacion, Area, idRegion, idPais] );
       // res.status(200).json({ status: 1, message: 'usuario ingresado' });
        res.status(200).json('Pais Actualizado' );
      } catch (err) {
        //res.status(404).json({ status: -1, error: err.sqlMessage });
        res.status(404).json(err.sqlMessage);
        // handle errors here
      }

    }

    public async preguntedit(req: Request, res: Response): Promise<any> {
      const { idpre } = req.params;
      var sql = "SELECT Pregunta.idPregunta, Pregunta.Pregunta,\
      Pregunta.idEncuesta \
      FROM Pregunta\
      WHERE Pregunta.idPregunta = ?;"
       try {
           const result = await pool.query(sql, [idpre]);
           //res.json({ status: 1, message: 'usuario ingresado' });
           res.json(result);
         } catch (err) {
           res.status(404).json( err.sqlMessage);
           // handle errors here
         }
   }

   public async listpregun(req: Request, res: Response): Promise<any> {
    var sql = "SELECT Pregunta.idPregunta, CONCAT(SUBSTRING(Pregunta.Pregunta, 1,81),'...') as Pregunta,\
    Pregunta.idEncuesta, Encuesta.Nombre \
    FROM Pregunta, Encuesta\
    WHERE Pregunta.idEncuesta = Encuesta.idEncuesta ORDER BY Pregunta.idPregunta ASC;"
     try {
         const result = await pool.query(sql);
         //res.json({ status: 1, message: 'usuario ingresado' });
         res.json(result);
       } catch (err) {
         res.status(404).json( err.sqlMessage);
         // handle errors here
       }
 }

 public async resp_edit(req: Request, res: Response): Promise<any> {
  const { idpre } = req.params;
  var sql = "SELECT Respuestas.idRespuesta, Respuestas.Respuesta, Respuestas.Letra, Respuestas.idPregunta,\
  (select count(Respuesta_Correcta.idRespuesta) from Respuesta_Correcta\
  where Respuesta_Correcta.idRespuesta = Respuestas.idRespuesta and\
  Respuesta_Correcta.idPregunta = Respuestas.idPregunta) as idcorrecta\
  FROM Respuestas WHERE Respuestas.idPregunta = ? ORDER BY Respuestas.Letra ASC;"
   try {
       const result = await pool.query(sql, [idpre] );
       //res.json({ status: 1, message: 'usuario ingresado' });
       res.json(result);
     } catch (err) {
       res.status(404).json( err.sqlMessage);
       // handle errors here
     }
}


    /////agregando Pregunta nueva
    public async addPregunta(req: Request, res: Response): Promise<void> {
        const { Pregunta, idEncuesta, respu_list } = req.body;
  
        var sql = "INSERT INTO Pregunta (Pregunta, idEncuesta) VALUES\
         (?, ?)";
  
    try {
        const result = await pool.query(sql, [Pregunta, idEncuesta] );

        console.log("result", result.insertId)
        var sql_fron = "INSERT INTO Respuestas (Respuesta, Letra, idPregunta) VALUES\
         (?, ?, ?)";

        for (var i = 0; i < respu_list.length; i++) {
          //console.log(respu_list[i])
          const res_fron = await pool.query(sql_fron, [respu_list[i].Respuesta, respu_list[i].Letra, result.insertId] );
        }

        res.status(200).json('Pregunta nueva agregada');
      } catch (err) {
        await pool.query('rollback;')
        console.log(err.sqlMessage)
        res.status(404).json(err.sqlMessage);
        // handle errors here
      }
  
    }

    public async addInvento_inventa(req: Request, res: Response): Promise<void> {
      const { idInvento, idInventor } = req.body;

      var sql = "INSERT INTO Inventados (idInvento, idInventor) VALUES\
       (?, ?)";

  try {
      const result = await pool.query(sql, [idInvento, idInventor] );

      res.status(200).json('Inventor agregado a Invento');
    } catch (err) {
      await pool.query('rollback;')
      console.log(err.sqlMessage)
      res.status(404).json(err.sqlMessage);
      // handle errors here
    }

  }

  public async deleteInvento_inventa(req: Request, res: Response): Promise<void> {
    const { idInvento, idInventor } = req.body;

    var sql = "DELETE FROM Inventados WHERE idInvento = ? AND idInventor = ?";

  try {
      const result = await pool.query(sql, [idInvento, idInventor] );

      res.status(200).json('Inventor eliminado a Invento');
    } catch (err) {
      await pool.query('rollback;')
      console.log(err.sqlMessage)
      res.status(404).json(err.sqlMessage);
      // handle errors here
    }

  }


    /////actualizo pregunta
    public async upPregunta(req: Request, res: Response): Promise<void> {
        const { Pregunta, idEncuesta, idPregunta } = req.body;
        var sql = "UPDATE Pregunta SET Pregunta = ?, idEncuesta = ?\
        WHERE idPregunta = ?";

    try {
        const result = await pool.query(sql, [Pregunta, idEncuesta, idPregunta] );
       // res.status(200).json({ status: 1, message: 'usuario ingresado' });
        res.status(200).json('Pregunta Actualizada' );
      } catch (err) {
        //res.status(404).json({ status: -1, error: err.sqlMessage });
        res.status(404).json(err.sqlMessage);
        // handle errors here
      }
    }

    /////actualizo invento
    public async upInvento(req: Request, res: Response): Promise<void> {
      const { Nombre, AnioInvento, idInvento } = req.body;
      var sql = "UPDATE Invento SET Nombre = ?, AnioInvento = ?\
      WHERE idInvento = ?";

  try {
      const result = await pool.query(sql, [Nombre, AnioInvento, idInvento] );
     // res.status(200).json({ status: 1, message: 'usuario ingresado' });
      res.status(200).json('Invento Actualizado' );
    } catch (err) {
      //res.status(404).json({ status: -1, error: err.sqlMessage });
      res.status(404).json(err.sqlMessage);
      // handle errors here
    }
  }


    /////eliminar Pregunta
    public async delPregunta(req: Request, res: Response): Promise<void> {
        const { idpreg } = req.params;

        var sqlres = "DELETE FROM Respuestas\
        WHERE idPregunta = ?";

        var sqlrescor = "DELETE FROM Respuesta_Correcta\
        WHERE idPregunta = ?";

        var sql = "DELETE FROM Pregunta\
        WHERE idPregunta = ?";
        try {
          const result1 = await pool.query(sqlres, [idpreg] );
          const result2 = await pool.query(sqlrescor, [idpreg] );

            const result = await pool.query(sql, [idpreg] );
            res.status(200).json('Pregunta Eliminada' );
        } catch (err) {
          //res.status(404).json({ status: -1, error: err.sqlMessage });
          res.status(404).json(err.sqlMessage);
          // handle errors here
        }
  
    }
}

const catController = new catalogController;
export default catController;