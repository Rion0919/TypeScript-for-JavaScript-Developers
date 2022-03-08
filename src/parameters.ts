export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
}
debugProfile("Rion", 20);

type Profile = Parameters<typeof debugProfile>;
const profile: Profile = ["Gloria", 70];
debugProfile(...profile);