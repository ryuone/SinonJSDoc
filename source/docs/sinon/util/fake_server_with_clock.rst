====================================
sinon/util/fake_server_with_clock.js
====================================

sinon.fakeServerを継承して、sinon.fakeServerWithClockを定義。::

    function Server() {}
    Server.prototype = sinon.fakeServer;

    sinon.fakeServerWithClock = new Server();

依存関係
========

* :doc:`fake_server.js <fake_server>`

.. blockdiag::
   :desctable:

   blockdiag {
    "fake_server_with_clock.js" -> "fake_server.js";
    "fake_server_with_clock.js" [description = "sinon.sandboxを定義"];
    "fake_server.js" [description = ""]
   }
