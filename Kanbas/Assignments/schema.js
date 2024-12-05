import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    description: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    points: String,
    due_date: Date,
    available_date: Date,
    available_until_date: Date,

  },
  { collection: "assignments" }
);
export default schema;