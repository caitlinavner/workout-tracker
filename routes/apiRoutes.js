const router = require("express").Router();
//require Workout
const Workout = require("../models/workouts");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
});
//put, get, delete
//post places something
//put finds something and changes it. find by ID and update


router.post("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});
module.exports = router;