/**
 * @module Repositorio
 * @description Estructura del proyecto
 * @version 1.0
 */

/**
 * @name module:Repositorio
 * @description Información acerca de los directorios que conforman la estructura del repositorio.
 * @property {Folder} src Carpeta de Archivos fuente relacionado con el código del compilador.
 * @property {Folder} src.backend Carpeta que contiene los módulos que se encargan del back-end del compilador.
 * @property {Folder} src.frontend Carpeta que contiene los módulos que se encargan del front-end del compilador.
 * @property {Folder} src.utilities Carpeta que contiene módulos que sirven como utilidades y seran ocupados por más de un componente del proyecto.
 * 
 * @property {Folder} documentation Carpeta de recursos para la generación de la documentación técnica del proyecto.
 * @property {Folder} documentation.references Carpeta de Archivos fuente de documentación que será integrada a la documentación de archivos de código fuente
 * @property {File} documentation.references.repository (ESTE DOCUMENTO) Archivo fuente de documentación de la estructura del Repositorio del proyecto.
 * @property {Script} documentation.generar_docs.sh - Shell script que automatiza la generación de documentación con JSDOC en la carpeta 'html'
 * @property {File} documentation.jsdoc.conf.json - Archivo de configuración de JSDOC
 */