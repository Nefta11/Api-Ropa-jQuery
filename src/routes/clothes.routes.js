import { Router } from "express";
import { getAll, insertClothe, getOne, updateClothe, deleteClothe } from '../controllers/clothes.controller.js';

const router = Router();

// Rutas sin un prefijo específico
router.get('/', getAll);
router.get('/:code', getOne);
router.post('/', insertClothe);
router.post('/:code', updateClothe);
router.get('/De/:barcode', deleteClothe);

export default router;
