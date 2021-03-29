//load user module
const User = require("../models/user");

//@route  POST api/profile
//@desc   create/update user profile
//@access PRIVATE route
exports.createProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userID);

    if (!user) return res.status(404).json({ msg: "user not found" });

    const checkUserHandle = await User.findOne({
      handle: req.body.handle,
      _id: req.userID,
    });
    const checkAllHandle = await User.findOne({
      handle: req.body.handle,
    });

    if (!checkUserHandle && checkAllHandle)
      return res.status(400).json({ msg: "the handle already exist" });

    if (req.file) user.avater = req.file.path;
    console.log(req.file);
    if (req.body.handle) user.handle = req.body.handle;
    if (req.body.company) user.company = req.body.company;
    if (req.body.website) user.website = req.body.website;
    if (req.body.status) user.status = req.body.status;
    if (req.body.bio) user.bio = req.body.bio;
    if (req.body.github) user.github = req.body.github;

    //skills-split into array
    if (req.body.skills) user.skills = req.body.skills.split(",");

    //social media
    user.social = {};
    if (req.body.twitter) user.social.twitter = req.body.twitter;
    if (req.body.facebook) user.social.facebook = req.body.facebook;
    if (req.body.linkedin) user.social.linkedin = req.body.linkedin;
    if (req.body.instagram) user.social.instagram = req.body.instagram;

    const profile = await user.save();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//@route GET api/profile
//@desc get user profile
//@access public route
exports.fetchProfile = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.userID });

    if (!user)
      return res.status(404).json({ msg: "There is no profile for this user" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//@route  GET api/profile/users
//@desc   get profile of all users
//@access PUBLIC route
exports.fetchProfiles = async (req, res) => {
  try {
    const users = await Profile.find({});

    if (!users) return res.status(404).json({ msg: "There is no users" });

    res.json(users);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//@route  GET api/profile/handle/:handle
//@desc   get profile by handle
//@access PUBLIC route
exports.profileByHandle = async (req, res) => {
  try {
    const profile = await User.findOne({
      handle: req.params.handle,
    });

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
    const profile = await User.findOne({ _id: req.userID });
    if (!profile) return res.status(404).json({ msg: "user not found" });

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
    const profile = await User.findOne({ _id: req.userID });
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
    const profile = await User.findOne({ _id: req.userID });

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
    const profile = await User.findOne({ user: req.userID });

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
