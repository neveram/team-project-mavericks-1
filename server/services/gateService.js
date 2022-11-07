import {connection} from  '../index.js';
import {parseRowDataPacket} from './parsingService.js';

class GateService {
    addGate = async (gate) => {
        try{
            const {
                id: gate_id,
                terminal: terminal_number, 
                gate : gate_number,
                status,
            } = gate;

            let gateUpdateQuery = `UPDATE gate SET
            terminal = '${terminal_number}',
            gate = '${gate_number}',
            status = '${status}'
            WHERE id = '${gate_id}';
            `;
            let gateAddQuery = `INSERT INTO gate (
                terminal,
                gate,
                status) VALUES ('${terminal_number}', '${gate_number}', '${status}' )
            `;
            if(gate_id){ //update
                let getGateByIdQuery = `SELECT * FROM gate WHERE id = ${gate_id};`;
                    const response = await connection.query(gateUpdateQuery);
                    const insertedObject = await connection.query(getGateByIdQuery);
                    const result = parseRowDataPacket(insertedObject);
            
                    return {
                    success: true,
                    data: result[0]
                    };
                }
                else{ //add
                     console.log("terminal_number",gateAddQuery);
                    const response = await connection.query(gateAddQuery);
                    let getGateByIdQuery = `SELECT * FROM gate WHERE id = ${response.insertId};`;
                    const insertedObject = await connection.query(getGateByIdQuery);
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
    getGateList = async () =>{ 
        const getProjectsBasedOnId = `SELECT * FROM gate`;
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
}


export default new GateService();