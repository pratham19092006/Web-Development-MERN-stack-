// ye file saare item specific routes ko store kregii

const express = require('express')
const router = express.Router()


// get requests
router.get('/', (req, res) => {
  res.send('Got a GET requests')
    // res.sendFile('../dummy.html' , {root: __dirname});
})

// post requests
router.post('/items', (req,res) => {
//   res.send('Got a POST request')
    res.json({
        name : 'iPhone',
        price : 100000
    })
})

// put requests
router.put('/items/:id', (req,res) => {
  res.send('Got a PUT request')
})

// delete requests
router.delete('/items/:id', (req,res) => {
  res.send('Got a DELETE request')
})


module.exports = router