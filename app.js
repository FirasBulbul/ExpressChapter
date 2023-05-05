const express = require('express');
const { router: movieRouter }  = require('./movie/index.js');
const PORT = process.env.PORT || 3000

const app = express();

const logging = (req, res, next) => {
    console.log(req.url);
    next();
}

app.use(logging);
app.use('/movie', movieRouter);

app.get('/', (req, res) => {
    res.redirect('/movie')
})

app.listen(PORT, () => {
    console.log(`Server is listening through ${PORT} port`);
});
