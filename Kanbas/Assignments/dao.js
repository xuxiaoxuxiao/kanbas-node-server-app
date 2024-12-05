import model from "./model.js";

export function findAllAssignments() {
  return model.find();
}
export function findAssignmentsForCourse(courseId) {
  // const { assignments } = Database;
  // const assignmentsForCourse = assignments.filter((assignment) =>
  //   assignment.course === courseId);
  // return assignmentsForCourse;
  return model.find({ course: courseId });
}

export function createAssignment(assignment) {
  // const newAssignment = { ...assignment, _id: Date.now().toString() };
  // Database.assignments = [...Database.assignments, newAssignment];
  // return newAssignment;
  delete assignment._id
  return model.create(assignment);
}

export function deleteAssignment(assignmentId) {
  // const { assignments } = Database;
  // Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
  return model.deleteOne({ _id: assignmentId });
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  // const { assignments } = Database;
  // const assignment = assignments.find((assignment) => assignment._id === assignmentId);
  // Object.assign(assignment, assignmentUpdates);
  // return assignment;
  return model.findByIdAndUpdate({ _id: assignmentId }, assignmentUpdates, { new: true });

}

