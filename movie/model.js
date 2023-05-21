let data = [
    { id: 1, title: 'Iron Man', year: '2008' },
    { id: 2, title: 'Thor', year: '2011' },
    { id: 3, title: 'Captain America', year: '2011' },
];

const file = require('./file.json');

const getAll = () => {
    return Promise.resolve(data);
}

const remove = (id) => {
    data = data.filter(movie => movie.id !== id);
    return Promise.resolve();
}

const get = (id) => {
    return Promise.resolve(data.find((movie) => movie.id === id));
}

const save = (movie) => {
    if (movie.id === '') {
        // insert(movie);
        data.push(movie);
    } else {
        // update(movie);
    }
    return Promise.resolve();

}

module.exports = { getAll, remove, get, save }