const getLoginData = require("../models/userModel.js")
const getClientData = require('../models/clientsModel')
const getPoliciesData = require('../models/policiesModel.js')
const getCarsData = require('../models/carsModel.js')
const express = require("express");
const router = express.Router();

router.post('/',getLoginData.userModel)
router.get('/clients', getClientData.getClient)
router.get('/policies', getPoliciesData.getPolicies)
router.get('/cars', getCarsData.getCars)

module.exports = router;