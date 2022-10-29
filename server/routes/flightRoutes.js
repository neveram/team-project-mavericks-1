import express from "express";
import FlightController from "../controllers/flightController.js";
const router = express.Router();

router.post('/new', FlightController.addProject);


export default router;

