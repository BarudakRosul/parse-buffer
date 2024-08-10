/**
 * Parses a string representation of a Buffer object back into an actual Buffer.
 *
 * @param {string | Buffer} buffer - The input string of a Buffer to be parse.
 * @returns {Buffer} - The Buffer object.
 */
function parseBuffer(buffer) {
  if (buffer instanceof Buffer) {
    return buffer;
  }
  if (!(buffer.startsWith("<Buffer") && buffer.endsWith(">"))) {
    throw new Error("string is not Buffer format");
  }

  const hexValues = buffer.replace(/<Buffer|>/g, "").split(" ").filter(Boolean);
  const bufferArray = hexValues.map(hex => parseInt(hex, 16));
  return Buffer.from(bufferArray);
}

// Exports module
module.exports = parseBuffer;
