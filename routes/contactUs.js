
const path = require('path');

const express = require('express');

const contactUsController = require('../controllers/products');
 

const router = express.Router();

router.get('/contactus', contactUsController.getContactUs);

router.post('/success', contactUsController.postContactUs);

module.exports=router;
