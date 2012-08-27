/**
 * User: ryuone
 * Date: 2012/08/26
 * Time: 21:42
 * License: MIT License
 */
var sinonTestCase = sinon.testCase({
    setUp:function () {
    },
    tearDown:function () {
    },
    "test clock":function () {
        var spy = this.spy();
        setTimeout(function () {
            spy();
        }, 10);
        this.clock.tick(9);
        assertTrue(spy.notCalled);
        this.clock.tick(1);
        assertTrue(spy.calledOnce);
    }
});

TestCase("Fake timers test", sinonTestCase);
