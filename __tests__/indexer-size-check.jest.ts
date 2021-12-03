import { TextIndexer } from "../src/text-indexer";

const debug = false;
const ndx = new TextIndexer();

function indexSize(para: string): number {
  const res = ndx.indexSubText(para);
  if (debug) console.log(res);
  let size = 0;
  for (const sub of res) {
    size += sub.length;
  }
  return size;
}

describe("Checking the size of the index.", () => {
  test("512 index string should be resoanable byte size.", async () => {
    const str =
      "bkppuruaiutqnoagaamstccsuccjqissduykavzrdjpovhuywgjhujacjceyvakqvbcauccezwerqcdatauyedxxewchywqryrylsipfvoerfsxfsmpivrrsuyjvrqkjklurhvokfzdbfmzaaxchvueejtyozdwgucsprzhrtlppbfwawntuzfperkxckdfmgaeuqeqlxrkfqsaerojirciggyhsqquoglybwoucuhypbjquigtgwydwhdetsmitlzvtuwyzlpxtffmqhudrhgomtkxisrabfllxcunqwfjzbceidauvhauldidjgcrixqkxvnaxlwvyavkpqhcvjarsgchorkpfskhftulmawagnsokkhbtjnxlpuwjumgzpyubhivdtlydaoxdpcighaqrsowauqfxtfckewiseujqwdenydaletltwqkbfazuscpavtbjlqzgtbooatbobbkfmyfkhfmaizasmkgcpaxwikyghhcxpiznmqebehsw";
    const str32 = "xsaysbmmlqxwzdkrktgfkuyptycybhzz";

    const mb20 = 22000000; // 22mb
    const mb003 = 30000; // 0.03mb
    const size512 = indexSize(str);
    const size32 = indexSize(str32) * 4; // multiple by 4 since char is 4 bytes

    if (debug) console.log("size 512: ", size512);
    expect(size512).toBeGreaterThan(mb20);

    if (debug) console.log("size 32: ", size32);
    expect(size32).toBeLessThan(mb003);
  });
});
