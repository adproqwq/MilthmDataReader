export interface ISongRecord {
  /**
   * 用途未知
   */
  AchievedStatus: number[];

  /**
   * 对应谱面ID
   */
  BeatmapID: string;

  /**
   * 当前难度下最高ACC
   */
  BestAccuracy: number;

  /**
   * 当前难度下取得的最高等级
   *
   * 0为R 1为紫S 2为青S 3为白S……依次类推
   */
  BestLevel: number;

  /**
   * 当前难度下取得的最高分数
   */
  BestScore: number;
};