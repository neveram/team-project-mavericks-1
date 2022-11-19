import {connection} from  '../index.js';
import {parseRowDataPacket} from './parsingService.js';

class TerminalService {
    addTerminal = async (terminal) => {
        try{
            const {
                id: terminal_id,
                terminal: terminal, 
                gate: gate, 
                airport : airport
            } = terminal;

            let terminalUpdateQuery = `UPDATE terminal SET
            terminal = '${terminal}',
            gate = '${gate}',
            status = '${status}',
            airport = '${airport}',
            status = '${status}'
            WHERE terminal_id = '${terminal_id}';
            `;
            let terminalAddQuery = `INSERT INTO terminal (
                id,
                terminal_number,
                airport_id,
                status,
                source,
                destination,
                time_of_terminal) VALUES (${null}, '${terminal_number}', '${airport_id}', '${status}', '${source}', '${destination}', '${time_of_terminal}' )
            `;

        }
        catch(e){
        console.log(e);
        return {
            success: false,
            message:  e.message
        }
        }

    }
    
}


export default new TerminalService();