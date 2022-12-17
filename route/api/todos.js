const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/todo')

// index
router.get('/', dataController.index, apiController.index)
// create 
router.post('/', dataController.create, apiController.show)
// update
router.put('/:id', dataController.update, apiController.show)
// delete
router.delete('/:id', dataController.destroy, apiController.show)
// show 
router.get('/:id', dataController.show, apiController.show)

module.exports = router