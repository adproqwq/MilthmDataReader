# MilthmDataReader

简体中文 | [English](./README_en.md)

不同语言间有冲突或歧义的部分，以中文文本为准

基于 TypeScript 读取 `Milthm` 新版存档文件并获取分数，B20等

## 安装

```shell
npm install @adpro/milthm-data-reader # npm

pnpm add @adpro/milthm-data-reader # pnpm
```

## 使用

本包仅使用 `Milthm` 新版存档中 `SongRecords` 字段内容，以下所有 `SongRecords` 均指该字段内容

### Data

获取存档歌曲信息

#### AllSongsData

获取存档中所有歌曲的信息

```typescript
import { Data } from '@adpro/milthm-data-reader';

const data = new Data(SongRecords);

console.log(data.AllSongsData);
```

#### GetSpecificSongData

获取存档中特定歌曲的信息

```typescript
import { Data } from '@adpro/milthm-data-reader';

const data = new Data(SongRecords);

const specificSongData = data.GetSpecificSongData('INFP.mp3');

console.log(specificSongData);
```

### Reality

与 `Reality` 有关的计算或功能

#### ScoreRank

获取根据单曲`Reality`对所有歌曲所有难度的排序

```typescript
import { Reality } from '@adpro/milthm-data-reader';

const reality = new Reality(SongRecords);

console.log(reality.ScoreRank);
```

#### Reality

获取更精确的`Reality`

```typescript
import { Reality } from '@adpro/milthm-data-reader';

const reality = new Reality(SongRecords);

console.log(reality.Reality);
```

## types

对于新版存档文件内容的完整 type 支持

```typescript
import type { ISave } from '@adpro/milthm-data-reader';
```

更多请见[types/saves.ts](./src/types/saves.ts)

## 鸣谢

1. [mkzi-nya/Milthm_Score-Checker_python](https://github.com/mkzi-nya/Milthm_Score-Checker_python)
2. [mkzi-nya/milthm-calculator-web](https://github.com/mkzi-nya/milthm-calculator-web)

## 使用本包的项目

1. [adproqwq/h5-Milthm_save_view](https://github.com/adproqwq/h5-Milthm_save_view)

## 许可证

本仓库签署`MIT`开源许可证，请在许可证限定范围内使用该项目

附加条款：不得使用本项目源码进行商业活动