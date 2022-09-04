const mongoose = require('mongoose')
const dotenv = require('dotenv');
// should be on top to look for all uncaught exception
process.on('uncaughtException', err => {
    console.log(err.name, err.message);
    console.log('Uncaught Exception!🧞‍♂️ Shutting down... ');
    process.exit(1);
});
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace
    ('<PASSWORD>',
        process.env.DATABASE_PASSWORD);
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }).then(() => console.log('DB connection successful!'));

const app = require('./app');


const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
// Handle Global Errors
process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    console.log('UNHANDLED REJECTION!🧞‍♂️ Shutting down... ');
    server.close(() => {
        process.exit(1);
    })
})

