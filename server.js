const express = require('express')
const app = express()
const port = 5000

app.get('/metrics', (req, res) => {
    var d = new Date();
    res.json({metrics:d.getSeconds()});
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})