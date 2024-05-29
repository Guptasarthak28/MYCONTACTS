const express = require('express');
const router = express.Router();
const {getContact,createContact,getcontact,updateContact,deleteContact} = require('../controllers/contactController');

router.use(validateToken);
router.route("/").get(getContact);

router.route("/").post(createContact);

router.route("/:id").post(getcontact);

router.route("/:id").put(updateContact);
router.route("/:id").delete(deleteContact);
module.exports = router;