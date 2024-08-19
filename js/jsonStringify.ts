// https://leetcode.com/problems/convert-object-to-json-string/
/**
 * @param {null|boolean|number|string|Array|Object} object
 * @return {string}
 */
var jsonStringify = function(object) {
  if (['number', 'boolean', 'undefined'].includes(typeof object) || object === null) {
      return `${object}`;
  } else if (typeof object === "string") {
      return `"${object}"`
  } else if (Array.isArray(object)) {
      return `[${object.map(jsonStringify).join(',')}]`
  }

  return '{' + Object.entries(object).reduce((acc, [key,value]) => {
      return `${acc ? (acc + ',') : acc}"${key}":${jsonStringify(value)}`
  }, '') + '}';
};
