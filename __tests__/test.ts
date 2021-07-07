import { dateIndexer, datePathefier } from "../src/date-indexer";
import { Indexable } from "../src/indexable";
import { Log } from "../packages/ts-util/src/log";

const log = new Log({ disable: true });
const SHOW_LOG = true;

test("Jest test", () => {
  expect(true).toBe(true);
});

test("datePathefier() should create the correct format.", () => {
  const date = new Date(1625109749836).getTime();
  expect(datePathefier(date) === "2021-7-1").toBe(true);
});

test("dateIndexer() should create the correct dates of the index list", () => {
  const func = "dateIndexer";
  const test = new Date(1625109749836);
  const ans = [
    "2021-7-1",
    "2021-7-2",
    "2021-7-3",
    "2021-7-4",
    "2021-7-5",
    "2021-7-6",
  ];

  const ar1 = dateIndexer(test.getTime(), 5);
  console.log(func, ar1);

  let res = true;
  for (const each of ar1) {
    if (!ans.includes(each)) {
      res = false;
      break;
    }
  }
  expect(res).toBe(true);
});

test("Log output test.", () => {
  const i = new Indexable().dates(Date.now());
  if (SHOW_LOG) console.log(i);
  log.print(null, i);
});
