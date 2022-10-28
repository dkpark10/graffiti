"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomLess50 = exports.parsingDate = exports.isitLessThan_10 = void 0;
const isitLessThan_10 = (value) => {
    return value < 10 ? `0${value}` : value;
};
exports.isitLessThan_10 = isitLessThan_10;
const parsingDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDay() + 16;
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${year}.${(0, exports.isitLessThan_10)(month)}.${(0, exports.isitLessThan_10)(day)} ${(0, exports.isitLessThan_10)(hour)}:${(0, exports.isitLessThan_10)(minute)}`;
};
exports.parsingDate = parsingDate;
const getRandomLess50 = () => {
    return Math.floor(Math.random() * 100) <= 0;
};
exports.getRandomLess50 = getRandomLess50;
//# sourceMappingURL=index.js.map