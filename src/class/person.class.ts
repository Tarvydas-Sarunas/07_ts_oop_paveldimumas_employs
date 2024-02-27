export default abstract class Person {
  constructor(protected firstName: string, protected lastName: string) {}

  printFullName(): string {
    const prisistatymas = `${this.firstName} ${this.lastName}`;
    console.log(prisistatymas);
    return prisistatymas;
  }

  abstract calcPay(): number;
}
