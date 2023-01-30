import express from 'express';
const app = express();
const port = 3000;

app.get('/greet', (req, res) =>{
  res.json({
    word: 'Hello'
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
