const utils = new (require('../common/utils'))();
require('debugs/init');
const debug = require('debug')('auth');
/**
 * Authenticate Middleware
 * @param {*} req Request
 * @param {*} res Response
 * @param {*} next Callback
 * 
 * 모든 API 콜에서 호출할 인증 미들웨어.
 * 인증되어있으면 진행하고 없으면 오류를 뱉음.
 */
module.exports.authenticate = (req, res, next) => {
    if (req.isAuthenticated()) {
        debug('Success Authenticate');
        next();
    } else {
        utils.resJson(res, 404, 'Failed Authenticate');
    }
}