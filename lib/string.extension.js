"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.setCharAt = function (index, replacement) {
    return (this.substr(0, index) +
        replacement +
        this.substr(index + replacement.length));
};
//# sourceMappingURL=string.extension.js.map