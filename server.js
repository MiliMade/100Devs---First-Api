const express = require('express')
const app = express()
const PORT = 8000

const planets = {
    'mercury':{
        'Length of one day' : '58.8 Earth Days'
    },

    'venus':{
        'Length of one day' : '243 Earth Days'
    },

    'earth':{
        'Length of one day' : '23 hours, 56 minutes'
    },

    'mars':{
        'Length of one day' :'24 hours, 37 minutes'
    },

    'jupiter':{
        'Length of one day' :'9 hours, 55 minutes'
    },

    'saturn':{
        'Length of one day' :'10 hours, 33 minutes'
    },

    'uranus':{
        'Length of one day' :'17 hours, 14 minutess'
    },

    'neptune':{
        'Length of one day' :'15 hours, 57 minutes'
    },

    'pluto':{
        'Length of one day' :'6.4 Earth days'
    },

    'unknown':{
        'Length of one day' :'unknown'
    }


}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:planet', (request, response)=>{
    const planetName = request.params.planet.toLowerCase()
    if (planets[planetName]){
        response.json(planets[planetName])
    }else{
        response.json(planets['unknown'])
    }
    
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}. You better go catch it!`)
})