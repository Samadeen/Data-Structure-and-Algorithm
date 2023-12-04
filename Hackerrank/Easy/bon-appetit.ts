//Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume.
// Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.
function bonAppetit(bill: number[], k: number, b: number) {
  // Write your code here
  let sum = 0;

  bill.forEach((num, i) => {
    if (i !== k) sum += num;
    const res = Math.floor(sum / 2);
  });
  const res = Math.floor(sum / 2);
  console.log(res === b ? 'Bon Appetit' : Math.abs(b - res));
}
