import createHtmlEL from '../helper/createEl.js';
class UI {
    constructor() {
        if (UI.employeeUlEl === null || UI.freelancerUlEl === null) {
            console.warn('toks elementas nerastas');
        }
    }
    static addOneEmpl(emObj) {
        var _a;
        const liEl = createHtmlEL('li', { class: 'list-group-item d-flex gap-2 justify-content-between align-items-center' });
        const titleEl = createHtmlEL('h3', { class: 'fs-5' }, emObj.printFullName());
        const payEl = createHtmlEL('p', { class: 'mb-0' }, emObj.payPerHour.toString());
        liEl.append(titleEl, payEl);
        (_a = UI.employeeUlEl) === null || _a === void 0 ? void 0 : _a.append(liEl);
    }
}
UI.employeeUlEl = document.getElementById('empl');
UI.freelancerUlEl = document.getElementById('freec');
export default UI;
//# sourceMappingURL=ui.class.js.map