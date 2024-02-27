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
}
//# sourceMappingURL=freelancer.class.js.map