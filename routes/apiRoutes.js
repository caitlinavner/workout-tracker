const router = require("express").Router();
//require Workout
const Workout = require("../models/workout");

//add post puts something somewhere. takes json obect and puts it somewhere else
router.post("/api/workout", (req, res) => {
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
});

//update .put .findById
// :id looks for something to put there. similar to $
router.put("/api/workouts/:id", ({ body, params }, res) => {
//defines a route and gives it a method then defines the path
  //body is the new object that replaces and updates the info. params is id
  //still want res to display result
//findById
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } }
    //using a method that puts something in the db
    //$ grabs something to do something
  )
    //could also use .update
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

router.get("/api/workouts", (req, res) => {

  Workout.find()

    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", ({ query }, res) => {
  Workout.find({ day: { $gte: query.start, $lte: query.end }})
//$gte is greater than 
    //$lte is less than
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});


router.post("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});
module.exports = router;