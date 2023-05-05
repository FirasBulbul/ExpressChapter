const { getAll } = require('./model');
const { render } = require('./view.js');

const listAction = async (req, res) => {
    const data = await getAll();
    const body = render(data)
    res.send(body);
}

module.exports = { listAction }