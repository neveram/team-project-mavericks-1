import express from "express";
import FlightController from "../controllers/flightController.js";
const router = express.Router();

/// server/flight/new
router.post('/new', FlightController.addFlight);
router.get('/list/all', FlightController.getFlight);
router.get('/list/airline', FlightController.getFlightBasedOnAirline);
router.get('/list', FlightController.getFlightListBasedOnTimeAndStatus);

export default router;

