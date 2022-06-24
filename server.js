const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    'jay-z': {
        'age': 52,
        'birthName': 'Sean Carter',
        'birthLocation': 'NY City, New York',
    },
    'nas': {
        'age': 48,
        'birthName': 'Nasir bin Olu Dara Jones',
        'birthLocation': 'NY City, New York',
    },
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois',
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown',
    },
}

//Similar to an event listener...instead of .click or .hover, we .get
// __dirname tells the server to look in its currently directory and start looking there 
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

// The colon in front of name lets express know it's a query parameter on the URL
//Checks if name entered as query parameter and returns their info
//If not it is set to return the unknown rapper info
app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    console.log(rapperName)

    if( rappers[rapperName] ) {
        response.json(rappers[rapperName])
    }else {
        response.json(rappers['unknown'])
    }
    response.json(rappers[rapperName])
})

// Server listens for PORT. Instead of hard coding it we leave it open. 
// We check if Heroku is serving up the port and if not we use our own port. 
app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})


