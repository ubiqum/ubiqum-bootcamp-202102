const express = require('express')

const router = express.Router()

const cityModel = require('../model/cityModel')

router.get('/test', (req, res) => {
    res.send({ msg: 'Here is the cities test route.' })

})

/*get all the cities*/
router.get('/all',
    (req, res) => {
        cityModel.find({})
            .then(cities => {
                res.send(cities)
            })
            .catch(err => console.log(err))
    })

/*post cities*/
router.post('/', (req, res) => {
    const newCity = new cityModel({
        name: req.body.name,
        country: req.body.country,
        img: req.body.img
    })
    cityModel.findOne({ name: newCity.name, country:newCity.country }, function (err, cityModel) {
        if (err) { 
            console.log(err) }
        if (cityModel) {
        res.send({ error: "The city " + newCity.name + " from " + newCity.country + " already exists in the database", newCity})
        
        console.log("The city " + newCity.name + " already exists in the database")
        } else {
            newCity.save()
                .then(city => {
                    res.send(city)
                })
                .catch(err => {
                    res.status(500).send("Server Error")
                })

        }
    })
})

module.exports = router