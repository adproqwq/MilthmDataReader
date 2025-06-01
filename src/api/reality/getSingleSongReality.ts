// From https://github.com/mkzi-nya/Milthm_Score-Checker_python
export default (score: number, constant: number): number => {
  if(score >= 1005000) return constant + 1;
  else if(score >= 995000) return 1.4 / (Math.exp(-3.65 * (score / 10000 - 99.5)) + 1) - 0.4 + constant;
  else if(score >= 980000) return ((Math.exp(3.1 * (score - 980000) / 15000) - 1) / (Math.exp(3.1) - 1)) * 0.8 - 0.5 + constant;
  else if(score >= 700000) return score / 280000 - 4 + constant;
  else return 0;
};