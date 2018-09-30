'use strict';Object.defineProperty(exports,'__esModule',{value:!0});/**
 * @summary Supported types
 * @type String[]
 * @constant
 * @private
 */var VALID_TYPES=['string','number','boolean'],split=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:' ';return a.split(b)};/**
 * @summary Split a string
 * @function
 * @public
 *
 * @param {String} string - input string
 * @param {String} [delimiter=' '] - delimiter
 * @returns {String[]} splitted string
 *
 * @example
 * const result = split('foo bar baz');
 * console.log(result);
 * > [ 'foo', 'bar', 'baz' ]
 *
 * @example
 * const result = split('hello_world', '_');
 * console.log(result);
 * > [ 'hello', 'world' ]
 */exports.VALID_TYPES=VALID_TYPES,exports.split=split;