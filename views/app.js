const express = require('express')

const app = express

app.get('/', (res,res)=>{
  res.send('<h1>Home</h1>')
})

app.listen(3000)
