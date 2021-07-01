interface DateIndex {
  day1: Array<number>;
  day3: Array<number>;
  day5: Array<number>;
  day7: Array<number>;
  week2: Array<number>;
  month1: Array<number>;
  month6: Array<number>;
  year: Array<number>;
}

export class Indexable {
  static readonly oneMinInMilEpoch = 60000;
  static oneDay = (): number => Indexable.oneMinInMilEpoch * 60 * 24;

  // time(mil: number): DateIndex {}
}