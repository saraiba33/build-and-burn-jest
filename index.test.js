const { add } = require("./index")

test("add returns a sum of two numbers", () => {
    const sum = add(5, 5)
    expect(sum).toBe(10)
})