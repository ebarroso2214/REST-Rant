const router = require('express').Router()
const places = require('../models/places.js')
const db = require('../models') //db is just short for database, makes it easier to understand.
const comment = require('../models/comment.js')

router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index' , {places})
  })
  .catch( err => {
    console.log(err)
    res.render('error404')
  })
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then(()=> {
        res.redirect('/places')
    })
    .catch(err => {
      
      if (err&&err.name == 'ValidationError'){
        let message = 'Validation Error: '
        for (var field in err.errors){
          message += `${field} was ${err.errors[field.value]}.`
          message += `${err.errors[field].messsage}` 
        }
        res.render('places/new', {message})
      }
      else {
        res.render('error404')
      }
        // console.log('err',err)
        // res.render('error404')
    })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .populate('comments')
        .then(place => {
          console.log(place.comments)
            res.render('places/show', {place})
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(()=>{
    res.redirect(`/places/${req.params.id}`)
  })
  .catch(err =>{
    console.log('err', err)
    res.render('error404')
  })
})

router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then(place => {
    res.redirect('/places')
    })
    .catch(err =>{
    console.log('err', err)
    res.render('error404')
    })
})

router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
    .then(place=>{
      res.render('places/edit', {place})
    })
    .catch(err=>{
      res.render('error404')
    })
})

router.post('/:id/rant', (req, res) => {
  console.log(req.body)
  // req.body.rant = req.body.rant? true : false
  db.Place.findById(req.params.id)
    .then(place => {
      db.Comment.create(req.body)
        .then(comment => {
          place.comments.push(comment.id)
          place.save()
            .then(()=>{
              res.redirect(`/places/${req.params.id}`)
            })
        })
        .catch(err =>{
          res.render('error404')
        })
    })

    .catch(err => {
      res.render('error404')
    })
  // res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => { //rantId is the path
  db.Comment.findByIdAndDelete(req.params.rantId) //rantId here refers to the path, BOTH have to be the same
  .then(place =>{
    res.redirect(`/places/${req.params.id}`) //.params.id is for id of the place as you see in the path /:id, /:id = req.params.id 
  })
  .catch(err=>{
    console.log('err',err)
    res.redirect(`error404`)
  })
})

module.exports = router

