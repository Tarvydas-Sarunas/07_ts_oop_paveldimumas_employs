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
}
//# sourceMappingURL=employee.class.js.map