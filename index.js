const express = require('express')
const app = express()





app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })


app.use((req,res,next)=>{
    let currentTime = new Date()
    if(currentTime.getHours()>=8 && currentTime.getHours()<=17) next()
    else res.send('<h1>Sorry we are only open from 8am to 5pm</h1>')
})
app.use(express.static(__dirname+'/public'))

app.listen(3001, (err) => {err ? console.log(err) :console.log(`Server running on port 3001`)})