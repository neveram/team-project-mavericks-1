import {connection} from  '../index.js';
import {parseRowDataPacket} from './parsingService.js';

class BagCarouselService {
    addBagCarousel = async (BagCarousel) => {
        try{
            const {
                id: carousel_id,
                carousel: carousel_number, 
                gate : gate_number,
                status,
            } = BagCarousel;

            let bagCarouselUpdateQuery = `UPDATE carousel SET
            ${carousel_number?`carousel_number= '${carousel_number}',`:""}
            ${gate_number?`gate = '${gate_number}',`:""}
            ${status?`status = '${status}'`:""}
            WHERE id = '${carousel_id}'
            `;
            let bagCarouselAddQuery = `INSERT INTO carousel (
                carousel_number,
                gate,
                status) VALUES ('${carousel_number}', '${gate_number}', '${status}' )
            `;
            if(carousel_id){ //update
                let getBagCarouselByIdQuery = `SELECT * FROM carousel WHERE id = ${carousel_id};`;
                    const response = await connection.query(bagCarouselUpdateQuery);
                    const insertedObject = await connection.query(getBagCarouselByIdQuery);
                    const result = parseRowDataPacket(insertedObject);
            
                    return {
                    success: true,
                    data: result[0]
                    };
                }
                else{ //add
                    const response = await connection.query(bagCarouselAddQuery);
                    let getBagCarouselByIdQuery = `SELECT * FROM carousel WHERE id = ${response.insertId};`;
                    const insertedObject = await connection.query(getBagCarouselByIdQuery);
                    const result = parseRowDataPacket(insertedObject);
                    return {
                    success: true,
                    data: result[0]
                    };
                }
        }
        catch(e){
        console.log(e);
        return {
            success: false,
            message:  e.message
        }
        }

    }
    getBagCarouselList = async () =>{ 
        const getProjectsBasedOnId = `SELECT * FROM carousel`;
        try{
          const response = await  connection.query(getProjectsBasedOnId);
          const parsedResponse = parseRowDataPacket(response);
      
          return{
            success: true,
            data: parsedResponse
          }
        }
        catch(e){
          console.log(e);
          return{
            success: false,
            message: e.message
          }
        }
      }

    //   getBagCarouselBasedOnTerminal = async ({terminal_number}) => {
    //     const getGateListBasedOnTerminalQuery = `select t.terminal as terminal,gate,g.status as status  from 
    //     gate as g inner join terminal as t on g.terminal = t.id where t.id = ${terminal_number};`
  
    //     try{
    //       const response = await connection.query(getBagCarouselListBasedOnTerminalQuery);
    //       const parsedResponse = parseRowDataPacket(response);
  
    //       return{
    //         success: true,
    //         data: parsedResponse
    //       }
    //     }
    //     catch(e){
    //       console.log(e);
    //       return{
    //         success: false,
    //         message: e.message
    //       }
    //     }
    //   }
}


export default new BagCarouselService();