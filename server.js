// First, we have to require Express so we can use it in our app.
const express = require('express')
/* import express from 'express' */
// Require the `morgan` request logger
const logger = require('morgan')

// Create an express server instance named `app`
// `app` is the Express server that will be handling requests and responses
const app = express()

// Setup the request logger to run on each request
app.use(logger('dev'))

app.use(express.static('public'))

// Our first route
app.get('/home', (request, response) => {
  console.log(request)
  response.send('<h1>Welcome Ironhacker. :)</h1>')
})

app.get('/about', (request, response) => {
  response.send('<h1>About page</h1>')
})

app.get('/contact', (request, response) => {
  response.send('<h1>Contact page</h1>')
})

app.get('/cat', (request, response, next) => {
  response.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Cat</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
  `)
})

// Start the server
app.listen(3000, () => console.log('My first app listening on port 3000! '))
