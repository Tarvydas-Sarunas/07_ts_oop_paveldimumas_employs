import Employee from './class/employee.class.js';
import Freelancer from './class/freelancer.class.js';
import MyTask from './class/myTask.class.js';
import UI from './class/ui.class.js';
const workingPplArr = [new Employee('James', 'Bond', 100), new Employee('Alex', 'Buaze', 50), new Employee('Banzai', 'Sakamato', 180)];
UI.renderEmplSelect(workingPplArr);
UI.addOneEmpl(workingPplArr[0]);
UI.addOneEmpl(workingPplArr[1]);
UI.addHoursUi(workingPplArr);
workingPplArr[0].work(60);
workingPplArr.forEach((eObj) => {
    console.log('alga', eObj.calcPay());
});
const freeArr = [new Freelancer('Tom', 'Crus'), new Freelancer('Evgenij', 'Padubnij')];
const tasksArr = [new MyTask('footer', 500), new MyTask('header', 300), new MyTask('main', 200), new MyTask('navigation wih react', 400)];
UI.addOneFreel(freeArr[0]);
UI.addOneFreel(freeArr[1]);
freeArr[0].assingJob(tasksArr[0]);
freeArr[0].assingJob(tasksArr[1]);
freeArr[0].assingJob(tasksArr[2]);
freeArr[1].assingJob(tasksArr[1]);
freeArr[0].completeTaskFromArr(tasksArr[0].id);
freeArr[0].completeTaskFromArr(tasksArr[1].id);
freeArr[0].completeTaskFromArr(tasksArr[2].id);
const darbininkuArr = [...workingPplArr, ...freeArr];
UI.printAlgos(darbininkuArr);
console.table(darbininkuArr);
//# sourceMappingURL=app.js.map