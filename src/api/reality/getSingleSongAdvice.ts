import singleSongReality2Score from './singleSongReality2score';
import getScoreRank, { sortScoreRank, IScoreRank } from './getScoreRank';
import getSingleSongReality from './getSingleSongReality';
import type { ISaveSongRecord } from '../../types/saves';

export interface ISingleSongAdvice {
  /**
   * 使总Reality提高0.01的目标分数
   */
  targetScore: number | null;

  /**
   * 达到目标后的排名
   */
  increasedRank: number;
};

interface ICopiedScoreRank extends IScoreRank {
  modified?: boolean;
};

const findObjectIndexByKey = (arr: ICopiedScoreRank[]) => {
  // 使用 Array.prototype.findIndex() 方法查找第一个满足条件的对象的索引
  return arr.findIndex(obj => {
    // 检查对象自身属性（不包含原型链）是否包含 modified 键
    return Object.prototype.hasOwnProperty.call(obj, 'modified');
  });
}

export default (songRecords: ISaveSongRecord[]): ISingleSongAdvice[] => {
  const originScoreRank = getScoreRank(songRecords);
  const advice: ISingleSongAdvice[] = [];
  const lastB20Index = originScoreRank.length >= 20 ? 19 : originScoreRank.length - 1;
  const offset = originScoreRank.length >= 20 ? 0.2 : originScoreRank.length * 0.01;

  for(let i = 0; i < originScoreRank.length; i++){
    const rankItem = originScoreRank[i];

    if(i <= 19){
      const targetScore = singleSongReality2Score(rankItem.reality + offset, rankItem.constant, rankItem.BestScore);

      if(targetScore === rankItem.BestScore){
        advice.push({
          targetScore: targetScore === 1010000 ? null : 1010000,
          increasedRank: i + 1,
        });
      }
      else{
        const copiedSongRank: ICopiedScoreRank[] = structuredClone(originScoreRank);

        copiedSongRank[i].BestScore = targetScore;
        copiedSongRank[i].reality = getSingleSongReality(targetScore, copiedSongRank[i].constant);
        copiedSongRank[i].modified = true;

        advice.push({
          targetScore,
          increasedRank: findObjectIndexByKey(sortScoreRank(copiedSongRank) as ICopiedScoreRank[]) + 1,
        });
      }
    }
    else{
      // 判断当前歌曲理论单曲Reality能否进入B20
      if(rankItem.constant + 1 > originScoreRank[lastB20Index].reality){
        const copiedSongRank: ICopiedScoreRank[] = structuredClone(originScoreRank);

        copiedSongRank[i].BestScore = singleSongReality2Score(originScoreRank[lastB20Index].reality, copiedSongRank[i].constant, copiedSongRank[i].BestScore);
        copiedSongRank[i].reality = getSingleSongReality(copiedSongRank[i].BestScore, copiedSongRank[i].constant);
        copiedSongRank[lastB20Index] = copiedSongRank[i];

        const targetScore = singleSongReality2Score(copiedSongRank[lastB20Index].reality + offset, copiedSongRank[lastB20Index].constant, copiedSongRank[lastB20Index].BestScore);

        copiedSongRank[lastB20Index].BestScore = targetScore;
        copiedSongRank[lastB20Index].reality = getSingleSongReality(targetScore, copiedSongRank[i].constant);
        copiedSongRank[lastB20Index].modified = true;

        advice.push({
          targetScore,
          increasedRank: findObjectIndexByKey(sortScoreRank(copiedSongRank) as ICopiedScoreRank[]) + 1,
        });
      }
      else{
        const copiedSongRank: ICopiedScoreRank[] = structuredClone(originScoreRank);

        copiedSongRank[i].BestScore = copiedSongRank[i].BestScore >= 1005000 ? 1010000 : 1005000;
        copiedSongRank[i].reality = copiedSongRank[i].constant + 1;
        copiedSongRank[i].modified = true;

        advice.push({
          targetScore: 1005000,
          increasedRank: findObjectIndexByKey(sortScoreRank(copiedSongRank) as ICopiedScoreRank[]) + 1,
        });
      }
    }
  }

  return advice;
};