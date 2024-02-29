import MyTask from './myTask.class.js';
import Person from './person.class.js';
export default class Freelancer extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName);
        this.jobs = [];
    }
    assingJob(newJob) {
        if (!(newJob instanceof MyTask)) {
            return;
        }
        this.jobs.push(newJob);
    }
    completeTaskFromArr(idToComplete) {
        const found = this.jobs.find((jObj) => jObj.id === idToComplete);
        if (!found)
            return;
        found.isDone = true;
    }
    calcPay() {
        const completedTAsk = this.jobs.filter((tObj) => tObj.isDone === true);
        const sum = completedTAsk.reduce((tot, tObj) => tot + tObj.amount, 0);
        this.jobs = this.jobs.filter((tObj) => tObj.isDone !== true);
        return sum;
    }
}
//# sourceMappingURL=freelancer.class.js.map