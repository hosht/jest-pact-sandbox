import { getData } from '../src/hello'
import { PactV3, MatchersV3 } from '@pact-foundation/pact'
import * as path from 'path'

const provider = new PactV3({
  dir: path.resolve(process.cwd(), 'pacts'),
  consumer: 'MyConsumer',
  provider: 'MyProvider',
});

const helloResponse = {"word": "Hello"}
const EXPECTED_BODY = MatchersV3.like(helloResponse)

describe('GET /greet', () => {
  test('returns an HTTP 200 and hello', () => {
    provider
      .given('I have a word for greeting')
      .uponReceiving('a request to say greeting')
      .withRequest({
        method: 'GET',
        path: '/greet',
      })
      .willRespondWith({
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: EXPECTED_BODY,
      })

    return provider.executeTest( async (mockServer) => {
      const response = await getData(mockServer.url)

      expect(response).toEqual(helloResponse)
    })
  })
})
