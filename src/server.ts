import express, { Application } from 'express';
import morgan from 'morgan';
import { resolve as pathResolve } from 'path';

/* ROUTES */
import conceptsRoutes from './routes/concepts.routes';

class Server {
  private app: Application;
  private static PORT: number;
  private static NODE_ENV: string | undefined;
  private static PATH_STATIC: string;

  public constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  private settings(): void {
    Server.PORT = Number(process.env.PORT) || 3000;
    Server.NODE_ENV = process.env.NODE_ENV;
    Server.PATH_STATIC = pathResolve('public');
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    Server.NODE_ENV === 'development' ? this.app.use(morgan('dev')) : null;
    this.app.use(express.static(Server.PATH_STATIC));
  }

  private routes(): void {
    this.app.use('/api', conceptsRoutes);
  }

  public async start(port: number = Server.PORT): Promise<void> {
    await this.app.listen(port);
    console.log(`>> Server OK - listening at port: ${port}`);
  }
}

export default new Server;
