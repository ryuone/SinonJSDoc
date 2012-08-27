var sinonTestCase = sinon.testCase({
    setUp:function () {
    },
    tearDown:function () {
    },
    "test spy trim":function () {
        this.spy(String.prototype, "trim");

        assertTrue("a string" === "   a string".trim());
        assertTrue(String.prototype.trim.calledOnce);
    },
    "test stub trim":function () {
        this.stub(String.prototype, "trim").returns("a string");

        assertTrue("a string" === "".trim());
        assertTrue(String.prototype.trim.calledOnce);
    }
});

TestCase("Spy/Stub test", sinonTestCase);
