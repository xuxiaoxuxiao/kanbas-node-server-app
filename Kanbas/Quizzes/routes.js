import * as dao from "./dao.js";
import * as quizzesDao from "../Quizzes/dao.js";

export default function QuizzesRoutes(app) {
    app.put("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        delete quizUpdates._id
        const updatedQuiz = await quizzesDao.updateQuiz(quizId, quizUpdates);
        res.status(204).send(updatedQuiz);
    });

    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        await quizzesDao.deleteQuiz(quizId);
        res.sendStatus(204);
    });

}

