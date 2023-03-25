const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) =>{
    res.render('places/index' , {places})
})

router.post('/', (req, res) =>{
    console.log(req.body)
    if(!req.body.pic){
        //Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if(!req.body.city){
        req.body.city = 'Anytown'
    }
    if(req.body.state){
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('places')
})

router.get('/new', (req, res) =>{
    res.render('places/new')
})


router.get('/:id', (req, res) =>{
    let id = Number(req.paranas.id)
    if(isNaN(id)){
        res.render('error404')
    } else{
        res.render('places/show', {place: places[id]})
    }
    

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
