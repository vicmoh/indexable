"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.datePathefier = exports.normalize = exports.Indexable = void 0;
//import { Epoch } from "./epoch";
//import { DateIndex } from "./models/date-index";
require("./string.extension");
class Indexable {
}
exports.Indexable = Indexable;
/**
 * Replace the character of a string.
 * @param str string of a certain
 * character to be replaced.
 * @param index of the string where the
 * character will be replaced.
 * @param rep is the new character string
 * the is placed based on the index.
 * @return string where character has been changed.
 */
function repCharAt(str, index, rep) {
    return str.substr(0, index) + rep + str.substr(index + rep.length);
}
/**
 * Normalize the milliseconds.
 * For Example turning.
 *
 * 1 day is 86400000. There are 5 zeros
 * at the end.
 * @param mil string in milliseconds format.
 */
function normalize(mil) {
    let temp = mil;
    let count = 0;
    for (let x = temp.length - 1; x > 0; x--) {
        temp = repCharAt(temp, x, "0");
        count++;
        if (count >= 5)
            break;
    }
    return temp;
}
exports.normalize = normalize;
/**
 * @param mil the time to be indexed.
 * @param days range that will indexed.
 */
//function dayIndexer(mil: number, days: number): Array<number> {
//  const cur = mil;
//}
/**
 * @param mil in millisecond epoch.
 */
function datePathefier(mil) {
    const date = new Date(mil);
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();
    return `${year}-${month + 1}-${day}`;
}
exports.datePathefier = datePathefier;
//# sourceMappingURL=indexable.js.map