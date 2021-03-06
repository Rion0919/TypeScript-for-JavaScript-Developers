export {};

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

const card = new MyNumberCard("Rion", 1234567890);
// card.owner = "rion";
console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());