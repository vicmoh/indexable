import { TextIndexer } from "../src/text-indexer";

const DEBUG = false;
const _w = new TextIndexer();

describe("Testing word indexer", () => {
  const sen = "This sentence is going to be indexed.";
  const testWord = "This";

  test("eachWordIn(): Should create array of each words.", () => {
    const res = ["This", "sentence", "is", "going", "to", "be", "indexed"];
    expect(_w.eachWordIn(sen).sort()).toEqual(res.sort());
  });

  test("indexStartWord(): Should create index of search start string.", () => {
    const res = new Set(["T", "Th", "Thi", "This"]);
    expect(_w.indexStartText(testWord)).toEqual(res);
  });

  test("indexSubWord(): Should create index of possible sub string.", () => {
    const res = new Set([
      "T",
      "Th",
      "Thi",
      "This",
      "h",
      "hi",
      "his",
      "i",
      "is",
      "s",
    ]);
    if (DEBUG) console.log(_w.indexSubText(testWord));
    expect(_w.indexSubText(testWord)).toEqual(res);
  });

  test("index(): Should create search index instances.", () => {
    const res = new Set([
      "T",
      "Th",
      "Thi",
      "This",
      "h",
      "hi",
      "his",
      "i",
      "is",
      "s",
      "se",
      "sen",
      "sent",
      "sente",
      "senten",
      "sentenc",
      "sentence",
      "e",
      "en",
      "ent",
      "ente",
      "enten",
      "entenc",
      "entence",
      "n",
      "nt",
      "nte",
      "nten",
      "ntenc",
      "ntence",
      "t",
      "te",
      "ten",
      "tenc",
      "tence",
      "enc",
      "ence",
      "nc",
      "nce",
      "c",
      "ce",
      "g",
      "go",
      "goi",
      "goin",
      "going",
      "o",
      "oi",
      "oin",
      "oing",
      "in",
      "ing",
      "ng",
      "to",
      "b",
      "be",
      "ind",
      "inde",
      "index",
      "indexe",
      "indexed",
      "nd",
      "nde",
      "ndex",
      "ndexe",
      "ndexed",
      "d",
      "de",
      "dex",
      "dexe",
      "dexed",
      "ex",
      "exe",
      "exed",
      "x",
      "xe",
      "xed",
      "ed",
    ]);

    const ind = _w.index(sen);
    expect(ind.sub).toEqual(res);
    expect(_w.index(sen));
    expect(ind.full).toEqual(null);
    if (DEBUG) console.log(_w.index(sen));
  });
});
