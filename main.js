'use strict'

const app = require('./server')
const PORT = 3333

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})