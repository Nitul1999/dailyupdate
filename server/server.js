const express = require('express')
const mongoose = require('mongoose')

const worksroute = require('./routes/workout')



const app = express() /// express app
const port = process.env.PORT ||1000 // port number

//middleware
app.use(express.json())


app.use('/api/works',worksroute) // use workout routes

// database connection 

const url ="mongodb+srv://nitulsonowal8133:nitul1234@myapp.j4jbawq.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url)
    .then(()=>{
        //listen for requests
            app.listen(port,()=>{
                console.log(`app listen on port ${port}`)
            })

    })
    .catch((error) =>{
        console.log(error)
    })

