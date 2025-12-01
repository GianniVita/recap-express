
const express = require('express')
const terms = require('../data/terms')
const router = express.Router()


//index
router.get('/', termsController.index)


//show
router.get('/:id', termsController.show)

//store

router.post('/:id', termsController.store)



//update
router.put('/:id', termsController.update)
    
    
//destroy
router.delete('/:id', termsController.destroy)

//Export your router instance
module.exports = router



