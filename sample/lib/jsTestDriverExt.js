/**
 * User: ryuone
 * Date: 2012/08/26
 * Time: 21:01
 * License: MIT License
 */
sinon.log = function () {
    jstestdriver.console.log.apply(jstestdriver.console, arguments);
};
