//SJSU CMPE 138 Spring 2022 TEAM3 

import express from 'express';
import cors from  'cors';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import util from 'util';
// const { createLogger, format, transports } = require('winston');


import testRouter from './routes/testRoutes.js';
import flightRouter from './routes/flightRoutes.js';
import terminalRouter from './routes/terminalRoutes.js';
import gateRouter from './routes/gateRoutes.js'
import userRouter from './routes/userRoutes.js';

const port = 5001;
const corsConfig = {
  credentials: true,
  origin: true,
};


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})

export const connection = mysql.createConnection({
  host     : 'mavericksdatabase.cqpn9b5pnb1l.us-west-1.rds.amazonaws.com',
  port     : 3306,
  user     : 'admin',
  password : 'admin1234',
  database : "mavericksdatabase"
});


// export const logger = winston.createLogger({
//   transports:
//       new transports.File({
//       filename: 'logs/server.log',
//       format:format.combine(
//           format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
//           format.align(),
//           format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
//       )}),
//   });
  
// export const db = makeDb();
// const no = db.connect(connection).then(() => {console.log('connected as id ' + connection.threadId);})
//   .catch(e=>{console.error('error connecting: ' + err.stack);});


 
connection.connect((err) =>{
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

connection.query = util.promisify(connection.query).bind(connection);



//Primary Routes
app.use('/test', testRouter);
app.use('/flight', flightRouter);
app.use('/terminal', terminalRouter);
app.use('/gate', gateRouter);
app.use('/user', userRouter);
