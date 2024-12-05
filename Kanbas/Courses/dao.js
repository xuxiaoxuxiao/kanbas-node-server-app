import model from "./model.js";
import enrollmentsModel from "../Enrollments/model.js"
export function findAllCourses() {
  return model.find();
}
// export function findCoursesForEnrolledUser(userId) {
//   const { courses, enrollments } = Database;
//   const enrolledCourses = courses.filter((course) =>
//     enrollments.some((enrollment) => enrollment.user === userId && enrollment.course === course._id));
//   return enrolledCourses;
// }

export function createCourse(course) {
  delete course._id;
  return model.create(course);
}

export async function deleteCourse(courseId) {
  await enrollmentsModel.deleteMany({ course: courseId });
  return model.deleteOne({ _id: courseId });
 } 

export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, courseUpdates);
}

