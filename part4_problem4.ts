function maxSequence(arr: number[]): number {
  // Your Code Here
  let current_max: number = arr[0],
    max_so_far: number = arr[0];
  for (let i: number = 1; i < arr.length; i++) {
    current_max = Math.max(arr[i], current_max + arr[i]);
    max_so_far = Math.max(max_so_far, current_max);
  }
  return max_so_far;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSequence([-2, -5, 6, -2, -3, 1, 5, -6])); // 7
console.log(maxSequence([-2, -3, 4, -1, -2, 1, 5, -3])); // 7
console.log(maxSequence([-2, -5, 6, -2, -3, 1, 6, -6])); // 8
console.log(maxSequence([-2, -5, 6, 2, -3, 1, 6, -6])); // 12
