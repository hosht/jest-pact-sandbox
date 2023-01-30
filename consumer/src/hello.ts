import express from 'express';
const hello = express();

export function getData(url: string) {
  return fetch(`${url}/greet`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
}

export default hello.get('/', (req, res, next) => {
  (async() => {
    const data = await getData('http://localhost:3000')
    data.word = 'Hi'
    res.json(data)
  })().catch(next)
});
