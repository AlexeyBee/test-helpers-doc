/**
 * @summary Supported types
 * @type String[]
 * @constant
 * @private
 */
const VALID_TYPES = ['string', 'number', 'boolean']

/**
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
 */
const split = (string, delimiter = ' ') => string.split(delimiter)

export { VALID_TYPES, split }
