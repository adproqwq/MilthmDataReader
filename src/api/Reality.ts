import getScoreRank from './reality/getScoreRank';
import getReality from './reality/getReality';
import getSingleSongAdvice from './reality/getSingleSongAdvice';
import getStar from './reality/getStar';
import { ISaveSongRecord } from '../types/saves';

export default class {
  songRecords: ISaveSongRecord[];

  constructor(songRecords: ISaveSongRecord[]){
    this.songRecords = songRecords;
  }

  get Reality(){
    return getReality(this.songRecords);
  }

  get ScoreRank(){
    return getScoreRank(this.songRecords);
  }

  get Advice(){
    return getSingleSongAdvice(this.songRecords);
  }

  get Star(){
    return getStar(this.songRecords);
  }
};