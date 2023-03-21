const router = require('express').Router()

router.get('/', (req, res) =>{
    res.send('GET /places')
})

router.post('/places', (req, res) =>{
    res.send('POST /places')
})

router.get('/places/new', (req, res) =>{
    res.send('GET /places')
})

router.get('/places/:id', (req, res) =>{
    res.send('GET /places')
})

router.put('/places/:id', (req, res) =>{
    res.send('PUT /places')
})

router.get('/places/:id/edit', (req, res) =>{
    res.send('GET /places')
})

router.delete('/places/:id', (req, res) =>{
    res.send('Delete /places')
})

router.post('/places/:id/rant', (req, res) =>{
    res.send('POST /places')
})

router.delete('/places/:id/rant/:rantId', (req, res) =>{
    res.send('Delete /places')
})



// More code here in a moment

module.exports = router
