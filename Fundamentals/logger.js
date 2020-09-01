const {
    createLogger,
    transports,
    format
} = require('winston');

//const winston = require('winston');

const logger = createLogger({
    transports: [
        new transports.File({
            filename: 'logginglogs.log',
            level:'info',
            format: format.combine(format.timestamp(), format.simple()),
        }),
        new transports.Console({
            level:'info',
            format: format.combine(format.timestamp(), format.simple())
        })
    ],
    //exitOnError: false
});

module.exports = logger;