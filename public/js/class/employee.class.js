import Person from './person.class.js';
export default class Employee extends Person {
    constructor(firstName, lastName, hourlyPay) {
        super(firstName, lastName);
        this.hourlyPay = hourlyPay;
        this.hoursWorked = 0;
    }
    work(howMany) {
        console.log(`--${this.firstName} worked for ${howMany} hours`);
        this.hoursWorked += howMany;
    }
    calcPay() {
        const alga = this.hoursWorked * this.hourlyPay;
        console.log(`${this.firstName} ismoketa ${alga.toFixed(2)} €`);
        this.hoursWorked = 0;
        return alga;
    }
}
//# sourceMappingURL=employee.class.js.map