export {};

const fn = () => 43;

let numberAny: any = fn();
let numberUnknown: unknown = fn();

let sumAny = numberAny + 10;
if(typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}