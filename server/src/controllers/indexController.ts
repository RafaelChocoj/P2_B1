import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        res.json({text: 'API index is in /'});
    }

}

export const indexController = new IndexController;