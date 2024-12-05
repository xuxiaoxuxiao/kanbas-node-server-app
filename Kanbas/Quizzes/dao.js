import model from "./model.js";

export function findAllQuizzes() {
  return model.find()
}
export function findQuizzesForCourse(courseId) {
  // const { quizzes } = Database;
  // const quizzesForCourse = quizzes.filter((quiz) =>
  //   quiz.course === courseId);
  // return quizzesForCourse;
  return model.find({ course: courseId });
}

export function createQuiz(quiz) {
  // const newQuiz = { ...quiz, _id: Date.now().toString() };
  // Database.quizzes = [...Database.quizzes, newQuiz];
  // return newQuiz;
  delete quiz._id
  return model.create(quiz);
}

export function deleteQuiz(quizId) {
  // const { quizzes } = Database;
  // Database.quizzes = quizzes.filter((quiz) => quiz._id !== quizId);
  return model.deleteOne({ _id: quizId });

}

export function updateQuiz(quizId, quizUpdates) {
  // const { quizzes } = Database;
  // const quiz = quizzes.find((quiz) => quiz._id === quizId);
  // Object.assign(quiz, quizUpdates);
  // return quiz;
  return model.findByIdAndUpdate({ _id: quizId }, quizUpdates, { new: true });

}

