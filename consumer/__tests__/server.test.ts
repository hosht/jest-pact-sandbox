import { getData } from "../src/hello";

describe('hello', () => {
  test('fetch provider api', async () => {
    const data = await getData()
    expect(data).toEqual({"word": "Hello"})
  })
})
