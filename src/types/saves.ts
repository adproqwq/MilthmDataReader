export interface ISaveAgreement {
  /**
   * 条款接受时间
   *
   * @example 2023/11/17 10:29:29
   */
  AcceptTime: string;

  /**
   * 条款更新时间
   *
   * @example 2023/10/21 0:00:00
   */
  AgreementUpdateTime: string;

  /**
   * 条款版本
   *
   * @example 2023102104
   */
  AgreementVersion: number;

  /**
   * 条款类型
   *
   * @example eula
   *
   * @example privacy_policy-zh
   */
  ID: string;
};

export interface ISaveChapterSelectPreference {
  /**
   * 章节代码
   *
   * @example Introduction
   */
  ChapterID: string;

  /**
   * 最后一次游玩当前章节时选择的难度
   *
   * @example Cloudburst
   */
  LastSelectDifficulty: string;

  /**
   * 最后一次游玩当前章节时选择的歌曲代码
   *
   * @example 9f43a9a0-e009-4313-a85f-d8addbbfb9a3
   */
  LastSelectSongID: string;
};

export interface ISaveImmerseProgresse {
  /**
   * 章节标签
   *
   * @example chapter1
   */
  Tag: string;

  /**
   * 用途未知
   *
   * @example 1.0
   */
  Value: number;
};

export interface ISaveMarkRecord {
  /**
   * 用途未知
   *
   * @example true
   */
  Mark: boolean;

  /**
   * 用途未知
   *
   * @example tip_hold-tricks_read
   */
  MarkName: string;
};

export interface ISaveSongRecord {
  /**
   * 用途未知
   *
   * @example [0, 3, 5]
   */
  AchievedStatus: number[];

  /**
   * 对应谱面ID
   *
   * @example 364be32e-f685-4efb-80b5-64281c93939d
   */
  BeatmapID: string;

  /**
   * 当前难度下最高ACC
   *
   * @example 1.0
   */
  BestAccuracy: number;

  /**
   * 当前难度下取得的最高等级
   *
   * 0为R 1为紫S 2为青S 3为白S……依次类推
   *
   * @example 1
   */
  BestLevel: number;

  /**
   * 当前难度下取得的最高分数
   *
   * @example 1001960
   */
  BestScore: number;
};

export interface ISave {
  /**
   * 游戏条款相关
   */
  Agreements: ISaveAgreement[];

  /**
   * 存储进入章节时的默认位置
   *
   * 即进入章节时，将选择哪一首歌的哪一难度
   */
  ChapterSelectPreferences: ISaveChapterSelectPreference[];

  /**
   * 用途未知
   */
  ImmerseProgresses: ISaveImmerseProgresse[];

  /**
   * 似乎是存储最后一次剧情阅读的位置
   *
   * @example chapter1
   */
  LastReadChapterID: string;

  /**
   * 最后一次保存的时间
   *
   * @example 2025-01-31T22:58:47
   */
  LastSaveTime: string;

  /**
   * 最后一次游玩时选择的章节代码
   *
   * @example Notanote
   */
  LastSelectChapterID: string;

  /**
   * 用途未知
   */
  MarkRecords: ISaveMarkRecord[];

  /**
   * 歌曲排序是否倒序
   *
   * @example false
   */
  ReverseSongListSorting: boolean;

  /**
   * 存档版本号
   *
   * @description 3.8为2
   *
   * @example 1
   */
  SaveVersionCode: number;

  /**
   * 似乎是歌曲排序方式
   *
   * @example 0
   */
  SongListSorting: number;

  /**
   * 存储了所有打过的歌的成绩
   */
  SongRecords: ISaveSongRecord[];

  /**
   * 玩家名
   */
  UserName: string;

  /**
   * 玩家UUID
   */
  UserUUID: string;
};