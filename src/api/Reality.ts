import getScoreRank from './reality/getScoreRank';
import getReality from './reality/getReality';
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
};