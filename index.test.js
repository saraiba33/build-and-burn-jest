const { add } = require("./index")


test("add returns the sum of two integers", () => {
    const sum = add(1, 2)
    expect(sum).toBe(3)
})