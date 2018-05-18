const bCrypt = require('bcrypt-nodejs');
const utils = new (require('../lib/common/utils'))();
require('debugs/init');
const debug = require('debug')('passport');
module.exports = async (passport, user) => {

    const User = user;
    const LocalStrategy = require('passport-local').Strategy;


    // Hash암호화
    const generateHash = (password) => {
        return bCrypt.hashSync(password, null, null);
    };
    // # password를 userPassword와 비교
    const compareHash = (password, userPassword) => {
        return bCrypt.compareSync(password, userPassword);
    }

    // 로그인시 실행됨
    passport.serializeUser((user, done) => { // # 전략 성공시 실행되는 부분
        debug('serializeUser');
        // # deserializeUser로 값을 보냄.
        utils.success(user, done);
    });

    // 실제 서버로 들어오는 요청마다 세션정보를 DB와 비교하는 곳
    passport.deserializeUser((user, done) => { // 매개변수 user는 req.session.passport.user에 저장된 값
        debug('deserializeUser');
        User.findById(user.id) // id를 가지고 DB를 조회한다.
            .then((user) => { // 성공하면
                utils.success(user.get(), done);
            })
            .catch((error) => { // 실패하면
                utils.failure(`아이디 조회 ${error}`, done)
            })
    })

    // 로그인 전략
    passport.use('signIn', new LocalStrategy({
        usernameField: 'email', // 입력받은 id
        passwordField: 'password', // 입력받은 pw
        session: true, // 세션 저장여부
        passReqToCallback: true, // express req객체 접근용
    }, (req, email, password, done) => { // callback
        User.findOne({
            where: {
                email: email
            }
        })
            .then(async function (user) {
                process.nextTick(async () => {
                    if (!user) {
                        utils.failure('아이디조회 오류', done);
                    };
                    const userPassword = (user.get().password);
                    const result = await compareHash(password, userPassword);
                    if (result) {
                        utils.success(user, done);
                    } else {
                        utils.failure('비밀번호일치 오류', done);
                    };
                })
            })
            .catch(function (error) {
                return utils.failure(`데이터베이스 조회 실패 ${error}`, done);
            });
    }));

    // # 회원가입 전략
    passport.use('signUp', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
    }, async (req, email, password, done) => {
        if (!email) {
            return utils.failure('아이디조회 오류.', done);
        } else {
            const userPassword = await generateHash(password);
            const params = {
                email: email,
                password: userPassword,
            };
            User.findOne({
                where: {
                    email: email
                }
            })
                .then(user => {
                    if (user) {
                        utils.failure('중복아이디 오류', done)
                    } else {
                        User.create(params)
                            .then(user => {
                                debug(user.get());
                                done({
                                    statusCode: 200
                                }, false)
                            })
                            .catch(error => {
                                utils.failure(error, done)
                            });
                    }
                })
                .catch(error => {
                    utils.failure(error, done)
                });
        }
    }))
}