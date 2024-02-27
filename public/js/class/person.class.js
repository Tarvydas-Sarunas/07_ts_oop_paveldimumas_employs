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
}
//# sourceMappingURL=person.class.js.map