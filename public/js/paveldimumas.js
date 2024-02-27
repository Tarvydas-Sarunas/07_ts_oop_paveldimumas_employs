'use strict';
console.log('PersonClass.js file was loaded');
class Person {
    constructor(name, age, town, hasCar) {
        this.name = name;
        this.age = age;
        this.town = town;
        this.hasCar = hasCar;
    }
    info() {
        const sakinys = `Mano vardas ${this.name} as is ${this.town} miesto`;
        console.log(sakinys);
    }
    changeTown(newTown) {
        this.town = newTown;
        console.log(`${this.name} town was changed to ${newTown}`);
    }
}
const user3 = new Person('James', 25, 'London', true);
console.log('user3 ===', user3);
user3.info();
user3.changeTown('Exeter');
console.log('user3 ===', user3);
class Student extends Person {
    constructor(name, age, town, hasCar, type, studyYear) {
        super(name, age, town, hasCar);
        this.type = type;
        this.studyYear = studyYear;
    }
}
const st1 = new Student('Borisas', 30, 'Kaunas', true, 'University', 2);
console.log('st1 ===', st1);
st1.info();
class Darbuotojas extends Person {
    constructor(name, age, town, hasCar, workPlace, pareigos) {
        super(name, age, town, hasCar);
        this.workPlace = workPlace;
        this.pareigos = pareigos;
    }
}
const darb1 = new Darbuotojas('Bronius', 15, 'Siauliai', true, 'Darbo Birza', 'vadovas');
console.log('darb1 ===', darb1);
darb1.info();
class Vadovas extends Darbuotojas {
    constructor(name, age, town, hasCar, workPlace) {
        super(name, age, town, hasCar, workPlace, 'vadovas');
        this.emploees = [];
    }
    addEmployee(em) {
        this.emploees.push(em);
    }
}
new Vadovas('Raimis', 55, 'Klaipeda', false, 'Uostas');
//# sourceMappingURL=paveldimumas.js.map