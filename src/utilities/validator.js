const fs = require('fs');
const chalk = require('chalk');

function validateArgv() {
    let isValidInput = true;
    if (typeof fileValue === 'undefined') {
        console.log(chalk.red('error:') + ' sin archivos de entrada');
        return false;
    }
    
    if (!/([a-zA-Z0-9\s_\\.\-\(\):])+(.rf)$/.test(fileValue)) {
        console.log(chalk.yellow('advertencia:') +
            ' ignorando el archivo ' + 
            chalk.cyan(fileValue) + 
            ', el archivo contiene un formato no compatible');
        isValidInput = false;
    }

    if (!fs.existsSync(fileValue)) {
        console.log(chalk.red('error:') + ' el archivo o directorio no existe ' +  chalk.cyan(fileValue));
        isValidInput = false;
    }
    return isValidInput;
};

module.exports = {
    validateArgv
}