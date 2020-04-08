const logger = require('../utils/logger.cjs');
const controllers = require('../controllers/index.cjs')
const { successResponse } = require('../utils/responses.cjs')

const routes = (app) => {
    app.get('/server', logger, (req, res) => {
        res.send(successResponse('Electric Alchemy node.js server'))
    })
    app.route('/server/artworks')
        .get(logger, controllers.getArtworks )
    app.route('/server/code')
        .get(logger, controllers.getCodeProjects )
}

module.exports = routes;