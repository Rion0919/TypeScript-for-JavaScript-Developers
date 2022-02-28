export {};

let profile1: object = {
  name: "rion"
};
profile1 = { birthYear: 2001 }

let profile2: { name: string } = {
  name: "rion"
}
profile2 = { name: "masayuki" }
// profile2 = { name: 2001 }
// profile2 = { birthYear: 2001 }