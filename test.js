const assert = require("assert");
const parseBuffer = require("./index");

describe("Testing parseBuffer() function", function() {
  it("should correctly parse a valid Buffer string into a Buffer object", function() {
    const str = "<Buffer 48 65 6c 6c 6f 2c 20 77 6f 72 6c 64 21>";
    const buffer = parseBuffer(str);
    assert(buffer instanceof Buffer, "Result is not an instance of Buffer");

    const expectedBuffer = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
    assert.deepStrictEqual(buffer, expectedBuffer, "Buffer content does not match expected value");
  });

  it("should throw an error if the string is not in the correct Buffer format", function() {
    const invalidStr = "Not a buffer string";
    assert.throws(() => {
      parseBuffer(invalidStr);
    }, {
      name: "Error",
      message: "string is not Buffer format"
    }, "Did not throw the expected error for invalid format");
  });

  it("should handle an empty Buffer string", function() {
    const str = "<Buffer >";
    const buffer = parseBuffer(str);

    assert.strictEqual(buffer.length, 0, "Buffer is not empty");
  });

  it("should parse a Buffer string with a single byte", function() {
    const str = "<Buffer ff>";
    const buffer = parseBuffer(str);

    const expectedBuffer = Buffer.from([0xff]);
    assert.deepStrictEqual(buffer, expectedBuffer, "Buffer content does not match expected single byte");
  });

  it("should parse a Buffer string with multiple spaces between bytes", function() {
    const str = "<Buffer 48  65   6c 6c  6f>";
    const buffer = parseBuffer(str);

    const expectedBuffer = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f]);
    assert.deepStrictEqual(buffer, expectedBuffer, "Buffer content does not match expected value with extra spaces");
  });
});
