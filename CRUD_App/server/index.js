const express = require('express')
const dbconnection = require('./db')

//express ois a web framework which is responsible for handle incoming request and response.

const app = express()
//app is an instance of express which we is used to define routes and middleware and handle incoming request and response.

const PORTNUMBER = 7000
//portnumber which server listens to

//app.listen is a method which is used to start the server and listen to incoming request on specified port number.
//the callback function is executed when the server is successfully started
app.listen(PORTNUMBER,()=>{
    console.log(`Server is running on port ${PORTNUMBER}`)
})
dbconnection()



//app.get is a method which is used to define a route for handling request(POST,GET,PUT,DELETE)

// /api is endpoint
// req is the request object which contains information about the incoming request
// res is the response object which is used to send response back to the client
app.get('/apitest',(req,res)=>{
    res.send('API is working fine') // response text from server
})

app.use(express.json()) //middleware which is used to parse incoming request body in json format
app.use('/user', require('./Routes/UserRoutes'))
