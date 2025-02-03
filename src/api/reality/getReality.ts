import getScoreRank from './getScoreRank';
import { ISongRecord } from '../../types/songRecords';

export default (songRecords: ISongRecord[]): number => {
  const scoreRank = getScoreRank(songRecords);

  if(scoreRank.length < 20){
    while(scoreRank.length == 20){
      scoreRank.push({
        name: '',
        category: '',
        constant: 0,
        BestAccuracy: 0,
        BestScore: 0,
        BestLevel: '',
        reality: 0,
      });
    }
  }
  const b20 = getScoreRank(songRecords).slice(0, 20);
  let totalSingleReality = 0;

  for(const songRecord of b20){
    totalSingleReality += songRecord.reality;
  }

  return totalSingleReality / 20;
};