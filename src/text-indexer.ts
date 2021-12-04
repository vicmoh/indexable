const debug = false;

export interface SearchIndex {
  word: Set<string>;
  start: Set<string>;
  sub: Set<string>;
  full: Set<string> | null;
}

export interface SearchIndexList {
  word: Array<string>;
  start: Array<string>;
  sub: Array<string>;
}

export function parseSearchIndex(val: SearchIndex): SearchIndexList {
  return {
    word: Array.from(val?.word ?? new Set()),
    start: Array.from(val?.start ?? new Set()),
    sub: Array.from(val?.sub ?? new Set()),
  };
}

export class TextIndexer {
  eachWordIn = (val: string) =>
    val
      .replace(/\s\s+/g, " ")
      .replace(/[\t\n\r\n ]/g, " ")
      .replace(/[^a-zA-Z ]/g, "")
      .trim()
      .split(" ");

  indexStartText = (word: string): Set<string> => {
    const list = new Set<string>();
    for (let x = 1; x < word.length + 1; x++) list.add(word.substring(0, x));
    return list;
  };

  indexSubText = (word: string): Set<string> => {
    const list = new Set<string>();
    for (let x = 0; x < word.length; x++) {
      const cur = word.substring(x, word.length);
      this.indexStartText(cur).forEach((e) => list.add(e));
    }
    return list;
  };

  /**
   * Index the paragraph of the text.
   * @param {string} para - The paragraph of text to index.
   * @param {boolean} options.isFullSubstring - if true, index the full substring of the word.
   * This options is very expensive. Only use it if you know what you are doing
   * or if you are sure that the text is not too long.
   *
   * @returns {SearchIndex} - The index query of the text.
   */
  index(para: string, options?: { isFullSubstring?: boolean }): SearchIndex {
    const eachWord = this.eachWordIn(para);

    if (debug) console.log(eachWord);
    if (debug) console.log(this.indexStartText(eachWord[0]));
    if (debug) console.log(this.indexSubText(eachWord[0]));

    let sumStart = new Set<string>();
    let sumSub = new Set<string>();
    for (const e of eachWord) {
      sumStart = new Set([...sumStart, ...this.indexStartText(e)]);
      sumSub = new Set([...sumSub, ...this.indexSubText(e)]);
    }

    // Create a the search index object
    //
    // If this string allow full string sub indexing as
    // as the option add to the search index.
    const si: SearchIndex = {
      word: new Set<string>(eachWord),
      start: sumStart,
      sub: sumSub,
      full: options?.isFullSubstring ? this.indexSubText(para) : null, // Very expensive in space.
    };

    return si;
  }
}
