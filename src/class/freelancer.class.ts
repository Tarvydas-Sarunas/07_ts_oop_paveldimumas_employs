// import Employee from "./employee.class.js";
import MyTask from './myTask.class.js';
import Person from './person.class.js';

export default class Freelancer extends Person {
  private jobs: MyTask[] = [];
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  assingJob(newJob: MyTask) {
    if (!(newJob instanceof MyTask)) {
      console.warn('netikras darbas', newJob);
      return;
    }
    this.jobs.push(newJob);
    console.table(this.jobs);
  }
}
