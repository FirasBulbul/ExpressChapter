const { Router } = require('express');
const { listAction, removeAction, formAction, saveAction } = require('./controller.js')

const router = Router();
router.get('/', listAction)
router.get('/delete/:id', removeAction);
router.get('/form/:id?', formAction);
router.post('/save', saveAction);

module.exports = { router }