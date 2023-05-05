const { getAll, remove, get } = require('./model.js');
const { render } = require('./view.js');
const { render: form } = require('./form.js')

const listAction = async (req, res) => {
    const data = await getAll();
    const body = render(data)
    res.send(body);
};

const removeAction = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    await remove(id);
    res.redirect(req.baseUrl);
}

const formAction = async (req, res) => {
    let movie = { id: '', title: '', year: '' };
    if (req.params.id) {
        movie = await get(parseInt(req.params.id, 10));
    }
    const body = form(movie);
    res.send(body);
    // res.redirect(req.baseUrl);
}

module.exports = { listAction, removeAction, formAction }