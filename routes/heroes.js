const express = require('express')

const router = express.Router()


const heroesController = require ('../controllers/heroesController')

router.get('/',heroesController.index)
router.get('/:id',heroesController.detalle)
router.get('/bio/:id/:ok?',heroesController.bio)


module.exports = router