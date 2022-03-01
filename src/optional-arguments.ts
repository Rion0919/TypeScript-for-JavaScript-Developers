export {};

let bmi = (height: number, weight: number, printable?: boolean): number => {
  const bmi: number = weight / (height * height);
  if(printable) {
    console.log({bmi});
  }
  return bmi;
}

bmi(1.75, 55);
bmi(1.75, 55, true);
bmi(1.75, 55, false);

