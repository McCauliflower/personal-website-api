const { successResponse, errorResponse } = require('../utils/responses.cjs')
const { artworks, codeProjects } = require('../models/index.cjs')

const controllers = {
  getArtworks(req, res){
    res.json( successResponse(artworks, "You successfully retrieved artworks") );
  },
  getCodeProjects(req, res){
    res.json( successResponse(codeProjects, "You successfully retrieved code projects") );
  }
}


module.exports = controllers;