import express, { Router } from 'express';

import repController from '../controllers/reportsControllers';

class RepRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        
        this.router.get('/', repController.index);

        //this.router.post('/', usersController.createUser);
        this.router.get('/pais', repController.listpais);
        this.router.get('/r1', repController.rep1);
        this.router.get('/r2', repController.rep2);
        this.router.get('/r3', repController.rep3);
        this.router.get('/r4', repController.rep4);
        this.router.get('/r5', repController.rep5);
        this.router.get('/r6', repController.rep6);
        this.router.get('/r7', repController.rep7);
        this.router.get('/r8', repController.rep8);
        this.router.get('/r9', repController.rep9);
        this.router.get('/r10', repController.rep10);
        this.router.get('/r11', repController.rep11);
        this.router.get('/r12', repController.rep12);
        this.router.get('/r13', repController.rep13);
        this.router.get('/r14', repController.rep14);

        this.router.get('/r15', repController.rep15);
        this.router.get('/r16', repController.rep16);
        this.router.get('/r17', repController.rep17);
        this.router.get('/r18', repController.rep18);
        this.router.get('/r19', repController.rep19);
        this.router.get('/r20', repController.rep20);

        /*this.router.post('/Recuperar', usersController.recuperar);

        this.router.get('/getMyProfile', verifyToken, usersController.getProfile);
        this.router.get('/getMyProfile_id/:iduser', usersController.getProfile_id);

        this.router.put('/UpdateUser', verifyToken, usersController.upUser);*/

        

    }

}

export default new RepRoutes().router;
