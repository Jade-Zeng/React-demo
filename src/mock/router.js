const express = require('express')
const router = express.Router()

router.get('/api/list', (req, res) => {
    res.send([
        {
            name: "jade",
            age: 19 
        },
        {
            name: "ziyao",
            age: 18
        }
    ])
})

module.exports = router;