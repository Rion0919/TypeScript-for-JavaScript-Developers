export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person("Taro", 30);
console.log(taro);

type PersonType = typeof Person;
type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ["Rion", 20];
const rion = new Person(...profile);
console.log(rion);