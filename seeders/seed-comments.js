const db = require('../models')

async function seed(){
    //Getting the place H-Thai-Ml
    let place = await db.Place.findOne({name: "H-Thai-ML"})

    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content:'Wow, simply amazing! Highly recommended!',
    })

    //Add comment to the place's comment array
    place.comments.push(comment.id)

    //saves the place now that it has a comment
    await place.save()

    //exits program
    process.exit()
}



seed()