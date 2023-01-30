import { Verifier } from '@pact-foundation/pact'
import * as path from 'path'
import app from '../src/greet'

const server = app.listen(5000)

describe("Pact Verification", () => {
  test("validate the expectation of greet API", () => {
    const opts = {
      providerBaseUrl: "http://localhost:5000",
      provider: "MyProvider",
      pactUrls: [
        path.resolve(process.cwd(), "../consumer/pacts/MyConsumer-MyProvider.json")
      ]
    }

    return new Verifier(opts)
      .verifyProvider()
      .then(output => {
        console.log(output)
      }).finally(() => {
        server.close()
      })
  })
})
