"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMinutesToDate = void 0;
function AddMinutesToDate(date, minutes) {
    return new Date(date.getTime() + minutes * 60 * 1000);
}
exports.AddMinutesToDate = AddMinutesToDate;
//# sourceMappingURL=addMinutes.js.map