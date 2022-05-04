const { add } = require("./index")

test("add returns a sum of two integers", () => {
    const sum = add(10, 3)
    expect(sum).toBe(13)
})