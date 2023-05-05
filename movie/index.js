const { Router } = require('express');
const { listAction, removeAction, formAction } = require('./controller.js')

const router = Router();
router.get('/', listAction)
router.get('/delete/:id', removeAction);
router.get('/form/:id?', formAction);

module.exports = { router }