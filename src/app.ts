import Employee from './class/employee.class.js';
import Freelancer from './class/freelancer.class.js';
import MyTask from './class/myTask.class.js';
// import Freelancer from './class/freelancer.class.js';
// import Person from './class/person.class.js';

console.log('hi from ts');

const workingPplArr: Employee[] = [new Employee('James', 'Bond', 100), new Employee('Alex', 'BuazeFree', 50)];
console.table(workingPplArr);

workingPplArr[0].work(60);

workingPplArr.forEach((eObj) => {
  console.log('alga', eObj.calcPay());
});

const nameAndPay: { name: string; pay: number }[] = workingPplArr.map((eObj) => {
  return {
    name: eObj.printFullName(),
    pay: eObj.calcPay(),
  };
});
console.log('nameAndPay ===', nameAndPay);

const freeArr: Freelancer[] = [new Freelancer('Tom', 'Crus'), new Freelancer('Evgenij', 'Padubnij')];
console.table(freeArr);

const tasksArr: MyTask[] = [new MyTask('footer', 500), new MyTask('header', 300), new MyTask('main', 200), new MyTask('navigation wih react', 400)];
console.table(tasksArr);
