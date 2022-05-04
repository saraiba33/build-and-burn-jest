const { divide } = require("./index")

test("divide returns a quotient of two integers", () => {
    const quotient = divide(20, 4)
    expect(quotient).toBe(5)
})