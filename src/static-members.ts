export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "Rion";
  static lastName: string = "Yamada";

  static work() {
    return `Hey, ${this.firstName}! Hello!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());

