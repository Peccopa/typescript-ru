"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    return new Date(dateString.split('/').reverse().join('-'));
};
exports.dateStringToDate = dateStringToDate;
