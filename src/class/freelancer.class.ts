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

  public completeTaskFromArr(idToComplete: number): void {
    // sukti cikla per darbu masyva surasti darba su id lygiu su id tu complete ir padaryti ji baigtu
    const found: MyTask | undefined = this.jobs.find((jObj) => jObj.id === idToComplete);
    console.log('found ===', found);
    if (!found) return console.warn('darbas nerastas');
    found.isDone = true;
  }

  override calcPay(): number {
    return 3;
  }
}
