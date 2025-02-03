import getScoreRank from './reality/getScoreRank';
import getReality from './reality/getReality';
import { ISongRecord } from '../types/songRecords';

export default class {
  songRecords: ISongRecord[];

  constructor(songRecords: ISongRecord[]){
    this.songRecords = songRecords;
  }

  get Reality(){
    return getReality(this.songRecords);
  }

  get ScoreRank(){
    return getScoreRank(this.songRecords);
  }
};