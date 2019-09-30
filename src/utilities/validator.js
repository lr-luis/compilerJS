/**
 * @module src/utilities/validator
 * @description Módulo que se encarga de validar los parámetros de entrada del cli.
 * @version 1.0
 * <pre>
 * Integrantes:
 *  Leonardo Arellano Martínez
 *  Francisco Santos Montoya
 * </pre>
 */
const fs = require('fs');
const chalk = require('chalk');

/**
 * @function validateArgv
 * @name module:src/utilities/validator#validateArgv
 * @description Función que se encarga de verificar que el archivo fuente sea aceptado por nuestro compilador.
 * @returns {Boolean} Valor que indica si el archivo es valido o no.
 */
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