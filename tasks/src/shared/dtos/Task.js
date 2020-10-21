import { EmptyString } from "../../shared/utils/functions/StringUtils";

class Task {

    constructor(title, deadline=null, conclusion=null, concluded=false) {
        this.id = `${title}-${Math.random()}`;
        this.title = title;
        this.deadline = deadline;
        this.conclusion = conclusion;
        this.concluded = concluded;
    }

    static EmptyTask = new Task(EmptyString, null, null, false);

}

export default Task;