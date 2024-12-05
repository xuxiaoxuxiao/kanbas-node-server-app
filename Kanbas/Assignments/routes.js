import * as dao from "./dao.js";
import * as assignmentsDao from "../Assignments/dao.js";

export default function AssignmentRoutes(app) {
    app.put("/api/assignments/:assignmentId", async (req, res) => {
        // const { assignmentId } = req.params;
        // const assignmentUpdates = req.body;
        // assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        // res.sendStatus(204);
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        delete assignmentUpdates._id
        const updatedAssignment = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.status(204).send(updatedAssignment)
    });

    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        // const { assignmentId } = req.params;
        // assignmentsDao.deleteAssignment(assignmentId);
        // res.sendStatus(204);
        const { assignmentId } = req.params;
        await assignmentsDao.deleteAssignment(assignmentId);
        res.sendStatus(204);
    });

}

