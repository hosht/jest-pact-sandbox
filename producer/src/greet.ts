import express from 'express';
const app = express();

export default app.get('/greet', (req, res) =>{
  res.json({
    word: 'Hello'
  });
});
