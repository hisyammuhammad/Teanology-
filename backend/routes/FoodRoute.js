import express from "express";
import {
  getFoods,
  getFoodById,
  createFood,
  updateFood,
  deleteFood
} from "../controllers/Foods.js";

const router = express.Router();

router.get('/foods', getFoods);
router.get('/foods/:id', getFoodById);
router.post('/foods', createFood);
router.patch('/foods/:id', updateFood);
router.delete('/foods/:id', deleteFood);

export default router;