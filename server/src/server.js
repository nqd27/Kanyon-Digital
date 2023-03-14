const exp = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("node-jsonwebtoken");
const app = exp();
const port = 3000;
const PRIVATE_KEY = fs.readFileSync("private-key.txt");
const db = require("./models/connect");
const multer = require("multer");
var express = require("express");
var path = require("path");
// Thiết lập Multer để lưu trữ tập tin tải lên trong thư mục "uploads"
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/users", (req, res) => {
  let sql = "SELECT * FROM `users`";
  db.query(sql, (err, data) => {
    res.json(data);
  });
});

app.put("/api/users/update", (req, res) => {
  let data = req.body;
  // console.log(data);
  let newData = {
    Fullname: data.Fullname,
    DayOfBirth: data.DayOfBirth,
    Email: data.Email,
    Phone: data.Phone,
    password: data.password,
  };

  console.log(newData);

  let sql = "UPDATE users SET ? WHERE `id_user` = ?";
  db.query(sql, [newData, data.id_user], (err, data) => {
    if (data) {
      let sql1 = "SELECT * FROM `users`";
      db.query(sql1, (err, d) => {
        res.json(d);
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Ung dung dang chay voi port ${port}`);
});
