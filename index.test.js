const { cattryP, cattry } = require("./")

test("test with cattryP", async function() {
  const [err, result] = await cattryP(
    new Promise(function(resolve, reject) {
      /* missing implementation */
      resolve("Hello World")
    })
  )

  expect(result).toBe("Hello World")
})

test("test with cattryP", async function() {
  const [err, result] = cattry(() => {
    throw new Error("has Error")
  })

  expect(err).toBe("[Error: has Error]")
})
