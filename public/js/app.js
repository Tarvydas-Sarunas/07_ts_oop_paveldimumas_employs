import Employee from './class/employee.class.js';
import Freelancer from './class/freelancer.class.js';
import MyTask from './class/myTask.class.js';
console.log('hi from ts');
const workingPplArr = [new Employee('James', 'Bond', 100), new Employee('Alex', 'BuazeFree', 50)];
console.table(workingPplArr);
workingPplArr[0].work(60);
workingPplArr.forEach((eObj) => {
    console.log('alga', eObj.calcPay());
});
const nameAndPay = workingPplArr.map((eObj) => {
    return {
        name: eObj.printFullName(),
        pay: eObj.calcPay(),
    };
});
console.log('nameAndPay ===', nameAndPay);
const freeArr = [new Freelancer('Tom', 'Crus'), new Freelancer('Evgenij', 'Padubnij')];
console.table(freeArr);
const tasksArr = [new MyTask('footer', 500), new MyTask('header', 300), new MyTask('main', 200), new MyTask('navigation wih react', 400)];
console.table(tasksArr);
freeArr[0].assingJob(tasksArr[0]);
freeArr[0].assingJob(tasksArr[1]);
freeArr[0].assingJob(tasksArr[2]);
freeArr[1].assingJob(tasksArr[1]);
freeArr[0].completeTaskFromArr(tasksArr[0].id);
freeArr[0].completeTaskFromArr(tasksArr[1].id);
freeArr[0].completeTaskFromArr(tasksArr[2].id);
console.table(tasksArr);
console.log('freeArr[0] ===', freeArr[0]);
console.log('freeArr[1] ===', freeArr[1]);
console.log('freeArr[0].calcPay()', freeArr[0].calcPay());
const pay = freeArr[0].calcPay();
//# sourceMappingURL=app.js.map