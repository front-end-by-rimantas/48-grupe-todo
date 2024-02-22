/*
OOP - "objektinis" programavimas

Klase yra kaip "receptura".
O is jos sukurtas objektas, jau yra "valgomas".

Klase sudaro:
- savybes (properties)
- funkcionalumas (methods)
*/

import { TaskCard } from "./TaskCard.js";

class Table {
    constructor(selector, title, emptyTableText, data) {
        // this - lt. šis, šito, šio
        // this - kontekstinis kintamasis

        this.selector = selector;
        this.DOM = null;
        this.titleDOM = null;
        this.tableDOM = null;
        this.emptyTableMsgDOM = null;

        this.title = title;
        this.emptyTableText = emptyTableText;
        this.data = data;

        this.tasks = [];    // TaskCard klases objektai

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return 'ERROR: nevalidus selector\'ius';
        }

        if (!this.isValidMainElement()) {
            return 'ERROR: pagal pateikta selector\'iu, nepavyko rasti norimo elemento';
        }

        if (!this.isValidTitleElement()) {
            return 'ERROR: nepavyko rasti "title" elemento';
        }

        if (!this.isValidEmptyTableMsgElement()) {
            return 'ERROR: nepavyko rasti "empty table message" elemento';
        }

        if (!this.isValidTableElement()) {
            return 'ERROR: nepavyko rasti "table" elemento';
        }

        this.createTaskObjects();
        this.renderColumns();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string') {
            return false;
        }

        if (this.selector === '') {
            return false;
        }

        return true;
    }

    isValidMainElement() {
        this.DOM = document.querySelector(this.selector);

        if (this.DOM === null) {
            return false;
        }

        return true;
    }

    isValidTitleElement() {
        this.titleDOM = this.DOM.querySelector('.main-title');

        if (this.titleDOM === null) {
            return false;
        }

        this.titleDOM.innerText = this.title;

        return true;
    }

    isValidEmptyTableMsgElement() {
        this.emptyTableMsgDOM = this.DOM.querySelector('.table-msg');

        if (this.emptyTableMsgDOM === null) {
            return false;
        }

        this.emptyTableMsgDOM.innerText = this.emptyTableText;

        if (this.data.tasks.length > 0) {
            this.emptyTableMsgDOM.style.display = 'none';
        }

        return true;
    }

    isValidTableElement() {
        this.tableDOM = this.DOM.querySelector('.table-content');

        if (this.tableDOM === null) {
            return false;
        }

        return true;
    }

    createTaskObjects() {
        for (const task of this.data.tasks) {
            this.tasks.push(new TaskCard(task));
        }
    }

    renderColumns() {
        let HTML = '';

        for (const column of this.data.columns) {
            let taskListHTML = '';

            for (const taskObj of this.tasks) {
                if (column.status !== taskObj.status) {
                    continue;
                }

                taskListHTML += taskObj.render();
            }

            HTML += `
                <div class="table-column">
                    <h2 class="column-title">${column.title}</h2>
                    <ul class="task-list">${taskListHTML}</ul>
                </div>`;
        }

        this.tableDOM.innerHTML = HTML;
    }
}

export { Table };