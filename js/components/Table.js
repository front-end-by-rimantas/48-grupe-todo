/*
OOP - "objektinis" programavimas

Klase yra kaip "receptura".
O is jos sukurtas objektas, jau yra "valgomas".

Klase sudaro:
- savybes (properties)
- funkcionalumas (methods)
*/

class Table {
    constructor(pavadinimas, tusciasTekstas) {
        // this - lt. šis, šito, šio
        // this - kontekstinis kintamasis
        this.title = pavadinimas;
        this.emptyTableText = tusciasTekstas;
        this.columnNames = [];
        this.visibleColumnsCount = 0;
        this.hiddenColumnsCount = 0;
    }

    labas(country) {
        return `Labas rytas, ${country}!`;
    }

    labanakt(audience) {
        return `Labanakt, ${audience}!`;
    }
}

export { Table };