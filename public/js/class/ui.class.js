import createHtmlEL from '../helper/createEl.js';
class UI {
    static addOneEmpl(emObj) {
        const liEl = createHtmlEL('li', { class: 'list-group-item d-flex gap-2 justify-content-between align-items-center' });
        const titleEl = createHtmlEL('h3', { class: 'fs-5' }, emObj.printFullName());
        const payEl = createHtmlEL('p', { class: 'mb-0' }, emObj.payPerHour.toString());
        liEl.append(titleEl, payEl);
        if (UI.employeeUlEl === null)
            return console.warn('toks elementas nerastas');
        UI.employeeUlEl.append(liEl);
    }
    static addOneFreel(emObj) {
        const liEl = createHtmlEL('li', { class: 'list-group-item d-flex gap-2 justify-content-between align-items-center' });
        const titleEl = createHtmlEL('h3', { class: 'fs-5' }, emObj.printFullName());
        const payEl = createHtmlEL('p', { class: 'mb-0' }, emObj.calcPay().toString());
        liEl.append(titleEl, payEl);
        if (UI.freelancerUlEl === null)
            return console.warn('toks elementas nerastas');
        UI.freelancerUlEl.append(liEl);
    }
}
UI.employeeUlEl = document.getElementById('empl');
UI.freelancerUlEl = document.getElementById('freec');
export default UI;
//# sourceMappingURL=ui.class.js.map