import Person from './person.class.js';

export default class Employee extends Person {
  private hoursWorked: number;
  constructor(firstName: string, lastName: string, private hourlyPay: number) {
    super(firstName, lastName);
    this.hoursWorked = 0;
  }

  public work(howMany: number) {
    console.log(`--${this.firstName} worked for ${howMany} hours`);
    this.hoursWorked += howMany;
  }

  public calcPay(): number {
    const alga = this.hoursWorked * this.hourlyPay;
    console.log(`${this.firstName} ismoketa ${alga.toFixed(2)} €`);

    this.hoursWorked = 0;
    return alga;
  }
}
