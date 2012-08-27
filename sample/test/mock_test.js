/**
 * User: ryuone
 * Date: 2012/08/27
 * Time: 0:40
 * License: MIT License
 */
var sinonTestCase = sinon.testCase({
    setUp:function () {
    },
    tearDown:function () {
    },
    "test mock trim":function () {
        var mock = this.mock(String.prototype);
        mock.expects("trim").once().returns("a string");

        assertTrue("a string" === "".trim());
        mock.verify();
    }
});

TestCase("Mock test", sinonTestCase);
