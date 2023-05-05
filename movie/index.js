const { Router } = require('express');
const { listAction } = require('./controller.js')

const router = Router();
router.get('/', listAction)

module.exports = { router }