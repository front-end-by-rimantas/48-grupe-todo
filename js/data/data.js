const data = {
    tasks: [
        {
            title: 'Išsivalyti dantis',
            description: 'Nes reikia',
            status: 'done',
        },
        {
            title: 'Reikia pasidaryti arbatos',
            description: 'Reikia jog butu slapia ir silta',
            status: 'done',
        },
        {
            title: 'Pasimokyti apie DOM',
            description: 'Vis dar ir dar daug 👀👍',
            status: 'in-progress',
        },
        {
            title: 'Paklausti apie "ryto klausimus"',
            description: 'Gal turės ką paklausti? 🤔',
            status: 'in-progress',
        },
        {
            title: 'Git',
            description: 'git commit add, git commit -m, git push',
            status: 'todo',
        },
    ],
    columns: [
        {
            title: 'Task ready',
            status: 'todo',
        },
        {
            title: 'In progress',
            status: 'in-progress',
        },
        {
            title: 'Needs review',
            status: 'review',
        },
        {
            title: 'Done',
            status: 'done',
        },
    ],
};

export { data };