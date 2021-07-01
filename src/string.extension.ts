export {};

declare global {
  interface String {
    setCharAt(this: string, index: number, replace: string): string;
  }
}

String.prototype.setCharAt = function (
  this: string,
  index: number,
  replacement: string
) {
  return (
    this.substr(0, index) +
    replacement +
    this.substr(index + replacement.length)
  );
};
