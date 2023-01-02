import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const app = express()
mongoose.set('strictQuery', true);


mongoose
  .connect('mongodb+srv://admin:ww123@cluster0.ufaxtpl.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('DB i win ok!!!'))
  .catch((err) => console.log('An error has occurred /!!!/', err))

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello Node!!')
})

app.post('/auth/login', (req, res) => {
  console.log(req.body)

  if (req.body.email === 'test2@test2.ru') {

  }

  const token = jwt.sign(
    {
      email: req.body.email,
      fullName: req.body.fullName
    },
    'secret123'
  )

  res.json(
    {
      success: true,
      token,
    }
  )
})

app.listen(3001, (err) => {
  if (err) {
    return console.log(err.massage)
  }
  console.log('Server started in port 3001')
})