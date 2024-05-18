export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


toString() {
    return `User { name: ${this.name}, age: ${this.age} }`;
}
}

export function printName(user) {
    console.log(`User's name is ${user.name}`);
}

export function printAge(user) {
    console.log(`User is ${user.age} years old`);
}