import createHtmlEL from '../helper/createEl.js';
class UI {
    static addOneEmpl(emObj) {
        const liEl = createHtmlEL('li', { class: 'list-group-item d-flex gap-2 justify-content-between align-items-center' });
        const titleEl = createHtmlEL('h3', { class: 'fs-5' }, emObj.printFullName());
        const payEl = createHtmlEL('p', { class: 'mb-0' }, emObj.payPerHour.toString());
        liEl.append(titleEl, payEl);
        if (UI.employeeUlEl === null)
            return;
        UI.employeeUlEl.append(liEl);
    }
    static addOneFreel(emObj) {
        const liEl = createHtmlEL('li', { class: 'list-group-item d-flex gap-2 justify-content-between align-items-center' });
        const titleEl = createHtmlEL('h3', { class: 'fs-5' }, emObj.printFullName());
        const payEl = createHtmlEL('p', { class: 'mb-0' }, emObj.calcPay().toString());
        liEl.append(titleEl, payEl);
        if (UI.freelancerUlEl === null)
            return;
        UI.freelancerUlEl.append(liEl);
    }
    static renderEmplSelect(arr) {
        const selectEl = document.getElementById('empl-sel');
        if (selectEl === null)
            return;
        arr.forEach((eObj) => {
            const opt = createHtmlEL('option', { value: eObj.id.toString() }, eObj.printFullName());
            selectEl.append(opt);
        });
    }
    static addHoursUi(arr) {
        const formEl = document.getElementById('add-hours');
        const selectEl = document.getElementById('empl-sel');
        const inputEl = document.getElementById('how-many');
        if (formEl === null || selectEl === null || inputEl === null) {
            throw new Error('tokie lementai nerasta');
        }
        formEl.addEventListener('submit', (e) => {
            e.preventDefault();
            const witchEmployee = selectEl.value;
            const howMutch = +inputEl.value || 0;
            const amployeeFound = arr.find((eObj) => eObj.id === +witchEmployee);
            if (amployeeFound === undefined)
                return;
            amployeeFound.work(howMutch);
            formEl.reset();
        });
    }
    static printAlgos(arr) {
        const algosBody = document.getElementById('algos-body');
        arr.forEach((wObj) => {
            const trEl = document.createElement('tr');
            const nameCell = createHtmlEL('td', {}, wObj.printFullName());
            const payCell = createHtmlEL('td', {}, `${wObj.calcPay().toFixed(2)} €`);
            trEl.append(nameCell, payCell);
            if (algosBody === null)
                throw new Error('nerastas table');
            algosBody.append(trEl);
        });
    }
}
UI.employeeUlEl = document.getElementById('empl');
UI.freelancerUlEl = document.getElementById('freec');
export default UI;
//# sourceMappingURL=ui.class.js.map