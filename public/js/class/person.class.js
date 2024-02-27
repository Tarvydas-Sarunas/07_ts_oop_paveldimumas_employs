export default class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    printFullName() {
        const prisistatymas = `${this.firstName} ${this.lastName}`;
        console.log(prisistatymas);
        return prisistatymas;
    }
    calcPay() {
        throw new Error('reikia aprasyti calcPay');
    }
}
//# sourceMappingURL=person.class.js.map