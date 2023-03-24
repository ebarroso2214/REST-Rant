const router = require('express').Router()

router.get('/', (req, res) =>{
    let places = [{
        name : 'H-Thai-ML',
        city : 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/tables-restaurant.jpg' 

    },  {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee.jpg'
    }]
    res.render('places/index' , {places})
})

router.post('/places', (req, res) =>{
    res.send(' /places')
})

router.get('/new', (req, res) =>{
    res.render('places/new')
})

router.get('/places/:id', (req, res) =>{
    res.send('/places')
})

router.put('/places/:id', (req, res) =>{
    res.send('/places')
})

router.get('/places/:id/edit', (req, res) =>{
    res.send('/places')
})

router.delete('/places/:id', (req, res) =>{
    res.send('/places')
})

router.post('/places/:id/rant', (req, res) =>{
    res.send('/places')
})

router.delete('/places/:id/rant/:rantId', (req, res) =>{
    res.send('Delete /places')
})



// More code here in a moment

module.exports = router
