# MilthmDataReader

[简体中文](./README.md) | English

In case of conflict or ambiguity between different languages, the Simplified Chinese version shall prevail.

Read `Milthm` save (v3.8.0 or above) and get score, B20, etc. based on TypeScript

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

#### Advice

Get advice for increasing `Reality`.

```typescript
import { Reality } from '@adpro/milthm-data-reader';

const reality = new Reality(SongRecords);

console.log(reality.Advice);
```

## constants

All constantsof all charts without special charts.

```typescript
import { beatmap } from '@adpro/milthm-data-reader';
```

## types

The full types support for the saves.

```typescript
import type { ISave } from '@adpro/milthm-data-reader';
```

For more, please see [types/saves.ts](./src/types/saves.ts)

## Acknowledgment

1. [mkzi-nya/Milthm_Score-Checker_python](https://github.com/mkzi-nya/Milthm_Score-Checker_python)
2. [mkzi-nya/milthm-calculator-web](https://github.com/mkzi-nya/milthm-calculator-web)

## The project which use this package

1. [adproqwq/h5-Milthm_save_view](https://github.com/adproqwq/h5-Milthm_save_view)

## License

This repository and package are under the `MIT` open source license, please use this repository and package in the limit of the license.

Additional term: DO NOT USE THE CODE OF THIS REPOSITORY TO CONDUCT COMMERICAL ACTIVITIES.