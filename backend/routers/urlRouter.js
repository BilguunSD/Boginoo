const express = require('express');
const { urlAll, urlById, urlCreate, urlDelete, urlUpdate, urlReadById } = require('../controllers/urlController');

const UrlRouter = express
    .Router()
    .post('/url', urlCreate)
    .get('/urlid/:id', urlReadById)
    .get('/url/:id', urlById)
    .get('urls', urlAll)
    .patch('/url/:id', urlUpdate)
    .delete('/url/:id', urlDelete);

module.exports = UrlRouter;
