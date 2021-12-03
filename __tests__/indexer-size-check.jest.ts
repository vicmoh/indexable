import { TextIndexer } from "../src/text-indexer";

const debug = false;
const ndx = new TextIndexer();

describe("Checking the size of the index.", () => {
  test("512 index string should be resoanable byte size.", async () => {
    const str =
      "bkppuruaiutqnoagaamstccsuccjqissduykavzrdjpovhuywgjhujacjceyvakqvbcauccezwerqcdatauyedxxewchywqryrylsipfvoerfsxfsmpivrrsuyjvrqkjklurhvokfzdbfmzaaxchvueejtyozdwgucsprzhrtlppbfwawntuzfperkxckdfmgaeuqeqlxrkfqsaerojirciggyhsqquoglybwoucuhypbjquigtgwydwhdetsmitlzvtuwyzlpxtffmqhudrhgomtkxisrabfllxcunqwfjzbceidauvhauldidjgcrixqkxvnaxlwvyavkpqhcvjarsgchorkpfskhftulmawagnsokkhbtjnxlpuwjumgzpyubhivdtlydaoxdpcighaqrsowauqfxtfckewiseujqwdenydaletltwqkbfazuscpavtbjlqzgtbooatbobbkfmyfkhfmaizasmkgcpaxwikyghhcxpiznmqebehsw";

    const res = ndx.indexSubText(str);
    if (debug) console.log(res);
    let size = 0;
    for (const sub of res) {
      size += sub.length;
    }

    const mb20 = 22000000;
    if (debug) console.log("size: ", size);
    expect(size).toBeGreaterThan(mb20);
  });
});
