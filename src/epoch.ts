/**
 * Millisecond epoch
 * and time definitions.
 */
export class Epoch {
  static oneMinInMilEpoch = (): number => 60000;
  static oneDay = (): number => Epoch.oneMinInMilEpoch() * 60 * 24;
}
