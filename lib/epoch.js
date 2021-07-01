"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Epoch = void 0;
/**
 * Millisecond epoch
 * and time definitions.
 */
class Epoch {
}
exports.Epoch = Epoch;
Epoch.oneMinInMilEpoch = () => 60000;
Epoch.oneDay = () => Epoch.oneMinInMilEpoch() * 60 * 24;
//# sourceMappingURL=epoch.js.map