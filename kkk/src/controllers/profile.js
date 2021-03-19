//load profile module
const Profile = require("../models/profile");
//load user module
const User = require("../models/user");

//@route  POST api/profile
//@desc   create/update user profile
//@access PRIVATE route
exports.createProfile = async (req, res) => {
  try {
    const profileField = {};

    profileField.user = req.userID;
    if (req.body.handle) profileField.handle = req.body.handle;
    if (req.body.company) profileField.company = req.body.company;
    if (req.body.website) profileField.website = req.body.website;
    if (req.body.status) profileField.status = req.body.status;
    if (req.body.bio) profileField.bio = req.body.bio;
    if (req.body.github) profileField.github = req.body.github;

    //skills-split into array
    if (req.body.skills) profileField.skills = req.body.skills.split(",");

    //social media
    profileField.social = {};
    if (req.body.twitter) profileField.social.twitter = req.body.twitter;
    if (req.body.facebook) profileField.social.facebook = req.body.facebook;
    if (req.body.linkedin) profileField.social.linkedin = req.body.linkedin;
    if (req.body.instagram) profileField.social.instagram = req.body.instagram;

    //check if the have a profile
    const profile = await Profile.findOne({ user: req.userID });

    //if user profile exist, update the user profile and stop execute
    if (profile) {
      const response = await Profile.findOneAndUpdate(
        { user: req.userID },
        profileField,
        { new: true }
      );
      return res.json(response); //stop execute
    }

    //if no profile for user, create a profile
    const handle = await Profile.findOne({ handle: req.body.handle }); //check if there is a user with the handle

    if (handle)
      return res.status(400).json({ msg: "the handle already exist" });

    const save = new Profile(profileField); // save profile
    const response = await save.save();
    res.json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//@route GET api/profile
//@desc get user profile
//@access public route
exports.fetchProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.userID }).populate(
      "user",
      ["name", "avater"]
    );

    if (!profile)
      return res.status(404).json({ msg: "There is no profile for this user" });

    res.json(profile);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//@route  GET api/profile/users
//@desc   get profile of all users
//@access PUBLIC route
exports.fetchProfiles = async (req, res) => {
  try {
    const profile = await Profile.find({}).populate("user", ["name"]);

    if (!profile) return res.status(404).json({ msg: "There is no profile " });

    res.json(profile);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//@route  GET api/profile/handle/:handle
//@desc   get profile by handle
//@access PUBLIC route
exports.profileByHandle = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      handle: req.params.handle,
    }).populate("user", ["name"]);

    if (!profile)
      return res
        .status(404)
        .json({ msg: "There is no user with this profile" });

    res.json(profile);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//@route  GET api/profile/user/:id
//@desc   get profile by userID
//@access PUBLIC route
exports.profileByUserID = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.id,
    }).populate("user", ["name"]);

    if (!profile)
      return res
        .status(404)
        .json({ msg: "There is no user with this profile" });

    res.json(profile);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//@route  POST api/profile/exprience
//@desc   add experience to the profile
//@access PRIVATE route
exports.addExperience = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.userID });
    if (!profile) return res.status(404).json({ msg: "profile not found" });

    const experience = {
      title: req.body.title,
      company: req.body.company,
      location: req.body.location,
      from: req.body.from,
      to: req.body.to,
      current: req.body.current,
      description: req.body.description,
    };

    profile.experiences.unshift(experience);
    const response = await profile.save();
    res.json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//@route  POST api/profile/education
//@desc   add education to the profile
//@access PRIVATE route
exports.addEducation = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.userID });
    if (!profile)
      return res.status(404).json({ msg: "Profile of this user not found" });

    profile.education.unshift({
      school: req.body.school,
      degree: req.body.degree,
      field: req.body.field,
      description: req.body.description,
      from: req.body.from,
      current: req.body.current,
      to: req.body.to,
    });

    const response = await profile.save();
    res.json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//@route  DELETE api/profile/education/:edu_id
//@desc   delete education to the profile
//@access PRIVATE route
exports.deleteEducation = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.userID });

    if (!profile)
      return res.status(404).json({ msg: "Profile of this user not found" });

    const find = profile.education.find((e) => e._id == req.params.edu_id);
    if (!find)
      return res
        .status(400)
        .json({ msg: "not such education profile in the database " });

    profile.education = profile.education.filter(
      (e) => e._id != req.params.edu_id
    );

    const response = await profile.save();
    res.json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//@route  DELETE api/profile/experience/:exp_id
//@desc   delete exprience to the profile
//@access PRIVATE route
exports.deleteExperience = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.userID });

    if (!profile)
      return res.status(404).json({ msg: "Profile of this user not found" });

    const find = profile.experiences.find((e) => e._id == req.params.exp_id);
    if (!find)
      return res
        .status(404)
        .json({ msg: "not such exprience in the database " });

    profile.experiences = profile.experiences.filter(
      (e) => e._id != req.params.exp_id
    );

    const response = await profile.save();
    res.json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
