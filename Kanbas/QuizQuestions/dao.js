import model from "./model.js";

export function findAllQuestions() {
  return model.find()
}
export function findQuestionsForQuiz(quizId) {
  return model.find({ quiz: quizId });
}

export function createQuestion(question) {
  delete question._id
  return model.create(question);
}

export function deleteQuestion(questionId) {
  return model.deleteOne({ _id: questionId });
}

export function updateQuestion(questionId, questionUpdates) {
  return model.findByIdAndUpdate({ _id: questionId }, questionUpdates, { new: true });
}

