import * as dao from "./dao.js";
export default function EnrollmentRoutes(app) {
  app.post("/api/courses/:userId/:courseId/enroll", (req, res) => {
    const { courseId } = req.params;
    const { userId } = req.params;
    dao.enrollUserInCourse(userId, courseId);
    res.sendStatus(200);
  });
  app.delete("/api/courses/:userId/:courseId/unenroll", (req, res) => {
    const { courseId } = req.params;
    const { userId } = req.params;
    dao.unenrollUserInCourse(userId, courseId);
    res.sendStatus(200);
  });
}