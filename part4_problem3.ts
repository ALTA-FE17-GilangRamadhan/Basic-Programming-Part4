function primaSegiEmpat(wide: number, high: number, start: number): number | string | number[] {
  // Your Code Here
  let arrPrime: number[] = [];
  let length: number = wide * high;
  let result: string = "";
  let sum: number = 0;

  for (let i: number = start; i <= 1000; i++) {
    let flag: number = 0;

    for (let j: number = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    if (i > 1 && flag == 0 && arrPrime.length != length) {
      arrPrime.push(i);
    }
  }

  let z: number = 0;
  for (let x: number = 1; x <= high; x++) {
    for (let y: number = 1; y <= wide; y++) {
      if (arrPrime[z] > 10) {
        result += arrPrime[z] + " ";
      } else {
        result += arrPrime[z] + "  ";
      }
      z++;
    }
    result += "\n";
  }

  arrPrime.forEach((num) => {
    sum += num;
  });

  result += sum + "\n";

  return result;
}

console.log(primaSegiEmpat(2, 3, 13));
/*
17 19
23 29
31 37
156
*/
console.log(primaSegiEmpat(5, 2, 1));
/*
2  3  5  7 11
13 17 19 23 29
129
*/
