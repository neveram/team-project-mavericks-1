import BagCarouselService from "../services/bagCarouselService.js";
import {sendCustomSuccess, sendInternalServerError} from './common.js';

class BagCarouselController {
    addBagCarousel = async (req, res) => {
        const serviceResponse = await BagCarouselService.addBagCarousel(req.body);
        if(serviceResponse.success ===  true){
            sendCustomSuccess(res, serviceResponse.data);
        }
        else{
            sendInternalServerError(res);
        }
    }
    getBagCarousel = async (req, res) => {
        const serviceResponse = await BagCarouselService.getBagCarouselList(req.body);
        if(serviceResponse.success ===  true){
            sendCustomSuccess(res, serviceResponse.data);
        }
        else{
            sendInternalServerError(res);
        }
    }
    // getBagCarouselBasedOnTerminal = async(req, res) => {
    //     const serviceResponse = await GateService.getBagCarouselBasedOnTerminal(req.query);
    //     if(serviceResponse.success == true){
    //         sendCustomSuccess(res, serviceResponse.data);
    //     }
    //     else{
    //         sendInternalServerError(res);
    //     }
    // }
}

export default new BagCarouselController();