/*
OOP - "objektinis" programavimas

Klase yra kaip "receptura".
O is jos sukurtas objektas, jau yra "valgomas".

Klase sudaro:
- savybes (properties)
- funkcionalumas (methods)
*/

const person = {
    isMarried: true,
    name: 'Jonas',
    age: 99,
};

class Table {
    constructor(selector, title, emptyTableText) {
        // this - lt. šis, šito, šio
        // this - kontekstinis kintamasis

        this.selector = selector;
        this.DOM = null;
        this.titleDOM = null;
        this.tableDOM = null;
        this.emptyTableMsgDOM = null;

        this.title = title;
        this.emptyTableText = emptyTableText;
        this.columnNames = [];

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

        return true;
    }

    isValidTableElement() {
        this.tableDOM = this.DOM.querySelector('.table-content');

        if (this.tableDOM === null) {
            return false;
        }

        return true;
    }

    addColumn(columnName) {
        if (typeof columnName !== 'string') {
            return 'ERROR: stulpelio pavadinimas turi buti "string" tipo';
        }

        columnName = columnName.trim().replace(/  +/g, ' ');

        if (columnName === '') {
            return 'ERROR: stulpelio pavadinimas turi buti ne tuscias tekstas';
        }

        this.columnNames.push(columnName);
    }

    renderColumns() {
        let HTML = '';

        for (const column of this.columnNames) {
            HTML += `
                <div class="table-column">
                    <h2>${column}</h2>
                    <ul>
                        <li>TASK 1</li>
                        <li>TASK 2</li>
                        <li>TASK 3</li>
                    </ul>
                </div>`;
        }

        this.tableDOM.innerHTML = HTML;
    }
}

export { Table };