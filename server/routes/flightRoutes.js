import express from "express";
import FlightController from "../controllers/flightController.js";
const router = express.Router();

/// server/flight/new
router.post('/new', FlightController.addFlight);
router.get('/list', FlightController.getFlight);
router.get('/list/airline', FlightController.getFlightBasedOnAirline);

export default router;

