import { Table } from "../components/Table.js";

const todo = new Table(
    'Homepage design',
    'Panašu, jog dar neturi jokių užduočių'
);

const todo2 = new Table(
    'Web development tasks',
    'Nėra sukurta jokių užduočių. Susikurk!'
);

console.log(todo);
console.log(todo2);

console.log(todo.labas('Lietuva'));
console.log(todo2.labas('Latvija'));

console.log(todo.labanakt('vaikučiams'));
console.log(todo2.labanakt('suaugusiems'));