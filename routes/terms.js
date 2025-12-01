const express = require('express')
const router = express.Router()
const termsController = require('../controllers/termsController')




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



