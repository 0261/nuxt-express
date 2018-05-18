// 디버그 모듈
require('debugs/init');
const debug = require('debug')('auth');
const passport = require('passport');
const utils = new (require('../../../lib/common/utils'))();
const fn = {
    getItem(req, res) {

    },
    /**
     * Sign Out Function
     * @param {*} req Request
     * @param {*} res Response
     * 
     * 세션 파괴
     */
    signOut(req, res) {
        req.session.destroy((error) => {
            if (error) {
                utils.resJson(res, 404, error);
            } else {
                utils.resJson(res, 200, "Success Sign Out");
            }
        })
    }
}

module.exports = fn;