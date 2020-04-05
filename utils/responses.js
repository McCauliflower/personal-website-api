let successResponse = (data, message) => {
  return {
      "status": 200,
      "message": message || "Success",
      "data": data 
  }
}
let errorResponse = error => {
  return {
      "status": 500,
      "error": error
  }
}

module.exports  = { successResponse, errorResponse }