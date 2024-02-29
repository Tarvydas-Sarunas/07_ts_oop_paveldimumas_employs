class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = ++Person.count;
    }
    printFullName() {
        const prisistatymas = `${this.firstName} ${this.lastName}`;
        return prisistatymas;
    }
}
Person.count = 0;
export default Person;
//# sourceMappingURL=person.class.js.map