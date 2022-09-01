
const { json } = require('express');
const Tour = require('../models/tourModel');
const APIFeatures = require('./../utils/apiFeatures')
exports.aliasTopTours = (req, res, next) => {
    req.query.limit = '5';
    req.query.sort = '-ratingsAverage,price';
    req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
    next();
}

exports.getAllTours = async (req, res) => {
    try {
        //! Execute Query
        const features = new APIFeatures(Tour.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .pagination();
        const tours = await features.query;

        //! Send RESPONSE
        res.status(200).json({
            status: 'success',
            results: tours.length,
            data: {
                tours
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
};

exports.getTour = async (req, res) => {
    try {
        const tour = await Tour.findById(req.params.id)
        // Tour.findOne({_id:req.params.id})
        res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.createTour = async (req, res) => {
    try {
        // const newTour = new Tour({
        // });
        // newTour.save();
        const newTour = await Tour.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                tour: newTour
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'Fail',
            message: err
        })
    }
};

exports.updateTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: 'success',
            data: {
                tour: tour
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }

};

exports.deleteTour = async (req, res) => {
    try {
        await Tour.findByIdAndRemove(req.params.id)
        res.status(204).json({
            status: 'success',
            data: {
                tour: null
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
};
exports.getTourStats = async (req, res) => {
    try {
        const stats = Tour.aggregate([

        ])
    } catch (err) {
        res.status(404), json({
            status: 'fail',
            message: err
        })
    }
}