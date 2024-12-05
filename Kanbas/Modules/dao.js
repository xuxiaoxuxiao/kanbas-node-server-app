import model from "./model.js";

export function updateModule(moduleId, moduleUpdates) {
    return model.findByIdAndUpdate({ _id: moduleId }, moduleUpdates, { new: true });
}

export function deleteModule(moduleId) {
    return model.deleteOne({ _id: moduleId });
}

export function createModule(module) {
    delete module._id
    return model.create(module);
}

export function findModulesForCourse(courseId) {
    return model.find({ course: courseId });
}


