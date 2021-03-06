const express = require('express')
const app = express()

// Define the port 
const port = process.env.PORT || 8080

// Define directory where static files will be served to run in the browser.
app.use(express.static(__dirname + '/public'))

app.get('/hello/', (req, res) => {
    res.send('Hello World')
})

const logMessage = 'Application listening at http://localhost:' + port
app.listen(port, () => {
    console.log(logMessage)
    console.log('Pret Ctrl + C to end')
})