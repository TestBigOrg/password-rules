module.exports = function(pw, rules) {
    var issues = [];
    rules = rules || {};
    def(rules, 'minimumLength', 8);
    def(rules, 'requireCapital', true);
    def(rules, 'requireLower', true);
    def(rules, 'requireNumber', true);

    if (pw.length <= rules.minimumLength) {
        issues.push({
            reason: 'minimumLength',
            message: 'Password must be at least ' + rules.minimumLength + ' letters long'
        });
    }
    if (pw.match(/[A-Z]/g)) {
        issues.push({
            reason: 'requireCapital',
            message: 'Password must contain a capital letter'
        });
    }
    if (pw.match(/[a-z]/g)) {
        issues.push({
            reason: 'requireLower',
            message: 'Password must contain a lowercase letter'
        });
    }
    if (pw.match(/\d/g)) {
        issues.push({
            reason: 'requireNumber',
            message: 'Password must contain a number'
        });
    }

    return issues.length ? issues : false;
};

function def(o, option, val) {
    if (o[option] === undefined) o[option] = val;
}
