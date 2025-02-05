# MilthmDataReader

[简体中文](./README.md) | English

Read `Milthm` save (v3.2.0 or above) and get score, B20, etc. based on TypeScript

## Install

```shell
npm install @adpro/milthm-data-reader # npm

pnpm add @adpro/milthm-data-reader # pnpm
```

## How to use

This package only use the value of `SongRecords` key in the `Milthm` save, all of the following `SongRecords` refers to this.

### Data

Get songs data in the save.

#### AllSongsData

Get all songs data in the save.

```typescript
import { Data } from '@adpro/milthm-data-reader';

const data = new Data(SongRecords);

console.log(data.AllSongsData);
```

#### GetSpecificSongData

Get specific song data in the save.

```typescript
import { Data } from '@adpro/milthm-data-reader';

const data = new Data(SongRecords);

const specificSongData = data.GetSpecificSongData('INFP.mp3');

console.log(specificSongData);
```

### Reality

The functions related to `Reality`.

#### ScoreRank

Get the rank of all difficulties of all songs, ranked by `Reality` of the single song.

```typescript
import { Reality } from '@adpro/milthm-data-reader';

const reality = new Reality(SongRecords);

console.log(reality.ScoreRank);
```

#### Reality

Get the more precise `Reality`.

```typescript
import { Reality } from '@adpro/milthm-data-reader';

const reality = new Reality(SongRecords);

console.log(reality.Reality);
```

## Acknowledgment

[mkzi-nya/Milthm_Score-Checker_python](https://github.com/mkzi-nya/Milthm_Score-Checker_python)

## License

This repository and package are under the `MIT` open source license, please use this repository and package in the limit of the license.

Additional term: DO NOT USE THE CODE OF THIS REPOSITORY TO CONDUCT COMMERICAL ACTIVITIES.