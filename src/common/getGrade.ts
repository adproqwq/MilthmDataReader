import gradeMap from './gradeMap';

export default (bestLevel: number, achivedStatus: number[]): string => {
  if(bestLevel === 0 || bestLevel === 6) return gradeMap.get(bestLevel.toString())!;
  else if(achivedStatus.includes(5)) return gradeMap.get(`${bestLevel.toString()}-5`)!;
  else if(achivedStatus.includes(4)) return gradeMap.get(`${bestLevel.toString()}-4`)!;
  else return gradeMap.get(bestLevel.toString())!;
};