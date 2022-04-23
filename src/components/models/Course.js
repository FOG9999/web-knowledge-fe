import { General } from "./General";

class Course extends General {

    categoryId;
    parentCourseId;
    status;

    constructor(categoryId, parentCourseId) {
        super();
        this.categoryId = categoryId;
        this.parentCourseId = parentCourseId;
        this.status = 1;
    }
}

export { Course }