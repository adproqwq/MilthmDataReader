import getAllSongsData from './data/getAllSongsData';
import getSpecificSongData from './data/getSpecificSongData';
import { ISaveSongRecord } from '../types/saves';

export default class {
  songRecords: ISaveSongRecord[];

  constructor(songRecords: ISaveSongRecord[]){
    this.songRecords = songRecords;
  }

  get AllSongsData(){
    return getAllSongsData(this.songRecords);
  }

  GetSpecificSongData(name: string){
    return getSpecificSongData(name, this.songRecords);
  }
};