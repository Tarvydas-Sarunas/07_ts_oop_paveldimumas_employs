export default abstract class Person {
  private static count = 0;
  public id: number;

  constructor(protected firstName: string, protected lastName: string) {
    this.id = ++Person.count;
  }

  printFullName(): string {
    const prisistatymas = `${this.firstName} ${this.lastName}`;
    // console.log(prisistatymas);
    return prisistatymas;
  }

  abstract calcPay(): number;
}
