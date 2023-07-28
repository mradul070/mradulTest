import { status } from "../constants/status"
import ApiError from "../helper/errorMessage"

export const handleError = (error, req, res, next) => {
  console.log('---------------------------')
  console.log(error)
  return res.status(error.statusCode || error.status).json(new ApiError(error.statusCode, error.message))
}