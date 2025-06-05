import getScoreRank, { IScoreRank } from './getScoreRank';
import { ISaveSongRecord } from '../../types/saves';

export const sortAccuracyRank = (scoreRank: IScoreRank[]): IScoreRank[] => {
  return scoreRank.sort((a, b) => {
    if(a.BestAccuracy < b.BestAccuracy) return 1;
    else if(a.BestAccuracy > b.BestAccuracy) return -1;
    else return 0;
  });
};

export default (songRecords: ISaveSongRecord[]): number => {
  const scoreRank = getScoreRank(songRecords);
  let starLevel: number = 0;

  const accuracySortedScoreRank = sortAccuracyRank(scoreRank);

  for(const item of accuracySortedScoreRank){
    if(item.BestAccuracy < 1.0) break;

    else if(item.constant >= 12.0 && starLevel <= 3) starLevel = 3;
    else if(item.constant >= 9.0 && starLevel <= 2) starLevel = 2;
    else if(item.constant >= 6.0 && starLevel <= 1) starLevel = 1;
  }

  return starLevel;
};