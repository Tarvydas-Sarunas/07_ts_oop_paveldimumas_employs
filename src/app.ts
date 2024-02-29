import Employee from './class/employee.class.js';
import Freelancer from './class/freelancer.class.js';
import MyTask from './class/myTask.class.js';
import UI from './class/ui.class.js';
// import Freelancer from './class/freelancer.class.js';
// import Person from './class/person.class.js';

// console.log('hi from ts');

// // nusitaikyti i forma
// const formEl = document.getElementById('add-hours') as HTMLFormElement | null;
// const selectEl = document.getElementById('empl-sel') as HTMLSelectElement | null;
// const inputEl = document.getElementById('how-many') as HTMLInputElement | null;

// // paimti reiksmes is selcet ir input
// if (formEl === null || selectEl === null || inputEl === null) {
//   throw new Error('tokie lementai nerasta');
// }

// formEl.addEventListener('submit', (e) => {
//   e.preventDefault();
//   // Vérification de la présence des éléments
//   const witchEmployee = selectEl.value;
//   const howMutch: number = +inputEl.value || 0;
//   const amployeeFound = workingPplArr.find((eObj) => eObj.id === +witchEmployee);
//   if (amployeeFound === undefined) return // console.log('nerastas objektas');
//   // console.log('witchEmployee ===', witchEmployee);
//   // console.log('howMutch ===', howMutch);
//   // console.log('amployeeFind ===', amployeeFound);
//   amployeeFound.work(howMutch);
//   formEl.reset();
// });

const workingPplArr: Employee[] = [new Employee('James', 'Bond', 100), new Employee('Alex', 'Buaze', 50), new Employee('Banzai', 'Sakamato', 180)];
// console.table(workingPplArr);

UI.renderEmplSelect(workingPplArr);

UI.addOneEmpl(workingPplArr[0]);
UI.addOneEmpl(workingPplArr[1]);

UI.addHoursUi(workingPplArr);

workingPplArr[0].work(60);

workingPplArr.forEach((eObj) => {
  // console.log('alga', eObj.calcPay());
});

const nameAndPay: { name: string; pay: number }[] = workingPplArr.map((eObj) => {
  return {
    name: eObj.printFullName(),
    pay: eObj.calcPay(),
  };
});
// console.log('nameAndPay ===', nameAndPay);

const freeArr: Freelancer[] = [new Freelancer('Tom', 'Crus'), new Freelancer('Evgenij', 'Padubnij')];
// console.table(freeArr);

const tasksArr: MyTask[] = [new MyTask('footer', 500), new MyTask('header', 300), new MyTask('main', 200), new MyTask('navigation wih react', 400)];
// console.table(tasksArr);

UI.addOneFreel(freeArr[0]);
UI.addOneFreel(freeArr[1]);

freeArr[0].assingJob(tasksArr[0]);
freeArr[0].assingJob(tasksArr[1]);
freeArr[0].assingJob(tasksArr[2]);
freeArr[1].assingJob(tasksArr[1]);

freeArr[0].completeTaskFromArr(tasksArr[0].id);
freeArr[0].completeTaskFromArr(tasksArr[1].id);
freeArr[0].completeTaskFromArr(tasksArr[2].id);

// console.table(tasksArr);
// console.log('freeArr[0] ===', freeArr[0]);
// console.log('freeArr[1] ===', freeArr[1]);

// // console.log('freeArr[0].calcPay()', freeArr[0].calcPay());
// const pay = freeArr[0].calcPay();
// // console.log('pay ===', pay);

const darbininkuArr: (Employee | Freelancer)[] = [...workingPplArr, ...freeArr];
UI.printAlgos(darbininkuArr);
console.table(darbininkuArr);
