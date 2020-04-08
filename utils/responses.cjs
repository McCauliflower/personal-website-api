let successResponse = (data, message) => {
  return data 
}
let errorResponse = (error, message) => {
  return {
      "error": error,
      "message": message
  }
}

module.exports  = { successResponse, errorResponse }