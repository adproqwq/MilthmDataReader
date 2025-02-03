import beatmap from '../../common/beatmap';
import gradeMap from '../../common/gradeMap';
import { ISongRecord } from '../../types/songRecords';

export interface ISpecificSongData {
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

export default (name: string, songRecords: ISongRecord[]): ISpecificSongData[] => {
  const result: ISpecificSongData[] = [];

  for(const songRecord of songRecords){
    const songInfo = beatmap.get(songRecord.BeatmapID);

    // 不存在该歌曲信息或非指定歌曲则跳过
    if(!songInfo || songInfo.name != name) continue;

    const songName = songInfo.name;
    const songCategory = songInfo.category;
    const songConstant = songInfo.constant;
    const grade = gradeMap.get(songRecord.BestLevel)!;

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