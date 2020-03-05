const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutScema = new Schema(
  {
    day: {
      type: Date,
      require: true
    },
    exercise: [
      {
        type: {
          type: String,
          trim: true,
          require: "Each an exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name"
        },
        duration: {
          type: Number,
          required: "Enter an exercise duration in minutes"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  },
  {
    toJson: {
      virtuals: true
    }
  }
);

workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;