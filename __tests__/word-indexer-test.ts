import { WordIndexer } from "../src/word-indexer";

const _w = new WordIndexer();

describe("Testing word indexer", () => {
  const sen = "This sentence is going to be indexed.";
  test("eachWordIn(): Should create array of each words.", () => {
    const res = ["This", "sentence", "is", "going", "to", "be", "indexed"];
    expect(_w.eachWordIn(sen).sort()).toEqual(res.sort());
  });

  test("indexSubWord(): Should create index of search start string.", () => {
    const res = new Set(["T", "Th", "Thi", "This"]);
    expect(_w.indexStartWord("This")).toEqual(res);
  });

  test("indexStartWord(): Should create index of possible sub string.", () => {
    console.log(_w.indexSubWord("This"));
  });
});
