export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const meTokyo = new Japanese.Tokyo.Person('Rion');
console.log(meTokyo.name);
const meOsaka = new Japanese.Osaka.Person('masayuki');
console.log(meOsaka.name);
const mj = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(mj);
