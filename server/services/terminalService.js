import {connection} from  '../index.js';
import {parseRowDataPacket} from './parsingService.js';

class TerminalService {
    addTerminal = async (terminal) => {
        try{
            const {
                id: terminal_id,
                terminal: terminal_number, 
                airport : airport,
                status,
            } = terminal;

            let terminalUpdateQuery = `UPDATE terminal SET
            terminal = '${terminal_number}',
            airport = '${airport}',
            status = '${status}'
            WHERE id = '${terminal_id}';
            `;
            let terminalAddQuery = `INSERT INTO terminal (
                terminal,
                airport,
                status) VALUES ('${terminal_number}', '${airport}', '${status}' )
            `;
            if(terminal_id){ //update
                let getTerminalByIdQuery = `SELECT * FROM terminal WHERE id = ${terminal_id};`;
                    const response = await connection.query(terminalUpdateQuery);
                    const insertedObject = await connection.query(getTerminalByIdQuery);
                    const result = parseRowDataPacket(insertedObject);
            
                    return {
                    success: true,
                    data: result[0]
                    };
                }
                else{ //add
                    console.log("terminal_number",terminalAddQuery);
                    const response = await connection.query(terminalAddQuery);
                    let getTerminalByIdQuery = `SELECT * FROM terminal WHERE id = ${response.insertId};`;
                    const insertedObject = await connection.query(getTerminalByIdQuery);
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
    getTerminalList = async () =>{ 
        const getProjectsBasedOnId = `SELECT * FROM terminal`;
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
      getTerminalDetailsById = async ({id: terminal_id}) => {
        try{
          const getTerminalDetailsByIdQuery = `select * from terminal where id = ${terminal_id};`
          const response = await connection.query(getTerminalDetailsByIdQuery);
          console.log("fetch terminal",getTerminalDetailsByIdQuery);
          const parsedResponse = parseRowDataPacket(response);
  
          return{
            success: true,
            data: parsedResponse
          }
        }
        catch(e){
          console.log(e);
          return {
            success: false, 
            message: e.message
          }
        }
      }


      
}


export default new TerminalService();