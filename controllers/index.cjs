const { successResponse, errorResponse } = require('../utils/responses.cjs')
const { artworks, codeProjects } = require('../models/index.cjs')

const controllers = {
  getArtworks(req, res){
    res.json( successResponse(artworks) );
  },
  getCodeProjects(req, res){
    res.json( successResponse(codeProjects) );
  }
}


module.exports = controllers;