const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
const router = require('./router/router')
const cors = require('cors')
app.use(cors())

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(router)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})