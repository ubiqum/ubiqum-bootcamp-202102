const express = require('express')

const router = express.Router()

const cityModel = require('../model/cityModel')

router.get('/test', (req,res) =>{ 
    res.send ({ msg: 'Heres is the cities test route.'})
    
})

/*get all the cities*/
router.get('/all',
(req,res) => {
    cityModel.find({})
    .then(cities => {
        res.send(cities) 
    })
    .catch(err => console.log(err))
})

module.exports = router