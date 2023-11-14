function primeX(number: number): number | number[] | any {
  // Your Code Here
  let arrPrime: number[] = [0];

  for (let i: number = 2; i <= 1000; i++) {
    let flag: number = 0;

    for (let j: number = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    if (i > 1 && flag == 0) {
      arrPrime.push(i);
    }
  }

  return arrPrime[number];
}

console.log(primeX(1)); // 2
console.log(primeX(5)); // 11
console.log(primeX(10)); // 29
console.log(primeX(15)); // 47
console.log(primeX(20)); // 71
