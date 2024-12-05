import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    question: String,
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    points: String,
    type: {
      type: String,
      enum: ["Fill In the Blank", "Multiple Choice", "True/False"],
      default: "Multiple Choice",
    },
    choices: [String],
    answers: [String],
  },
  { collection: "questions" }
);
export default schema;