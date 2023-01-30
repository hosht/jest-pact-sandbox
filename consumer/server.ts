import express from 'express';
const app = express();
const port = 4000;

function getData() {
  return fetch('http://localhost:3000/greet', {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
}

app.get('/', (req, res, next) => {
  (async() => {
    const data = await getData()
    data.word = 'Hi'
    res.json(data)
  })().catch(next)
});

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
