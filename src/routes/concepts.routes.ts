import { Router, Request, Response } from 'express';

const router = Router();

router.post('/concepts', (req: Request, resp: Response): void => {
    // create
});

router.get('/concepts', (req: Request, resp: Response): void => {
    // get all
    resp.status(200).json({
        status: 200,
        data: {
            message: '/api/concepts'
        }
    })
});

router.get('/concepts/:id', (req: Request, resp: Response): void => {
    // get one
});

router.put('/concepts/:id', (req: Request, resp: Response): void => {
    // update
});

router.delete('/concepts/:id', (req: Request, resp: Response): void => {
    // delete
});

export default router;
