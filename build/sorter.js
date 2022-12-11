"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                //if collection is an array of numbres
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
            // if collection is a string, do this logic instead
        }
    }
}
exports.Sorter = Sorter;
