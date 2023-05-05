const express = require('express');
const morgan = require('morgan');
const { createWriteStream } = require('fs');
const { dirname } = require('path');
const { fileURLToPath } = require('url');
const { router: movieRouter } = require('./movie/index.js');
const PORT = process.env.PORT || 3000

const app = express();

// const logging = (req, res, next) => {
//     console.log(req.url);
//     next();
// }

// const accessLogStream = createWriteStream('access.log', { flags: 'a' });

// app.use(logging);
app.use('/movie', movieRouter);
// app.use(morgan('common', { immediate: true }));
// app.use(morgan('common', { immediate: true, stream: accessLogStream }));
// app.use(express.static(`${dirname(fileURLToPath('http://localhost:3000/movie'))}/public`));

app.get('/', (req, res) => {
    res.redirect('/movie')
});

app.listen(PORT, () => {
    console.log(`Server is listening through ${PORT} port`);
});
