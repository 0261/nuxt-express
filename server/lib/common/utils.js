/**
 * Common Function
 */
require('debugs/init');
const debug = require('debug')('utils');
class utils {
    constructor() {

    }
    // Passport 성공 콜백
    success(result, done) {
        return done(null, result)
    }
    // Passport 실패 콜백
    failure(error, done) {
        debug(error)
        return done(null, false);
    }

    /**
     * 프론트에 전송할 응답
     * @param {*} res Response
     * @param {*} code statusCode
     * @param {*} result Response Result
     */
    resJson(res, code, result = null) {
        if (code == 404) debug(result);
        res.json({
            statusCode: code,
            result: result
        });
    }
}

module.exports = utils;