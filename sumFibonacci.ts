export function sumFibonacci() {
  return fibSeries().reduce(function (total, item) {
    return (total += item)
  }, 0)
}
function fibSeries() {
  let a = 1
  let b = 2
  let next = a + b
  const fibonacciArray = [2]
  while (next < 7000000) {
    if (next % 2 === 0) {
      fibonacciArray.push(next)
    }
    a = b
    b = next
    next = a + b
  }
  return fibonacciArray
}
