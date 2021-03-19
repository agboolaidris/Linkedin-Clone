const validator = require("validator");

exports.validateProfile = (req, res, next) => {
  const {
    handle,
    status,
    skills,
    website,
    twitter,
    facebook,
    instagram,
    linkedin,
  } = req.body;

  if (!handle) return res.status(400).json({ msg: "handle is required" });
  if (!status) return res.status(400).json({ msg: "status is required" });
  if (!skills) return res.status(400).json({ msg: "skills is required" });

  if (handle.length < 3 || handle.length > 41)
    return res
      .status(400)
      .json({ msg: "handle need to between 2 and 40 characters" });

  //check if it is valid URL

  if (website) {
    if (!validator.isURL(website))
      return res.status(400).json({ msg: "URL is invalid" });
  }
  if (linkedin) {
    if (!validator.isURL(linkedin))
      return res.status(400).json({ msg: "URL is invalid" });
  }
  if (facebook) {
    if (!validator.isURL(facebook))
      return res.status(400).json({ msg: "URL is invalid" });
  }
  if (twitter) {
    if (!validator.isURL(twitter))
      return res.status(400).json({ msg: "URL is invalid" });
  }
  if (instagram) {
    if (!validator.isURL(instagram))
      return res.status(400).json({ msg: "URL is invalid" });
  }

  next();
};

exports.validateExperience = (req, res, next) => {
  const { title, company, from, description } = req.body;

  if (!title) return res.status(400).json({ msg: "title is required" });
  if (!company) return res.status(400).json({ msg: "company is required" });
  if (!from) return res.status(400).json({ msg: "from date is required" });
  if (!description)
    return res.status(400).json({ msg: "description is required" });

  next();
};

exports.validateEducation = (req, res, next) => {
  const { degree, school, from, field } = req.body;

  if (!degree) return res.status(400).json({ msg: "degree is required" });
  if (!school) return res.status(400).json({ msg: "school is required" });
  if (!from) return res.status(400).json({ msg: "from date is required" });
  if (!field) return res.status(400).json({ msg: "field is required" });

  next();
};
