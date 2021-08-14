const debug = true;

export class WordIndexer {
  eachWordIn = (val: string) =>
    val
      .replace(/\s\s+/g, " ")
      .replace(/[\t\n\r\n ]/g, " ")
      .replace(/[^a-zA-Z ]/g, "")
      .trim()
      .split(" ");

  indexStartWord = (word: string) => {
    const list = new Set<string>();
    for (let x = 1; x < word.length + 1; x++) list.add(word.substring(0, x));
    return list;
  };

  indexSubWord = (word: string) => {
    const list = new Set<string>();
    for (let x = 0; x < word.length; x++) {
      const cur = word.substring(x, word.length);
      this.indexStartWord(cur).forEach((e) => list.add(e));
    }
    return list;
  };

  index(para: string) {
    const eachWord = this.eachWordIn(para);
    if (debug) console.log(this.indexStartWord(eachWord[0]));
    if (debug) console.log(eachWord);
    if (debug) console.log(this.indexSubWord(eachWord[0]));
  }
}
