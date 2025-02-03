import beatmap from '../../common/beatmap';
import gradeMap from '../../common/gradeMap';
import getSingleSongReality from './getSingleSongReality';
import { ISongRecord } from '../../types/songRecords';

export interface IScoreRank {
  /**
   * 歌曲定数
   */
  constant: number;

  /**
   * 歌曲难度
   */
  category: string;

  /**
   * 歌曲名
   */
  name: string;

  /**
   * 当前难度下最高ACC
   */
  BestAccuracy: number;

  /**
   * 当前难度下取得的最高等级
   */
  BestLevel: string;

  /**
   * 当前难度下取得的最高分数
   */
  BestScore: number;

  /**
   * 该歌曲Reality
   */
  reality: number;
};

export default (songRecords: ISongRecord[]): IScoreRank[] => {
  const scoreRank: IScoreRank[] = [];

  for(const songRecord of songRecords){
    const songInfo = beatmap.get(songRecord.BeatmapID);

    // 不存在该歌曲信息则跳过
    if(!songInfo) continue;

    const songName = songInfo.name;
    const songCategory = songInfo.category;
    const songConstant = songInfo.constant;
    const grade = gradeMap.get(songRecord.BestLevel)!;

    scoreRank.push({
      name: songName,
      category: songCategory,
      constant: songConstant,
      BestAccuracy: songRecord.BestAccuracy,
      BestScore: songRecord.BestScore,
      BestLevel: grade,
      reality: getSingleSongReality(songRecord.BestScore) + songConstant,
    });
  }

  return scoreRank.sort((a, b) => {
    if(a.reality < b.reality) return 1;
    else if(a.reality > b.reality) return -1;
    else return 0;
  });
};