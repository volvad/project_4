const express = require('express')
const app = express()

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/project/index.html')
})

let port = 3000
app.listen(port, () => {
   console.log(`Server started: http://localhost:${port}`)
})

