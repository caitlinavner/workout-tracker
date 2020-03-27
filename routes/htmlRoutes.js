/*const router = require("express").Router();
//allows routing to happen
const path = require("path");

router.get("/exercise", (req, res) => {
    //defines what the route is called
    res.sendfile(path.join(__dirname, "../public/exercise.html"))
    //__is a standin and looks for whatever you need
}); 
//html is always a get request

router.get("/stats", (req, res) => {
  //defines what the route is called
  res.sendfile(path.join(__dirname, "../public/stats.html"));
  //__is a standin and looks for whatever you need
});

router.get("/", (req, res) => {
  //defines what the route is called
  res.sendfile(path.join(__dirname, "../public/index.html"));
  //__is a standin and looks for whatever you need
});

module.exports = router; */

const router = require("express").Router();
const path = require("path");
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});
module.exports = router;

