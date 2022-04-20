"use strict";
exports.__esModule = true;
exports.getInitials = void 0;
function getInitials(text, delimiter) {
    if (delimiter === void 0) { delimiter = " "; }
    try {
        if (!text) {
            return null;
        }
        // If text is string split by delimeter, otherwise use array
        var splitText = typeof text === "string" ? text.split(delimiter) : text;
        // If multiple strings, use the start of the first and last (e.g. Mitchell Jake Sutton = MS)
        if (splitText.length > 1) {
            return "".concat(splitText[0][0]).concat(splitText[splitText.length - 1][0]);
        }
        // If no array items, return null
        if (splitText.length === 0) {
            return null;
        }
        // Otherwise assume 1 word and return first character
        return splitText[0][0];
    }
    catch (_a) {
        console.error("Invalid value provided to getInitials function");
        return null;
    }
}
exports.getInitials = getInitials;
