import model from "./model.js";
import mongoose from "mongoose";

export function enrollUserInCourse(user, course) {
  return model.create({ user, course });
}

export async function unenrollUserInCourse(user, course) {
  const result = await model.deleteOne({ user: user, course: course });
  if (result.deletedCount > 0) {
    return 200
  } else {
    return 500
  }
}

export async function findCoursesForUser(userId) {
  const objectIdUser = mongoose.Types.ObjectId.isValid(userId)
    ? mongoose.Types.ObjectId.createFromHexString(userId)
    : userId;
  const enrollments = await model.find({ user: objectIdUser }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}

export function findAllEnrollments() {
  model.find()
}
