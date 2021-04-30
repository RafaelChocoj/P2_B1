"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const databaseconect_1 = __importDefault(require("../databaseconect"));
class catalogController {
    index(req, res) {
        /////pool.query('DESCRIBE pais')
        /////res.json('pais')
    }
    regiones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = "SELECT idRegion, nombre, idRegionPadre FROM Region;";
            try {
                const result = yield databaseconect_1.default.query(sql);
                //res.json({ status: 1, message: 'usuario ingresado' });
                res.json(result);
            }
            catch (err) {
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    encuestas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = "SELECT idEncuesta, Nombre FROM Encuesta;";
            try {
                const result = yield databaseconect_1.default.query(sql);
                //res.json({ status: 1, message: 'usuario ingresado' });
                res.json(result);
            }
            catch (err) {
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    listpais(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = "SELECT idPais, pais, Capital, Poblacion, Pais.area, Region.nombre\
      FROM Pais, Region\
      WHERE Pais.idRegion = Region.idRegion ORDER BY idPais ASC;";
            try {
                const result = yield databaseconect_1.default.query(sql);
                //res.json({ status: 1, message: 'usuario ingresado' });
                res.json(result);
            }
            catch (err) {
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    listinventores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = "SELECT idInventor, Nombre, idPais FROM Inventor ORDER BY Nombre ASC;";
            try {
                const result = yield databaseconect_1.default.query(sql);
                //res.json({ status: 1, message: 'usuario ingresado' });
                res.json(result);
            }
            catch (err) {
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    listInventos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = "SELECT Invento.idInvento, Invento.Nombre, Invento.AnioInvento, Invento.idPais, Pais.pais \
      FROM Invento, Pais\
      WHERE Invento.idPais = Pais.idPais ORDER BY Invento.idInvento ASC;";
            try {
                const result = yield databaseconect_1.default.query(sql);
                //res.json({ status: 1, message: 'usuario ingresado' });
                res.json(result);
            }
            catch (err) {
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    editInventos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idinv } = req.params;
            var sql = "SELECT Invento.idInvento, Invento.Nombre, Invento.AnioInvento, Invento.idPais\
      FROM Invento\
      WHERE Invento.idInvento = ?;";
            try {
                const result = yield databaseconect_1.default.query(sql, [idinv]);
                //res.json({ status: 1, message: 'usuario ingresado' });
                res.json(result);
            }
            catch (err) {
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    g_edInventores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idinv } = req.params;
            var sql = "SELECT idInvento, idInventor \
      FROM Inventados WHERE idInvento = ?;";
            try {
                const result = yield databaseconect_1.default.query(sql, [idinv]);
                //res.json({ status: 1, message: 'usuario ingresado' });
                res.json(result);
            }
            catch (err) {
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    paisedit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idpais } = req.params;
            var sql = "SELECT idPais, pais, Capital, Poblacion, area, idRegion\
    FROM Pais WHERE idPais = ?;";
            try {
                const result = yield databaseconect_1.default.query(sql, [idpais]);
                //res.json({ status: 1, message: 'usuario ingresado' });
                res.json(result);
            }
            catch (err) {
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    fron_edit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idpais } = req.params;
            var sql = "SELECT Norte, Sur, Este, Oeste, idPais, idPaisFrontera\
    FROM Frontera WHERE idPais = ?;";
            try {
                const result = yield databaseconect_1.default.query(sql, [idpais]);
                //res.json({ status: 1, message: 'usuario ingresado' });
                res.json(result);
            }
            catch (err) {
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    /////agregando Pais
    addPais(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pais, Capital, Poblacion, Area, idRegion, front_list } = req.body;
            //var Carnet  = req.userId
            var sql = "INSERT INTO Pais (pais, Capital, Poblacion, Area, idRegion) VALUES\
         (?, ?, ?, ?, ?)";
            try {
                const result = yield databaseconect_1.default.query(sql, [pais, Capital, Poblacion, Area, idRegion]);
                console.log("result", result.insertId);
                var sql_fron = "INSERT INTO Frontera (Norte, Sur, Este, Oeste, idPais, idPaisFrontera) VALUES\
         (?, ?, ?, ?, ?, ?)";
                for (var i = 0; i < front_list.length; i++) {
                    console.log(front_list[i]);
                    var nor = '';
                    var sur = '';
                    var este = '';
                    var oeste = '';
                    if (front_list[i].Norte) {
                        nor = 'X';
                    }
                    if (front_list[i].Sur) {
                        sur = 'X';
                    }
                    if (front_list[i].Este) {
                        este = 'X';
                    }
                    if (front_list[i].Oeste) {
                        oeste = 'X';
                    }
                    const res_fron = yield databaseconect_1.default.query(sql_fron, [nor, sur, este, oeste, result.insertId, front_list[i].idPaisFrontera]);
                }
                res.status(200).json('Pais agregado');
            }
            catch (err) {
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    addFront(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPais, idPaisFrontera, Norte, Sur, Este, Oeste } = req.body;
            var sql_fron = "INSERT INTO Frontera (Norte, Sur, Este, Oeste, idPais, idPaisFrontera) VALUES\
       (?, ?, ?, ?, ?, ?)";
            try {
                const res_fron = yield databaseconect_1.default.query(sql_fron, [Norte, Sur, Este, Oeste, idPais, idPaisFrontera]);
                res.status(200).json('Frontera agregada');
            }
            catch (err) {
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    addRespuesta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPregunta, Respuesta, Letra } = req.body;
            var sql_fron = "INSERT INTO Respuestas (idPregunta, Respuesta, Letra) VALUES\
     (?, ?, ?)";
            try {
                const res_fron = yield databaseconect_1.default.query(sql_fron, [idPregunta, Respuesta, Letra]);
                res.status(200).json('Respuesta agregada');
            }
            catch (err) {
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    addResCorrect(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPregunta, idRespuesta } = req.body;
            var sql_exis = "SELECT idPregunta FROM Respuesta_Correcta WHERE idPregunta = ? AND idRespuesta = ?;";
            var sql_fron = "INSERT INTO Respuesta_Correcta (idPregunta, idRespuesta) VALUES\
     (?, ?)";
            try {
                const exist_r = yield databaseconect_1.default.query(sql_exis, [idPregunta, idRespuesta]);
                console.log(exist_r.length);
                if (exist_r.length == 0) {
                    const res_fron = yield databaseconect_1.default.query(sql_fron, [idPregunta, idRespuesta]);
                    res.status(200).json('Respuesta Correcta Seleccionada');
                }
                else {
                    res.status(200).json("Ya esta marcado como correcto");
                }
            }
            catch (err) {
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    quitResCorrect(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPregunta, idRespuesta } = req.body;
            var sql_fron = "DELETE FROM Respuesta_Correcta WHERE idPregunta = ? AND idRespuesta = ?";
            try {
                const res_fron = yield databaseconect_1.default.query(sql_fron, [idPregunta, idRespuesta]);
                res.status(200).json('Respuesta Correcta Quitada');
            }
            catch (err) {
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    /////eliminar Pais
    delPais(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idpais } = req.params;
            var sqlfron = "DELETE FROM Frontera\
        WHERE idPais = ?";
            var sql = "DELETE FROM Pais\
        WHERE idPais = ?";
            try {
                const result2 = yield databaseconect_1.default.query(sqlfron, [idpais]);
                const result = yield databaseconect_1.default.query(sql, [idpais]);
                res.status(200).json('Pais Eliminado');
            }
            catch (err) {
                //res.status(404).json({ status: -1, error: err.sqlMessage });
                console.log(err.sqlMessage);
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    delFront(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPais, idPaisFrontera } = req.body;
            var sql = "DELETE FROM Frontera\
      WHERE idPais = ? AND idPaisFrontera = ?";
            try {
                const result = yield databaseconect_1.default.query(sql, [idPais, idPaisFrontera]);
                res.status(200).json('Frontera Eliminada');
            }
            catch (err) {
                //res.status(404).json({ status: -1, error: err.sqlMessage });
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    delResp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPregunta, idRespuesta } = req.body;
            var sql_fron = "DELETE FROM Respuesta_Correcta WHERE idPregunta = ? AND idRespuesta = ?";
            var sql = "DELETE FROM Respuestas\
      WHERE idPregunta = ? AND idRespuesta = ?";
            try {
                const result0 = yield databaseconect_1.default.query(sql_fron, [idPregunta, idRespuesta]);
                const result = yield databaseconect_1.default.query(sql, [idPregunta, idRespuesta]);
                res.status(200).json('Respuesta Eliminada');
            }
            catch (err) {
                //res.status(404).json({ status: -1, error: err.sqlMessage });
                yield databaseconect_1.default.query("rollback;");
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    /////actual Pais
    upPais(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pais, Capital, Poblacion, Area, idRegion, idPais } = req.body;
            var sql = "UPDATE Pais SET pais = ?, Capital = ?, Poblacion = ?, Area = ?, idRegion = ?\
        WHERE idPais = ?";
            try {
                const result = yield databaseconect_1.default.query(sql, [pais, Capital, Poblacion, Area, idRegion, idPais]);
                // res.status(200).json({ status: 1, message: 'usuario ingresado' });
                res.status(200).json('Pais Actualizado');
            }
            catch (err) {
                //res.status(404).json({ status: -1, error: err.sqlMessage });
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    preguntedit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idpre } = req.params;
            var sql = "SELECT Pregunta.idPregunta, Pregunta.Pregunta,\
      Pregunta.idEncuesta \
      FROM Pregunta\
      WHERE Pregunta.idPregunta = ?;";
            try {
                const result = yield databaseconect_1.default.query(sql, [idpre]);
                //res.json({ status: 1, message: 'usuario ingresado' });
                res.json(result);
            }
            catch (err) {
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    loguin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user, contrasenia } = req.body;
            if (user == "admin" && contrasenia == "admin") {
                const tokenid = "admin";
                console.log("correcto");
                res.status(200).json({ tokenid });
            }
            else {
                res.status(404).json("Usuario o Contraseña incorrecta");
            }
        });
    }
    listpregun(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var sql = "SELECT Pregunta.idPregunta, CONCAT(SUBSTRING(Pregunta.Pregunta, 1,81),'...') as Pregunta,\
    Pregunta.idEncuesta, Encuesta.Nombre \
    FROM Pregunta, Encuesta\
    WHERE Pregunta.idEncuesta = Encuesta.idEncuesta ORDER BY Pregunta.idPregunta ASC;";
            try {
                const result = yield databaseconect_1.default.query(sql);
                //res.json({ status: 1, message: 'usuario ingresado' });
                res.json(result);
            }
            catch (err) {
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    resp_edit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idpre } = req.params;
            var sql = "SELECT Respuestas.idRespuesta, Respuestas.Respuesta, Respuestas.Letra, Respuestas.idPregunta,\
  (select count(Respuesta_Correcta.idRespuesta) from Respuesta_Correcta\
  where Respuesta_Correcta.idRespuesta = Respuestas.idRespuesta and\
  Respuesta_Correcta.idPregunta = Respuestas.idPregunta) as idcorrecta\
  FROM Respuestas WHERE Respuestas.idPregunta = ? ORDER BY Respuestas.Letra ASC;";
            try {
                const result = yield databaseconect_1.default.query(sql, [idpre]);
                //res.json({ status: 1, message: 'usuario ingresado' });
                res.json(result);
            }
            catch (err) {
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    /////agregando Pregunta nueva
    addPregunta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Pregunta, idEncuesta, respu_list } = req.body;
            var sql = "INSERT INTO Pregunta (Pregunta, idEncuesta) VALUES\
         (?, ?)";
            try {
                const result = yield databaseconect_1.default.query(sql, [Pregunta, idEncuesta]);
                console.log("result", result.insertId);
                var sql_fron = "INSERT INTO Respuestas (Respuesta, Letra, idPregunta) VALUES\
         (?, ?, ?)";
                for (var i = 0; i < respu_list.length; i++) {
                    //console.log(respu_list[i])
                    const res_fron = yield databaseconect_1.default.query(sql_fron, [respu_list[i].Respuesta, respu_list[i].Letra, result.insertId]);
                }
                res.status(200).json('Pregunta nueva agregada');
            }
            catch (err) {
                yield databaseconect_1.default.query('rollback;');
                console.log(err.sqlMessage);
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    addInvento_inventa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idInvento, idInventor } = req.body;
            var sql = "INSERT INTO Inventados (idInvento, idInventor) VALUES\
       (?, ?)";
            try {
                const result = yield databaseconect_1.default.query(sql, [idInvento, idInventor]);
                res.status(200).json('Inventor agregado a Invento');
            }
            catch (err) {
                yield databaseconect_1.default.query('rollback;');
                console.log(err.sqlMessage);
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    deleteInvento_inventa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idInvento, idInventor } = req.body;
            var sql = "DELETE FROM Inventados WHERE idInvento = ? AND idInventor = ?";
            try {
                const result = yield databaseconect_1.default.query(sql, [idInvento, idInventor]);
                res.status(200).json('Inventor eliminado a Invento');
            }
            catch (err) {
                yield databaseconect_1.default.query('rollback;');
                console.log(err.sqlMessage);
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    /////actualizo pregunta
    upPregunta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Pregunta, idEncuesta, idPregunta } = req.body;
            var sql = "UPDATE Pregunta SET Pregunta = ?, idEncuesta = ?\
        WHERE idPregunta = ?";
            try {
                const result = yield databaseconect_1.default.query(sql, [Pregunta, idEncuesta, idPregunta]);
                // res.status(200).json({ status: 1, message: 'usuario ingresado' });
                res.status(200).json('Pregunta Actualizada');
            }
            catch (err) {
                //res.status(404).json({ status: -1, error: err.sqlMessage });
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    /////actualizo invento
    upInvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Nombre, AnioInvento, idInvento } = req.body;
            var sql = "UPDATE Invento SET Nombre = ?, AnioInvento = ?\
      WHERE idInvento = ?";
            try {
                const result = yield databaseconect_1.default.query(sql, [Nombre, AnioInvento, idInvento]);
                // res.status(200).json({ status: 1, message: 'usuario ingresado' });
                res.status(200).json('Invento Actualizado');
            }
            catch (err) {
                //res.status(404).json({ status: -1, error: err.sqlMessage });
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
    /////eliminar Pregunta
    delPregunta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idpreg } = req.params;
            var sqlres = "DELETE FROM Respuestas\
        WHERE idPregunta = ?";
            var sqlrescor = "DELETE FROM Respuesta_Correcta\
        WHERE idPregunta = ?";
            var sql = "DELETE FROM Pregunta\
        WHERE idPregunta = ?";
            try {
                const result1 = yield databaseconect_1.default.query(sqlres, [idpreg]);
                const result2 = yield databaseconect_1.default.query(sqlrescor, [idpreg]);
                const result = yield databaseconect_1.default.query(sql, [idpreg]);
                res.status(200).json('Pregunta Eliminada');
            }
            catch (err) {
                //res.status(404).json({ status: -1, error: err.sqlMessage });
                res.status(404).json(err.sqlMessage);
                // handle errors here
            }
        });
    }
}
const catController = new catalogController;
exports.default = catController;
