import { Router } from "express";
import { getAll, insertClothe, getOne, updateProduct, deleteProduct } from '../controllers/clothes.controller.js';

const router = Router();

// Rutas sin un prefijo específico
router.get('/', getAll);
router.get('/:barcode', getOne);
router.post('/', insertProduct);
router.post('/:barcode', updateProduct);
router.get('/De/:barcode', deleteProduct);

export default router;
