import GateService from "../services/gateService.js";
import {sendCustomSuccess, sendInternalServerError} from './common.js';

class GateController {
    addGate = async (req, res) => {
        const serviceResponse = await GateService.addGate(req.body);
        if(serviceResponse.success ===  true){
            sendCustomSuccess(res, serviceResponse.data);
        }
        else{
            sendInternalServerError(res);
        }
    }
    getGate = async (req, res) => {
        const serviceResponse = await GateService.getGateList(req.body);
        if(serviceResponse.success ===  true){
            sendCustomSuccess(res, serviceResponse.data);
        }
        else{
            sendInternalServerError(res);
        }
    }
    getGateBasedOnTerminal = async(req, res) => {
        const serviceResponse = await GateService.getGateBasedOnTerminal(req.query);
        if(serviceResponse.success == true){
            sendCustomSuccess(res, serviceResponse.data);
        }
        else{
            sendInternalServerError(res);
        }
    }
}

export default new GateController();