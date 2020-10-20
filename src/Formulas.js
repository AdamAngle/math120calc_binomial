import Big from 'big.js';

// Math-120 Formula Solver by Adam Angle

// Memoization-based factorial with Big, because 300! is huge!
var f = [];
function factorial (n) {
  if (n === 0 || n === 1)
    return Big(1);
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1).times(n);
}

function calcNChooseX(n, x) {
  return factorial(n).div(factorial(x).times(factorial(n - x)));
}

function betweenList(lowEnd, highEnd) {
  var list = [];
  for (var i = lowEnd; i <= highEnd; i++) {
      list.push(i);
  }
  return list;
}

function calcBinomialProbDist(n, p, x1, x2) {
  let bd_p = new Big(p);
  
  let sepBase = new Big(1.0);
  var cmulTotal = new Big(0.0);
  let numbers = betweenList(Math.min(x1, x2), Math.max(x1, x2));


  for (const num of numbers) {
    let nCx = new Big(calcNChooseX(n, num));
    cmulTotal = cmulTotal.add(nCx.times(bd_p.pow(num)).times(sepBase.minus(bd_p).pow(n - num)));
  }
  Big.RM = 1;
  return cmulTotal.toFixed(18).replace(/(\.0+|0+)$/, '');
}

export default function statCalc(n, p, x1, x2) {
  // This function assumes that the values in the dataset are in numerical ascending order.
  return {
    binomialProbability: calcBinomialProbDist(n, p, x1, x2)
  }
}
