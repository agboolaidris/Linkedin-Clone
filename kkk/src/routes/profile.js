const Route = require("express").Router();
const Auth = require("../middleware/auth");
const {
  createProfile,
  fetchProfile,
  fetchProfiles,
  profileByHandle,
  profileByUserID,
  addExperience,
  addEducation,
  deleteEducation,
  deleteExperience,
} = require("../controllers/profile");
const {
  validateProfile,
  validateExperience,
  validateEducation,
} = require("../validator/profile");

//@route GET api/profile
//@desc get user profile
//@access public route
Route.get("/", [Auth], fetchProfile);

//@route  POST api/profile
//@desc   create/update user profile
//@access PRIVATE route
Route.post("/", [Auth, validateProfile], createProfile);

//@route  GET api/profile/users
//@desc   get profile of all users
//@access PUBLIC route
Route.get("/all", fetchProfiles);

//@route  GET api/profile/handle/:handle
//@desc   get profile by handle
//@access PUBLIC route
Route.get("/handle/:handle", profileByHandle);

//@route  GET api/profile/user/:id
//@desc   get profile by handle
//@access PUBLIC route
Route.get("/user/:id", profileByUserID);

//@route  POST api/profile/experience
//@desc   add experience to the profile
//@access PRIVATE route
Route.post("/experience", [Auth, validateExperience], addExperience);

//@route  POST api/profile/education
//@desc   add education to the profile
//@access PRIVATE route
Route.post("/education", [Auth, validateEducation], addEducation);

//@route  DELETE api/profile/education/:edu_id
//@desc   delete education from the profile
//@access PRIVATE route
Route.delete("/education/:edu_id", [Auth], deleteEducation);

//@route  DELETE api/profile/exprience/:exp_id
//@desc   delete education from the profile
//@access PRIVATE route
Route.delete("/experience/:exp_id", [Auth], deleteExperience);

module.exports = Route;
