import { Request, Response, NextFunction } from 'express';
import interpretError from '../utils/interpretError';

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  // Express Handler
  if (res.headersSent) return next(error);

  // App Handler
  res.status(req.statusCode || 500);
  res.json({
    error: {
      name: error.name,
      message: interpretError(error.message)
    }
  });
}

export default errorHandler;
