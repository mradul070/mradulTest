const errorMessage = (error) => {
    let errorMessage
    let statusCode = 400;
    if (error.length) {
        errorMessage = []
        for (let e of error) {
            errorMessage.push(e.message)
            statusCode = e.status ? e.status: 500
        }
    } else if (error) {
        errorMessage = error.message
        statusCode = 406
    }
    return {
        error: errorMessage,
        isError: true,
        statusCode: statusCode
    }
}
module.exports = errorMessage