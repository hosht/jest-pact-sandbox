import express from 'express';
const hello = express();

export function getData() {
  return fetch('http://localhost:3000/greet', {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
}

export default hello.get('/', (req, res, next) => {
  (async() => {
    const data = await getData()
    data.word = 'Hi'
    res.json(data)
  })().catch(next)
});
