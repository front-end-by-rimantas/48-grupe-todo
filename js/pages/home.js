import { Table } from "../components/Table.js";

const todo = new Table(
    'main',
    'Homepage design',
    'Panašu, jog dar neturi jokių užduočių',
);

todo.addColumn('Backlog');
todo.addColumn('In progress');
todo.addColumn('Review');
todo.addColumn('Done');

todo.renderColumns();
