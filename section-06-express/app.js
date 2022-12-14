const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const globalErrorHandler = require('./controllers/errorController')
const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/AppError');
const app = express();


// 1) Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});
// 3) Routes
// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.all('*', (req, res, next) => {
    next(new AppError(`Cant't find ${req.originalUrl} on the server`, 404));
});

app.use(globalErrorHandler)
module.exports = app;
