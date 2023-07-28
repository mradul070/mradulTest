import ApiError from "../helper/errorMessage"

export const handleError = (error, req, res, next) => {
  return res.status(error.statusCode || error.status).json(new ApiError(error.statusCode, error.message))
}