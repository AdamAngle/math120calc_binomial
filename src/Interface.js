export const tex_p = `p`;
export const tex_n = `n`;
export const tex_x1 = `x_1`;
export const tex_x2 = `x_2`;

export function showIfNotNaN(val) {
  return isNaN(val) ? 'Unknown' : val;
}

export var resultValues = [
  {
    name: 'binomialProbability',
    displayText: 'Binomial Probability',
    prefix: `P(x) = `
  },
]
  