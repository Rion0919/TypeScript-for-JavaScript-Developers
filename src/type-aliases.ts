export {};

type Mojiretsu = string;
const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

type Profile = {
  name: string;
  age: number;
}
const example1 = {
  name: 'Rion',
  age: 20
};

const example2: Profile = {
  name: 'Masayuki',
  age: 20
};

type Profile2 = typeof example1;