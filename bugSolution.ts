function add(a: number, b: number): number {
  return a + b;
}

const num1 = 5;
const num2 = parseInt('10', 10); // Convert string to number

const result = add(num1, num2); // Correct: both arguments are numbers
console.log(result); // Output: 15

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseInt(a, 10) : a;
  const numB = typeof b === 'string' ? parseInt(b, 10) : b;

  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Or handle the error appropriately
  }
  return numA + numB;
}

console.log(addSafe(5, '10')); //Output 15
console.log(addSafe('abc',10)); //Output 0