const express = require ('express')
const app = express()
const PORT = 3000
const termsRouter = require('./routes/terms')
const serverError = require('./middlewares/serverError')
const notFound = require('./middlewares/notFound ')
//Register the static assets midlleware
app.use(express.static('public'))
// Register the body parser  middleware
app.use(express.json())



//Server Listens on port 3000
app.listen(PORT, () =>{
    console.log(`Server listening on localhost:${PORT}`)
})


//Your first route here
app.get('/', (rep,res) =>{

    res.send(`Server Started`)
})


// register your terms router on a specifc path
app.use('/api/terms', termsRouter) // localhost:3000/api/terms


app.use(serverError)
app.use(notFound)


