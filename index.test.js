const { multiple } = require("./index")

test("add returns the sum of two numbers", () => {
    const product = multiple(4, 5)
    expect(product).toBe(20)
})