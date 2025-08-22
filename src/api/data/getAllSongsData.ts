import beatmap from '../../common/beatmap';
import getGrade from '../../common/getGrade';
import type { ISaveSongRecord } from '../../types/saves';

export interface IAllSongsData {
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
};

export default (songRecords: ISaveSongRecord[]): IAllSongsData[] => {
  const result: IAllSongsData[] = [];

  for(const songRecord of songRecords){
    const songInfo = beatmap.get(songRecord.BeatmapID);

    // 不存在该歌曲信息则跳过
    if(!songInfo) continue;

    const songName = songInfo.name;
    const songCategory = songInfo.category;
    const songConstant = songInfo.constant;
    const grade = getGrade(songRecord.BestLevel, songRecord.AchievedStatus);

    result.push({
      name: songName,
      category: songCategory,
      constant: songConstant,
      BestAccuracy: songRecord.BestAccuracy,
      BestScore: songRecord.BestScore,
      BestLevel: grade,
    });
  }

  return result;
};