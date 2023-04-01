const React = require('react')
const Def = require('../default')

function show(data){
    
    return(
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <img src = {data.place.pic} alt={data.place.name}/>
                <h2>{data.place.city}, {data.place.state}</h2>
                
                <h3>{data.place.showEstablished()}</h3>
                <h2>Serving {data.place.cuisines}</h2>
                <h1>Currently Unrated!</h1>
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>

                <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>Delete</button>
                </form>
            </main>
        </Def>  
    )
}

module.exports = show