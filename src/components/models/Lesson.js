import { General } from "./General";

class Lesson extends General {

    courseId;
    description;
    next;
    previous;
    title;
    url;
    status;

    constructor(courseId, description, next, previous, title, url) {
        super();
        this.courseId = courseId;
        this.description = description;
        this.next = next;
        this.previous = previous;
        this.title = title;
        this.url = url;
        this.status = 1;
    }
}

export { Lesson }