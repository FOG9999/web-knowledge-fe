import { General } from "./General";

class Block extends General {

    content;
    lessonId;
    next;
    previous;
    type;
    status;

    constructor(content, lessonId, next, previous, type) {
        super();
        this.content = content;
        this.lessonId = lessonId;
        this.next = next;
        this.previous = previous;
        this.type = type;
        this.status = 1;
    }
}

export { Block }