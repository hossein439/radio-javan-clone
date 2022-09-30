module.exports = {
    port: process.env.PORT || 4030,
    db: {
        database: process.env.DB_NAME || 'radio-javan',
        user: process.env.DB_USER || 'radio-javan',
        password: process.env.DB_PASS || 'radio-javan',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage:'./radio-javan.sqlite'
        }
    },
    authentication: {
        jwtScreet: process.env.JWT_SCREET || 'screet'
    }
}