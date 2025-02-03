import getAllSongsData from './data/getAllSongsData';
import getSpecificSongData from './data/getSpecificSongData';
import { ISongRecord } from '../types/songRecords';

export default class {
  songRecords: ISongRecord[];

  constructor(songRecords: ISongRecord[]){
    this.songRecords = songRecords;
  }

  get AllSongsData(){
    return getAllSongsData(this.songRecords);
  }

  GetSpecificSongData(name: string){
    return getSpecificSongData(name, this.songRecords);
  }
};