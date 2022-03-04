export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("Rion");
console.log(myVisaCard.owner);
// myVisaCard.owner = "masayuki";
