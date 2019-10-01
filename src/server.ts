import express from 'express';
import path from 'path';

import apiRoutes from './routes';

class Server {
    private app: express.Application;
    private static PORT: number;

    public constructor() {
        this.app = express();
        this.settings();
        this.middleware();
        this.routes();
    }

    private settings() {
        Server.PORT = Number(process.env.PORT) || 4000;
        this.app.set('PUBLICT', path.join(__dirname, 'public'));
    }

    private middleware() {
        this.app.use(express.static(this.app.get('PUBLICT')));
    }

    private routes() {
        this.app.use('/api', apiRoutes);
    }

    public async start(port = Server.PORT): Promise<void> {
        await this.app.listen(port);
        console.log(`Server on port ${port}`);
    }
}

export default new Server;
