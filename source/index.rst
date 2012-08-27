Welcome to Sinon.JS Documentation.
==================================

Contents:

.. toctree::
   :maxdepth: 1

   docs/sinon
   docs/sinon/spy
   docs/sinon/stub
   docs/sinon/mock
   docs/sinon/collection
   docs/sinon/assert
   docs/sinon/sandbox
   docs/sinon/test
   docs/sinon/test_case
   docs/sinon/match
   docs/sinon/util/event
   docs/sinon/util/fake_server
   docs/sinon/util/fake_server_with_clock
   docs/sinon/util/fake_timers
   docs/sinon/util/fake_xml_http_request
   docs/sinon/util/timers_ie
   docs/sinon/util/xhr_ie


.. blockdiag::
   :desctable:

   blockdiag {
    default_fontsize = 14;
    // Set node metrix
    node_width = 200;  // default value is 128
    node_height = 40;  // default value is 40

    // Set span metrix
    //span_width = 240;  // default value is 64
    //span_height = 120;  // default value is 40

    // set default shape
    default_shape = roundedbox;  // default value is 'box'

    "sinon.js" -> "sinon/spy.js";
    "sinon.js" -> "sinon/stub.js";
    "sinon.js" -> "sinon/mock.js";
    "sinon.js" -> "sinon/collection.js";
    "sinon.js" -> "sinon/assert.js";
    "sinon.js" -> "sinon/sandbox.js";
    "sinon.js" -> "sinon/test.js";
    "sinon.js" -> "sinon/test_case.js";
    "sinon.js" -> "sinon/match.js";

    "sinon/sandbox.js" -> "sinon/collection.js";
    "sinon/sandbox.js" -> "sinon/util/fake_server.js";
    "sinon/sandbox.js" -> "sinon/util/fake_timers.js";
    "sinon/sandbox.js" -> "sinon/util/fake_server_with_clock.js";

    "sinon/util/fake_server.js" -> "sinon/util/fake_xml_http_request.js";
    "sinon/util/fake_xml_http_request.js" -> "sinon/util/event.js"

    "sinon.js" [description = ""];
    "sinon/sandbox.js" [description = "sinon.sandboxを定義"];
   }


Help
====

* `Module-specific markup — Sphinx v0.6.7 documentation`_ マークアップ

.. _`Module-specific markup — Sphinx v0.6.7 documentation`: http://sphinx.pocoo.org/markup/desc.html


Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`

