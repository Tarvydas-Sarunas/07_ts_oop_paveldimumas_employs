import createHtmlEL from '../helper/createEl.js';
import Employee from './employee.class.js';

export default class UI {
  private static employeeUlEl = document.getElementById('empl') as HTMLUListElement | null;
  private static freelancerUlEl = document.getElementById('freec') as HTMLUListElement | null;

  constructor() {
    if (UI.employeeUlEl === null || UI.freelancerUlEl === null) {
      console.warn('toks elementas nerastas');
    }
  }
  // public static renderEm(arr: ) {}

  public static addOneEmpl(emObj: Employee) {
    // sukurti li ir patalpinti ji emploeeUlEl

    /* <li class="list-group-item d-flex gap-2 align-items-center ">
          <h3>Name</h3>
          <p class="mb-0">Job Count</p>
        </li>*/
    const liEl = createHtmlEL<HTMLUListElement>('li', { class: 'list-group-item d-flex gap-2 justify-content-between align-items-center' });
    const titleEl = createHtmlEL<HTMLTitleElement>('h3', { class: 'fs-5' }, emObj.printFullName());
    const payEl = createHtmlEL<HTMLParagraphElement>('p', { class: 'mb-0' }, emObj.payPerHour.toString());
    liEl.append(titleEl, payEl);

    UI.employeeUlEl?.append(liEl);
  }
}
