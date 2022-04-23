import { General } from "./General";

class Category extends General {

    title;

    constructor(title) {
        super();
        this.title = title;
    }
}

export { Category }