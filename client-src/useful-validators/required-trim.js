"use strict";
function requiredTrim(control) {
    if (!control.value || control.value && control.value.trim() === '') {
        return {
            requiredTrim: false
        };
    }
    else {
        return null;
    }
}
exports.requiredTrim = requiredTrim;
//# sourceMappingURL=required-trim.js.map