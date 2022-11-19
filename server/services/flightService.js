import {connection} from  '../index.js';
import {parseRowDataPacket} from './parsingService.js';


class FlightService {
    addFlight = async (flight) => {
        try{
        const {
            id: flight_id,
            flightNumber: flight_number, 
            airlineId: airline_id, 
            status,
            source,
            destination,
            timeOfFlight : time_of_flight
        } = flight;
    
        let flightUpdateQuery = `UPDATE flight SET
            flight_number = '${flight_number}',
            airline_id = '${airline_id}',
            status = '${status}',
            destination = '${destination}',
            status = '${status}'
            WHERE flgiht_id = '${flight_id}';
        `;
        let flightAddQuery = `INSERT INTO flight (
            id,
            flight_number,
            airline_id,
            status,
            source,
            destination,
            time_of_flight) VALUES (${null}, '${flight_number}', '${airline_id}', '${status}', '${source}', '${destination}', '${time_of_flight}' )
        `;
    
        if(flight_id){ //update
        let getFlightByIdQuery = `SELECT * FROM flight WHERE id = ${flight_id};`;
            const response = await connection.query(flightUpdateQuery);
            const insertedObject = await connection.query(getFlightByIdQuery);
            const result = parseRowDataPacket(insertedObject);
    
            return {
            success: true,
            data: result[0]
            };
        }
        else{ //add
            const response = await connection.query(flightAddQuery);
            let getFlightByIdQuery = `SELECT * FROM flight WHERE id = ${response.insertId};`;
            const insertedObject = await connection.query(getFlightByIdQuery);
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
    getFlightList = async () =>{ 
      const getProjectsBasedOnId = `SELECT * FROM flight`;
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
    
    getFlightListBasedOnAirline = async ({airlineId}) => {
      const getFlightListBasedOnAirlineQuery = `select flight_number, status, source, destination, a.name as airline, time_of_flight  from 
      flight as f inner join airline as a on f.airline_id = a.id where a.id = ${airlineId} and time_of_flight > current_timestamp();`

      try{
        const response = await connection.query(getFlightListBasedOnAirlineQuery);
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

export default new FlightService();