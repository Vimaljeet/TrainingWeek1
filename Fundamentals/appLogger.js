'use strict';
const logger = require("./logger");
function createA() {
    try {
        let a = 1000;
        let b = 13;
        var c = a/b;
        logger.info('Testing winston with logger, Value ' + c);
    }catch(e){
        logger.info(e);
    }
}
createA();