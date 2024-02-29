import createHtmlEL from '../helper/createEl.js';
import Employee from './employee.class.js';
import Freelancer from './freelancer.class.js';

export default class UI {
  private static employeeUlEl = document.getElementById('empl') as HTMLUListElement | null;
  private static freelancerUlEl = document.getElementById('freec') as HTMLUListElement | null;

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
    if (UI.employeeUlEl === null) return; // console.warn('toks elementas nerastas');
    UI.employeeUlEl.append(liEl);
  }

  public static addOneFreel(emObj: Freelancer) {
    // sukurti li ir patalpinti ji emploeeUlEl

    /* <li class="list-group-item d-flex gap-2 align-items-center ">
          <h3>Name</h3>
          <p class="mb-0">Job Count</p>
        </li>*/
    const liEl = createHtmlEL<HTMLUListElement>('li', { class: 'list-group-item d-flex gap-2 justify-content-between align-items-center' });
    const titleEl = createHtmlEL<HTMLTitleElement>('h3', { class: 'fs-5' }, emObj.printFullName());
    const payEl = createHtmlEL<HTMLParagraphElement>('p', { class: 'mb-0' }, emObj.calcPay().toString());
    liEl.append(titleEl, payEl);
    if (UI.freelancerUlEl === null) return; // console.warn('toks elementas nerastas');
    UI.freelancerUlEl.append(liEl);
  }

  public static renderEmplSelect(arr: Employee[]) {
    const selectEl = document.getElementById('empl-sel') as HTMLSelectElement | null;
    if (selectEl === null) return; // console.warn('toks elementas nerastas');
    arr.forEach((eObj) => {
      const opt = createHtmlEL<HTMLOptionElement>('option', { value: eObj.id.toString() }, eObj.printFullName());
      selectEl.append(opt);
    });
  }

  public static addHoursUi(arr: Employee[]) {
    // nusitaikyti i forma
    const formEl = document.getElementById('add-hours') as HTMLFormElement | null;
    const selectEl = document.getElementById('empl-sel') as HTMLSelectElement | null;
    const inputEl = document.getElementById('how-many') as HTMLInputElement | null;

    // paimti reiksmes is selcet ir input
    if (formEl === null || selectEl === null || inputEl === null) {
      throw new Error('tokie lementai nerasta');
    }

    formEl.addEventListener('submit', (e) => {
      e.preventDefault();
      // Vérification de la présence des éléments
      const witchEmployee = selectEl.value;
      const howMutch: number = +inputEl.value || 0;
      const amployeeFound = arr.find((eObj) => eObj.id === +witchEmployee);
      if (amployeeFound === undefined) return; // console.log('nerastas objektas');
      // console.log('witchEmployee ===', witchEmployee);
      // console.log('howMutch ===', howMutch);
      // console.log('amployeeFind ===', amployeeFound);
      amployeeFound.work(howMutch);
      // console.table(arr);

      formEl.reset();
    });
  }

  /*<tr>
            <td>Mike</td>
            <td>500</td>
          </tr> */
  public static printAlgos(arr: (Employee | Freelancer)[]) {
    const algosBody = document.getElementById('algos-body') as HTMLTableElement | null;
    arr.forEach((wObj) => {
      const trEl = document.createElement('tr');
      const nameCell = createHtmlEL<HTMLTableCellElement>('td', {}, wObj.printFullName());
      const payCell = createHtmlEL<HTMLTableCellElement>('td', {}, wObj.calcPay().toString());
      trEl.append(nameCell, payCell);
      if (algosBody === null) throw new Error('nerastas table');
      algosBody.append(trEl);
    });
  }
}
