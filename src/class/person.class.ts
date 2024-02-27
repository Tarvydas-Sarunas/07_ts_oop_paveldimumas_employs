export default class Person {
  constructor(protected firstName: string, protected lastName: string) {}

  printFullName(): string {
    const prisistatymas = `${this.firstName} ${this.lastName}`;
    console.log(prisistatymas);
    return prisistatymas;
  }

  calcPay() {
    throw new Error('reikia aprasyti calcPay');
  }
}
