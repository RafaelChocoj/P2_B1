"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CatalogoControllers_1 = __importDefault(require("../controllers/CatalogoControllers"));
class catRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //this.router.post('/addCurso',verifyToken, publicController.winCurso);
        this.router.post('/Login', CatalogoControllers_1.default.loguin);
        //CRUD de Pais
        this.router.get('/getPaises', CatalogoControllers_1.default.listpais);
        this.router.get('/getRegiones', CatalogoControllers_1.default.regiones);
        this.router.get('/getPreguntas', CatalogoControllers_1.default.listpregun);
        this.router.post('/addPais', CatalogoControllers_1.default.addPais);
        this.router.delete('/delPais/:idpais', CatalogoControllers_1.default.delPais);
        this.router.get('/editPais/:idpais', CatalogoControllers_1.default.paisedit);
        this.router.put('/upPais', CatalogoControllers_1.default.upPais);
        this.router.get('/editFron/:idpais', CatalogoControllers_1.default.fron_edit);
        this.router.post('/FrontDelete', CatalogoControllers_1.default.delFront);
        this.router.post('/addFronEdit', CatalogoControllers_1.default.addFront);
        //CRUD de Pregunta
        this.router.get('/getEncuesta', CatalogoControllers_1.default.encuestas);
        this.router.get('/editPreg/:idpre', CatalogoControllers_1.default.preguntedit);
        this.router.get('/editRespu/:idpre', CatalogoControllers_1.default.resp_edit);
        this.router.post('/RespuDelete', CatalogoControllers_1.default.delResp);
        this.router.post('/addPregunEdit', CatalogoControllers_1.default.addRespuesta);
        this.router.post('/addcorrecta', CatalogoControllers_1.default.addResCorrect);
        this.router.post('/quitcorrecta', CatalogoControllers_1.default.quitResCorrect);
        this.router.post('/addPregunta', CatalogoControllers_1.default.addPregunta);
        this.router.delete('/delPregunta/:idpreg', CatalogoControllers_1.default.delPregunta);
        this.router.put('/upPregunta', CatalogoControllers_1.default.upPregunta);
        this.router.get('/getInventos', CatalogoControllers_1.default.listInventos);
        this.router.get('/editInven/:idinv', CatalogoControllers_1.default.editInventos);
        this.router.get('/egInventores/:idinv', CatalogoControllers_1.default.g_edInventores);
        this.router.get('/getInventores', CatalogoControllers_1.default.listinventores);
        this.router.post('/addInventados', CatalogoControllers_1.default.addInvento_inventa);
        this.router.post('/InventadosDelete', CatalogoControllers_1.default.deleteInvento_inventa);
        this.router.put('/upInvento', CatalogoControllers_1.default.upInvento);
    }
}
exports.default = new catRoutes().router;
