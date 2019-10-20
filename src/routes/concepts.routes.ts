import { Router, Request, Response, NextFunction } from 'express';
import * as jsonResponse from '../utils/jsonResponse';
import Concept from '../models/Concept';
import { typeConcept } from '../@types';

/* API/CONCEPTS */
const router = Router();

router.post('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { title, info, img } = req.body as typeConcept;

  try {
    const concept_created = await Concept.create({ title, info, img }, {
      fields: ['title', 'info', 'img']
    });

    jsonResponse.ok(res, { concept_created });
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const concepts = await Concept.findAll({
      attributes: ['id', 'title', 'updatedAt'],
      order: [['title', 'ASC']]
    });

    if (concepts) jsonResponse.ok(res, { concepts });
    else jsonResponse.notFound(res);
  } catch (error) {
    next(error);
  }
});

router.get('/:title', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const title = req.params.title as string;

  try {
    const concept = await Concept.findOne({
      where: { title }
    });

    if (concept) jsonResponse.ok(res, { concept });
    else jsonResponse.notFound(res, title);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const id = req.params.id as string;
  const { title, info, img } = req.body as typeConcept;

  try {
    const count = await Concept.update({ title, info, img }, {
      where: { id }
    });

    if (count[0] > 0) {
      jsonResponse.ok(res, {
        concept_updated: { title, info, img }
      });
    } else jsonResponse.notFound(res, id);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const id = req.params.id as string;

  try {
    const count = await Concept.destroy({
      where: { id }
    });

    if (count > 0) jsonResponse.ok(res, { concept_deleted: id });
    else jsonResponse.notFound(res, id);
  } catch (error) {
    next(error);
  }
});

export default router;
