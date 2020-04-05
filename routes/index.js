
const routes = (app) => {
    app.get('/server', (req, res) => res.send('Electric Alchemy node.js server'))
}

module.exports = routes;