var sinonTestCase = sinon.testCase({
    setUp:function () {
    },
    tearDown:function () {
    },
    "test stub trim":function () {
        this.stub(String.prototype, "trim").returns("a string");

        assertTrue("a string" === "".trim());
        assertTrue(String.prototype.trim.calledOnce);
    }
});

TestCase("Spy/Stub test", sinonTestCase);
