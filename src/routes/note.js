const express = require('express')
const notecontrol = require('../controller/note')
const router = express.Router()

router.get('/create',notecontrol.create)
router.get('/delete',notecontrol.del)

module.exports = router