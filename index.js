const vm = require('vm');
function safeMatch(str, regex, timeout) {
    let sandbox = {
        str: str,
        re: regex,
        result: null
    };
    try {
    vm.runInContext('result = !!str.match(re);', vm.createContext(sandbox), { timeout: timeout })
    } catch (e) {
        console.log('Warning: regex '+regex+' was detected as evil when tested against "'+str+'", ignoring this regex pattern');
    }
    return sandbox.result;
}

module.exports = safeMatch