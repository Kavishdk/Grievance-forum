const express = require('express');

// Import GrievanceController (or whatever controller handles grievances)
const {
    createGrievance,
    getGrievance,
    getGrievances,
    deleteGrievance,
    updateGrievance,
    updateGrievanceStatusAndReply
} = require("../controllers/grievanceController");

// Require authentication for all grievance routes
const requireAuth = require('../middleware/requireAuth');

const multer = require('multer');
const path = require('path');

// Multer config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)) // Appending extension
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.use(requireAuth);

// GET all Grievances
router.get('/', getGrievances);

// GET a single Grievance
router.get('/:id', getGrievance);

// POST a new Grievance
router.post('/', upload.single('image'), createGrievance);

// DELETE a Grievance
router.delete('/:id', deleteGrievance);

// UPDATE a Grievance
router.patch('/:id', updateGrievance);

router.post('/:id/update', updateGrievanceStatusAndReply);

module.exports = router;
