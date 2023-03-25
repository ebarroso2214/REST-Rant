const router = require('express').Router()

router.get('/', (req, res) =>{
    let places = [{
        name : 'H-Thai-ML',
        city : 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/tables-restaurant.jpg' 

    },  
    {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee.jpg'
    }]
    res.render('places/index' , {places})
})

router.post('/', (req, res) =>{
    console.log(req.body)
    res.send('places')
})

router.get('/new', (req, res) =>{
    res.render('places/new')
})


router.get('/:id', (req, res) =>{
    res.send('/places')
})

router.put('/:id', (req, res) =>{
    res.send('/places')
})

router.get('/:id/edit', (req, res) =>{
    res.send('/places')
})

router.delete('/:id', (req, res) =>{
    res.send('/places')
})

router.post('/:id/rant', (req, res) =>{
    res.send('/places')
})

router.delete('/:id/rant/:rantId', (req, res) =>{
    res.send('Delete /places')
})



// More code here in a moment

module.exports = router
