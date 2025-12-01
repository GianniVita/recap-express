
const express = require('express')
const router = express.Router()


//index
router.get('/', (req,res) => {
    res.send('Show all terms here')
})


//show
router.get('/:id', (req,res) => {
    res.send('show tern id' + req.params.id)
})

//store

router.post('/:id', (req, res) => {
    console.log(req.body);
    res.send('show tern id' + req.params.id)
})



//update
router.put('/:id', (req, res) => {
    res.send('store tern id' + req.params.id)
})
    
    
//destroy
router.delete('/:id', (req, res) => {
    res.send('update tern id' + req.params.id)
})

//Export your router instance
module.exports = router



