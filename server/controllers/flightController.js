import FlightService from "../services/flightService.js";
import {sendCustomSuccess, sendInternalServerError} from './common.js';

class FlightController {
    addProject = async (req, res) => {
        const serviceResponse = await FlightService.addFlight(req.body);
        if(serviceResponse.success ===  true){
            sendCustomSuccess(res, serviceResponse.data);
        }
        else{
            sendInternalServerError(res);
        }
    }
}

export default new FlightController();