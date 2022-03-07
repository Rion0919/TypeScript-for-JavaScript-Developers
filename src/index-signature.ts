export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: "Rion", underTwenty: false };
profile.name = "Rion";
profile.age = 20;
profile.nationality = "Japan";