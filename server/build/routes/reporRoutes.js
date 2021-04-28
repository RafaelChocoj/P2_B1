"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportsControllers_1 = __importDefault(require("../controllers/reportsControllers"));
class RepRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', reportsControllers_1.default.index);
        //this.router.post('/', usersController.createUser);
        this.router.get('/pais', reportsControllers_1.default.listpais);
        this.router.get('/r1', reportsControllers_1.default.rep1);
        this.router.get('/r2', reportsControllers_1.default.rep2);
        this.router.get('/r3', reportsControllers_1.default.rep3);
        this.router.get('/r4', reportsControllers_1.default.rep4);
        this.router.get('/r5', reportsControllers_1.default.rep5);
        this.router.get('/r6', reportsControllers_1.default.rep6);
        this.router.get('/r7', reportsControllers_1.default.rep7);
        this.router.get('/r8', reportsControllers_1.default.rep8);
        this.router.get('/r9', reportsControllers_1.default.rep9);
        this.router.get('/r10', reportsControllers_1.default.rep10);
        this.router.get('/r11', reportsControllers_1.default.rep11);
        this.router.get('/r12', reportsControllers_1.default.rep12);
        this.router.get('/r13', reportsControllers_1.default.rep13);
        this.router.get('/r14', reportsControllers_1.default.rep14);
        this.router.get('/r15', reportsControllers_1.default.rep15);
        this.router.get('/r16', reportsControllers_1.default.rep16);
        this.router.get('/r17', reportsControllers_1.default.rep17);
        this.router.get('/r18', reportsControllers_1.default.rep18);
        this.router.get('/r19', reportsControllers_1.default.rep19);
        this.router.get('/r20', reportsControllers_1.default.rep20);
        /*this.router.post('/Recuperar', usersController.recuperar);

        this.router.get('/getMyProfile', verifyToken, usersController.getProfile);
        this.router.get('/getMyProfile_id/:iduser', usersController.getProfile_id);

        this.router.put('/UpdateUser', verifyToken, usersController.upUser);*/
    }
}
exports.default = new RepRoutes().router;
