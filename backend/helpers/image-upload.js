const multer = require("multer");
const path = require("path");

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    let folder = "";

    if (req.baseUrl.includes('users')) {
      folder = "users";
    } else if (req.baseUrl.includes('debts')) {
      folder = "debts";
    }
    cb(null, `public/images/${folder}/`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const imageUpload = multer({
  storage: imageStorage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {

    return cb(new Error("Por favor, envie apenas png ou jpg!"));
    }
    cb(undefined, true);
  },
});

module.exports = { imageUpload };