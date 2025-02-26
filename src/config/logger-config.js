import { createLogger,format,transports } from "winston";
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} : ${level}: ${message}`;
});


export const logger = createLogger({
  format: combine(
    timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
    myFormat
  ),
  transports: [new transports.Console(),
    new transports.File({filename:'combined.log'})
  ]
});