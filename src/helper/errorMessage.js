class ApiError extends Error {
    constructor(statusCode, message) {
      // super(message);
      super(message)
      // console.log(message.message)
      this.statusCode = statusCode;
      this.errorMessage = message;
      this.haveError= true
    }
  }
  
  module.exports = ApiError;
  