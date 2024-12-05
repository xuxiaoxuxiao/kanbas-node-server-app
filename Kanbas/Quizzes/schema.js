import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    type: {
      type: String,
      enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
      default: "Graded Quiz",
    },
    points: String,
    group: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Project"],
      default: "Quizzes",
    },
    shuffle_answers: Boolean,
    time_limit: String,
    has_time_limit: Boolean,
    multiple_attempts: Boolean,
    attempts: String,
    show_correct: Boolean,
    access_code: String,
    one_question_at_a_time: Boolean,
    webcam_required: Boolean,
    lock_questions_after_answering: Boolean,
    due_date: Date,
    available_date: Date,
    available_until_date: Date,
    published: Boolean,
  },
  { collection: "quizzes" }
);
export default schema;