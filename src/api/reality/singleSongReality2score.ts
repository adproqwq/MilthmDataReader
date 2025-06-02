export default (singleSongReality: number, constant: number, originScore: number): number => {
  let score: number;
  singleSongReality = singleSongReality > constant + 1 ? constant + 1 : singleSongReality;

  if(originScore >= 1005000) return originScore;
  // 当单曲Reality小于理论单曲Reality，且给定的单曲Reality又超出1004999对应的单曲Reality时也需返回1005000
  if(singleSongReality >= constant + 1.4 / (Math.exp(-3.65) + 1) - 0.4 && singleSongReality <= constant + 1) return 1005000;

  // 判断单曲Reality在分数段[995000, 1005000)对应函数中是否有解
  // 函数r(s,c),s∈[995000,1005000)的值域为r∈[c + 0.3,1.4 / (e^-3.65 + 1) - 0.4 + c)
  else if(singleSongReality >= constant + 0.3 && singleSongReality < constant + 1.4 / (Math.exp(-3.65) + 1) - 0.4){
    score = 10000 * (99.5 - 1 / 3.65 * Math.log((constant - singleSongReality + 1) / (singleSongReality - constant + 0.4)));

    return score;
  }

  // 判断单曲Reality在分数段[980000, 995000)对应函数中是否有解
  // 函数r(s,c),s∈[980000,995000)的值域为r∈[c - 0.5,c + 0.3)
  else if(singleSongReality >= constant - 0.5 && singleSongReality < constant + 0.3){
    score = 980000 + 15000 / 3.1 * Math.log((singleSongReality - constant + 0.5) * (Math.exp(3.1) - 1) / 0.8 + 1);

    return score;
  }

  // 判断单曲Reality在分数段[700000, 980000)对应函数中是否有解
  // 函数r(s,c),s∈[700000, 980000)的值域为r∈[c - 1.5,c - 0.5)
  else if(singleSongReality >= constant - 1.5 && singleSongReality < constant - 0.5){
    score = 280000 * (singleSongReality - constant + 4);

    return score;
  }

  else return 114514;
};