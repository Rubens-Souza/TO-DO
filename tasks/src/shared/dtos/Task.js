class Task {

    constructor(title, deadline=null, conclusion=null) {
        this.id = `${title}${Math.random()}`;
        this.title = title;
        this.deadline = deadline;
        this.conclusion = conclusion;
    }

}

export default Task;