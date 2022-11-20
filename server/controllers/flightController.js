import FlightService from "../services/flightService.js";
import {sendCustomSuccess, sendInternalServerError} from './common.js';

class FlightController {
    addFlight = async (req, res) => {
        const serviceResponse = await FlightService.addFlight(req.body);
        if(serviceResponse.success ===  true){
            sendCustomSuccess(res, serviceResponse.data);
        }
        else{
            sendInternalServerError(res);
        }
    }
    getFlight = async (req, res) => {
        const serviceResponse = await FlightService.getFlightList(req.body);
        if(serviceResponse.success ===  true){
            sendCustomSuccess(res, serviceResponse.data);
        }
        else{
            sendInternalServerError(res);
        }
    }
    getFlightBasedOnAirline = async(req, res) => {
        const serviceResponse = await FlightService.getFlightListBasedOnAirline(req.query);
        if(serviceResponse.success == true){
            sendCustomSuccess(res, serviceResponse.data);
        }
        else{
            sendInternalServerError(res);
        }
    }
}

export default new FlightController();