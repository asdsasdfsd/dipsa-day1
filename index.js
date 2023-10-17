const express = require('express')
const {engine} = require ('express-handlebars')

//port to listen to
const POST = parseInt(process.env.PORT) || 3000

//Create an instance of express
const app = express()

//Serve files in the static directory
app.use(express.static(__dirname+'/static'))

app.listen(PORT, () => {
    console.info(`Application strated on port ${PORT} at ${new Date()}`)
})