"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_Routes_1 = __importDefault(require("./routes/index_Routes"));
const catalogRoutes_1 = __importDefault(require("./routes/catalogRoutes"));
const reporRoutes_1 = __importDefault(require("./routes/reporRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', index_Routes_1.default);
        this.app.use('/rep', reporRoutes_1.default);
        this.app.use('/cat', catalogRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('xd Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
