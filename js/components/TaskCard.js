class TaskCard {
    constructor(data) {
        this.title = data.title;
        this.description = data.description;
        this.status = data.status;
    }

    render() {
        return `
            <li class="task-card">
                <h3 class="task-title">${this.title}</h3>
                <p class="task-description">${this.description}</p>
            </li>`;
    }
}

export { TaskCard };