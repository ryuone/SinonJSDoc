============================================================
JsTestDriver / Sinon.JSを用いてたテストについて
============================================================

テストファイルについて
===============================

テストファイルは、Sinon.JSのページを参考にしてます。

.. seealso::

  `Sinon.JS - Versatile standalone test spies, stubs and mocks for JavaScript <http://sinonjs.org/>`_
     本サイトのサンプルを使用
  `Test-Driven JavaScript Development <http://tddjs.com/>`_
     Sinon.JSの作者が書いた書籍。
  `テスト駆動JavaScript <http://www.amazon.co.jp/dp/4048707868/>`_
    上記の書籍の日本語版

jsTestDriver関連ファイル
===============================


jsTestDriver設定ファイル
---------------------------

:file:`/sample/jsTestDriver.conf`

.. literalinclude:: /sample/jsTestDriver.conf
   :language: text

jsTestDriver拡張ファイル
---------------------------

sinon.logを定義。

:file:`/sample/lib/jsTestDriverExt.js`

.. literalinclude:: /sample/lib/jsTestDriverExt.js
   :language: js

ライブラリファイル
===============================

jQueryライブラリ
-------------------

:file:`/sample/lib/jquery-1.8.0.js`

Sinon.JSライブラリ
-------------------

:file:`/sample/lib/sinon-1.4.2.js`

ソースファイル(テスト対象)
===============================

:file:`/sample/src/server.js`

.. literalinclude:: /sample/src/server.js
  :language: js

:file:`/sample/src/trim.js`

.. literalinclude:: /sample/src/trim.js
  :language: js

テストファイル
===============================

Fake server/Fake XMLHttpRequestを用いたテスト
-------------------------------------------------

:file:`/sample/test/fakeServerXhr_test.js`

.. literalinclude:: /sample/test/fakeServerXhr_test.js
  :language: js

Fake timersを用いたテスト
-------------------------------------------------

:file:`/sample/test/fakeTimers_test.js`

.. literalinclude:: /sample/test/fakeTimers_test.js
  :language: js

Mocksを用いたテスト
-------------------------------------------------

:file:`/sample/test/mock_test.js`

.. literalinclude:: /sample/test/mock_test.js
  :language: js

Spiesを用いたテスト
-------------------------------------------------

:file:`/sample/test/spy_test.js`

.. literalinclude:: /sample/test/spy_test.js
  :language: js

Stubsを用いたテスト
-------------------------------------------------

:file:`/sample/test/stub_test.js`

.. literalinclude:: /sample/test/stub_test.js
  :language: js

