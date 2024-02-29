import Person from './person.class.js';
export default class Employee extends Person {
    constructor(firstName, lastName, hourlyPay) {
        super(firstName, lastName);
        this.hourlyPay = hourlyPay;
        this.hoursWorked = 0;
    }
    work(howMany) {
        this.hoursWorked += howMany;
    }
    calcPay() {
        const alga = this.hoursWorked * this.hourlyPay;
        this.hoursWorked = 0;
        return alga;
    }
    get payPerHour() {
        return this.hourlyPay;
    }
}
//# sourceMappingURL=employee.class.js.map