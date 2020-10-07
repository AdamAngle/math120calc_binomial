var bigdecimal = require("bigdecimal");

// Math-120 Formula Solver by Adam Angle

function factorial(n) { 
  var ans=1; 
  for (var i = 2; i <= n; i++) 
    ans = ans * i; 
  return ans; 
} 

function calcNChooseX(n, x) {
  return factorial(n) / (factorial(x) * factorial(n - x));
}

function betweenList(lowEnd, highEnd) {
  var list = [];
  for (var i = lowEnd; i <= highEnd; i++) {
      list.push(i);
  }
  return list;
}

function calcBinomialProbDist(n, p, x1, x2) {
  let bd_p = new bigdecimal.BigDecimal(p);
  
  let sepBase = new bigdecimal.BigDecimal(1.0);
  var cmulTotal = new bigdecimal.BigDecimal(0.0);
  let numbers = betweenList(Math.min(x1, x2), Math.max(x1, x2));

  for (const num of numbers) {
    let nCx = new bigdecimal.BigDecimal(calcNChooseX(n, num));
    cmulTotal = cmulTotal.add(nCx.multiply(bd_p.pow(num)).multiply(sepBase.subtract(bd_p).pow(n - num)));
  }
  var roundingMode = bigdecimal.BigDecimal.ROUND_HALF_UP;
  return cmulTotal.setScale(18, roundingMode).stripTrailingZeros().toPlainString();
}

export default function statCalc(n, p, x1, x2) {
  // This function assumes that the values in the dataset are in numerical ascending order.
  return {
    binomialProbability: calcBinomialProbDist(n, p, x1, x2)
  }
}
