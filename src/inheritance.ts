export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return "I can run";
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    // const parenteMessage = super.run();
    // console.log({ parenteMessage });
    return `${this.name} can run ${this.speed}km/h`;
  }
}

console.log(new Animal("Micky").run());
console.log(new Lion("Simba", 80).run());
// const animal = new Animal();
// console.log(animal.run());
// const lion = new Lion();
// console.log(lion.run());