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

export { isString };
