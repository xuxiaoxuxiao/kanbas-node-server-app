import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("QuestionModel", schema);
export default model;