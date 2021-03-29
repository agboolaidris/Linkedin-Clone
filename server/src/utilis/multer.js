const multer = require("multer");
const shortid = require("shortid");

exports.multer = (name, type) => {
  
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },

    filename: (req, file, cb) => {
      cb(null, `${shortid.generate()}-${file.originalname}`);
    },
  });

  const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/jpg"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
      }
    },
    limits: 1000000,
  });

  if (type === "array") {
    return upload.array(name);
  } else {
    return upload.single(name);
  }
};
