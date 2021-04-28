import express, { Router } from 'express';


import catalController from '../controllers/CatalogoControllers';

class catRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        //this.router.post('/addCurso',verifyToken, publicController.winCurso);

        //CRUD de Pais
        this.router.get('/getPaises', catalController.listpais);
        this.router.get('/getRegiones', catalController.regiones);

        this.router.get('/getPreguntas', catalController.listpregun);
        
        

        this.router.post('/addPais', catalController.addPais);
        this.router.delete('/delPais/:idpais', catalController.delPais);
        this.router.get('/editPais/:idpais', catalController.paisedit);
        this.router.put('/upPais', catalController.upPais);

        this.router.get('/editFron/:idpais', catalController.fron_edit);
        this.router.post('/FrontDelete', catalController.delFront);
        this.router.post('/addFronEdit', catalController.addFront);

        

        //CRUD de Pregunta
        this.router.get('/getEncuesta', catalController.encuestas);
        this.router.get('/editPreg/:idpre', catalController.preguntedit);
        this.router.get('/editRespu/:idpre', catalController.resp_edit);
        this.router.post('/RespuDelete', catalController.delResp);
        this.router.post('/addPregunEdit', catalController.addRespuesta);

        this.router.post('/addcorrecta', catalController.addResCorrect);
        this.router.post('/quitcorrecta', catalController.quitResCorrect);
        
        this.router.post('/addPregunta', catalController.addPregunta);
        this.router.delete('/delPregunta/:idpreg', catalController.delPregunta);
        this.router.put('/upPregunta', catalController.upPregunta);

        this.router.get('/getInventos', catalController.listInventos);
        this.router.get('/editInven/:idinv', catalController.editInventos);
        this.router.get('/egInventores/:idinv', catalController.g_edInventores);

        this.router.get('/getInventores', catalController.listinventores);

        this.router.post('/addInventados', catalController.addInvento_inventa);
        this.router.post('/InventadosDelete', catalController.deleteInvento_inventa);

        this.router.put('/upInvento', catalController.upInvento);
        

        
        
        
        
    }


}

export default new catRoutes().router;