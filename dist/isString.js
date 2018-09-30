'use strict';Object.defineProperty(exports,'__esModule',{value:!0});/**
 * @summary Check if a variable is a string
 * @function
 * @private
 *
 * @param {*} x - variable
 * @returns {Boolean} whether the variable is a string
 *
 * @example
 * if (isString('foo')) {
 *   console.log('The variable is a string')
 * }
 */var isString=function(a){return'string'==typeof a||a instanceof String};exports.default=isString;