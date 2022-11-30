import dayjs from "dayjs";
import { BACKEND_PORT, BACKEND_URL } from "./constants"

export const fetchFlightListService = async ({interval, status: flightStatus}) => {
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
      const response = await fetch(
        `${BACKEND_URL}:${BACKEND_PORT}/flight/list?interval=${interval}&status=${flightStatus}`, options);
      const status = response.status;
      const data = await response.json();
      return { status, data };
}

export const fetchFlightListForAirlineService = async (airlineId) => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }
  const response = await fetch(`${BACKEND_URL}:${BACKEND_PORT}/flight/list/airline?airlineId=${airlineId}`, options);
  const status = response.status;
  const data = await response.json();
  return { status, data };
}


export const addFlightService = async (flight) => {

  flight.time_of_flight = dayjs(flight.time_of_flight).format('MM/DD/YYYY HH:mm');
  console.log("In Service", flight);
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(flight)
  }
  const response = await fetch(`${BACKEND_URL}:${BACKEND_PORT}/flight/new`, options);
  const status = response.status;
  const data = await response.json();
  return {status, data};
}

export const fetchFlightDetailsService = async(flightId) => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json'},
  }
  const response = await fetch(`${BACKEND_URL}:${BACKEND_PORT}/flight/${flightId}`, options);
  const status = response.status;
  const data = await response.json();
  return {status, data};
}