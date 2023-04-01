const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '../images/tables-restaurant.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'http://placekitten.com/500/500',
    founded: 2020
}])

.then(()=>{
    console.log('success')
    process.exit()
})

.catch(err => {
    console.log('failure', err)
    process.exit()
})