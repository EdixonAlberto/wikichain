import { Response } from 'express';

export const ok = (res: Response, json: object) => {
  res.status(200);
  res.json({
    response: 'successfull',
    data: json
  });
}

export const notFound = (res: Response, id?: string) => {
  res.status(404);
  res.json({
    response: 'not found',
    details: id ? `resourse '${id}' not found` : 'not exist resources'
  });
}
