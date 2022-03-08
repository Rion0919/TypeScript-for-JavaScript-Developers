export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "Rion",
  age: 20,
};

me.age++;
console.log({ me });

type PersonalDataType = Readonly<Profile>;
const friend: PersonalDataType = {
  name: "masayuki",
  age: 22,
};
// friend.age++;