import * as enrollmentsDao from "./dao.js";

export default function enrollUserInCourse(app) {
    app.post("/api/enrollments/:userId/:courseId", async (req, res) => {
        const { userId, courseId } = req.params;
        const enrollments = await enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.json(enrollments);
    });

    app.delete("/api/enrollments/:userId/:courseId", async (req, res) => {
        const { userId, courseId } = req.params;
        const enrollments = await enrollmentsDao.unenrollUserInCourse(userId, courseId);
        res.json(enrollments);
    });

    app.get("/api/enrollments", (req, res) => {
        const enrollments = enrollmentsDao.findAllEnrollments()
        res.json(enrollments)
    })
};