var express = require('express');
var cors = require('cors');
var router = express.Router();
var  ActivityController = require('./activity.controller');

router.use(cors());
activityController = new ActivityController();
router.get('/' , activityController.getAllActivities);
router.get('/:id' , activityController.getOneActivity);
router.post('/' , activityController.createActivity);
router.patch('/:id' , activityController.updateActivity);

module.exports = router;