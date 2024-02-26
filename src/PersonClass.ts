'use strict';
console.log('PersonClass.js file was loaded');

interface PersonInterface {
  name: string;
  age: number;
  town: string;
  hasCar: boolean;
}

interface StudentInterface extends PersonInterface {
  type: 'University' | 'Coladge' | 'School';
  studyYear: number;
}

// sukurti darbuotojas interface kuris paveldi is person interface
// ir prideda workPlace imones pavadinimas
// ir paregas : bus : 'personalas' | 'vadovas | direktorius
interface DarbuotojasIf extends PersonInterface {
  workPlace: string;
  pareigos: 'personalas' | 'vadovas' | 'direktorius';
}

class Person implements PersonInterface {
  // spec funkcija kuri yra paleidzima kai sukuriamas objektas
  constructor(public name: string, public age: number, public town: string, public hasCar: boolean) {}

  // kiti metodai
  // sukurti info() metodas kuri iskonsolinu "Mano vardas xx as is xx miesto"

  public info(): void {
    const sakinys = `Mano vardas ${this.name} as is ${this.town} miesto`;
    console.log(sakinys);
  }
  // metodas pakeisti miestui
  public changeTown(newTown: string): void {
    // validation

    // const password = 123456;
    // // validacijos
    // if (!argPassword) {
    //   console.warn('iveskite slaptazodi');
    //   return;
    // }
    // if (password !== argPassword) {
    //   console.warn('neteisingas slaptazodis');
    //   return;
    // }
    this.town = newTown;
    console.log(`${this.name} town was changed to ${newTown}`);
  }
}

const user3 = new Person('James', 25, 'London', true);
console.log('user3 ===', user3);
user3.info();
user3.changeTown('Exeter');
console.log('user3 ===', user3);

class Student extends Person implements StudentInterface {
  constructor(
    name: string,
    age: number,
    town: string,
    hasCar: boolean,
    public type: StudentInterface['type'],
    public studyYear: StudentInterface['studyYear']
  ) {
    super(name, age, town, hasCar);
  }
}

const st1 = new Student('Borisas', 30, 'Kaunas', true, 'University', 2);
console.log('st1 ===', st1);

st1.info();

// sukurti klase darbuotojas
// darbuotojas paveldi klase person
class Darbuotojas extends Person implements DarbuotojasIf {
  constructor(
    name: string,
    age: number,
    town: string,
    hasCar: boolean,
    public workPlace: DarbuotojasIf['workPlace'],
    public pareigos: DarbuotojasIf['pareigos']
  ) {
    super(name, age, town, hasCar);
  }
}

// sukurti nauja objekta ir paziureti ar gauname tinkama objekta

const darb1 = new Darbuotojas('Bronius', 15, 'Siauliai', true, 'Darbo Birza', 'vadovas');
console.log('darb1 ===', darb1);

darb1.info();

class Vadovas extends Darbuotojas {
  public emploees: DarbuotojasIf[];
  constructor(name: string, age: number, town: string, hasCar: boolean, workPlace: DarbuotojasIf['workPlace']) {
    super(name, age, town, hasCar, workPlace, 'vadovas');
    this.emploees = [];
  }

  addEmployee(em: DarbuotojasIf) {
    this.emploees.push(em);
  }
}

new Vadovas('Raimis', 55, 'Klaipeda', false, 'Uostas');
