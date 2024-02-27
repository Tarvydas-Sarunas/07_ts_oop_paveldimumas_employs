import MyTask from './myTask.class.js';
import Person from './person.class.js';
export default class Freelancer extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName);
        this.jobs = [];
    }
    assingJob(newJob) {
        if (!(newJob instanceof MyTask)) {
            console.warn('netikras darbas', newJob);
            return;
        }
        this.jobs.push(newJob);
        console.table(this.jobs);
    }
    completeTaskFromArr(idToComplete) {
        const found = this.jobs.find((jObj) => jObj.id === idToComplete);
        console.log('found ===', found);
        if (!found)
            return console.warn('darbas nerastas');
        found.isDone = true;
    }
    calcPay() {
        return 3;
    }
}
//# sourceMappingURL=freelancer.class.js.map