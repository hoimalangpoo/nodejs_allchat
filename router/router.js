const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')

router.use((req, res, next) => {
     next() 
})

router.get('/',controller.home )

module.exports = router