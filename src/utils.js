/**
 * @summary Supported types
 * @type String[]
 * @constant
 * @private
 */
const VALID_TYPES = [
  'string',
  'number',
  'boolean'
];

/**
 * @summary Sum two numbers
 * @function
 * @public
 *
 * @param {Number} x - first number
 * @param {Number} y - second number
 * @returns {Number} the sum of the two numbers
 *
 * @example
 * const result = math.sum(5, 3);
 * console.log(result);
 * > 8
 */
const sum = (x, y) => x + y;

/**
 * @summary Check if a variable is a string
 * @function
 * @private
 *
 * @param {*} x - variable
 * @returns {Boolean} whether the variable is a string
 *
 * @example
 * if (isString('foo')) {
 *   console.log('The variable is a string');
 * }
 */
const isString = x => (typeof x === 'string' || x instanceof String);

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
 * const result = utils.split('foo bar baz');
 * console.log(result);
 * > [ 'foo', 'bar', 'baz' ]
 *
 * @example
 * const result = utils.split('hello_world', '_');
 * console.log(result);
 * > [ 'hello', 'world' ]
 */
const split = (string, delimiter = ' ') => string.split(delimiter);

export {
  VALID_TYPES,
  sum,
  isString,
  split,
};
