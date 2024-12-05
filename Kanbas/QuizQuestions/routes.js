import * as dao from "./dao.js";
import * as questionsDao from "../QuizQuestions/dao.js";

export default function QuestionsRoute(app) {
    app.put("/api/questions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        const questionUpdates = req.body;
        delete questionUpdates._id
        const updatedQuestion = await questionsDao.updateQuestion(questionId, questionUpdates);
        res.status(204).send(updatedQuestion);
    });

    app.delete("/api/questions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        await questionsDao.deleteQuestion(questionId);
        res.sendStatus(204);
    });

    app.post("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const question = {
            ...req.body,
            course: quizId,
        };
        const newQuestion = await questionsDao.createQuestion(question);
        res.send(newQuestion);
    });

    app.get("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const questions = await questionsDao.findQuestionsForQuiz(quizId);
        res.json(questions);
    });

}

