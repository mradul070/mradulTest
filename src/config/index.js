require('dotenv').config();

export const config = {
    port: process.env.PORT || 3000,
    secret: process.env.SECRET || 'secret'
}
