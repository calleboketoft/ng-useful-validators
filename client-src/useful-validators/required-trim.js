"use strict";
function requiredTrim(control) {
    var preppedValue = '';
    if (typeof control.value === 'string') {
        preppedValue = control.value;
    }
    if (typeof control.value === 'number') {
        preppedValue = control.value + '';
    }
    if (preppedValue.trim() === '') {
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