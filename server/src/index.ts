import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import index_Routes from './routes/index_Routes';
import catalogRoutes from './routes/catalogRoutes';
import repRoutes from './routes/reporRoutes';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', index_Routes);
        this.app.use('/rep', repRoutes);
        this.app.use('/cat', catalogRoutes);

    }


    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('xd Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();