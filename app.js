const express = require('express');
const morgan = require('morgan');
const { router: movieRouter } = require('./movie/index.js');
const PORT = process.env.PORT || 3000

const app = express();

app.set('view engine', 'pug');

app.use(express.static(`./style.css/public`));

app.use(morgan('common', { immediate: true }));

app.use(express.urlencoded({ extended: false }));

app.use('/movie', movieRouter);

app.get('/', (req, res) => {
    res.redirect('/movie')
});

app.listen(PORT, () => {
    console.log(`Server is listening through ${PORT} port`);
});
