================
sinon/sandbox.js
================

Sandboxは、restore/verifyを必要とするfakesを用いて容易に動作する。
もし、fake timers, fake XHR, stub, spyをグローバル変数として使うのであれば、簡単に元に戻せるsandboxを使うべきである。
デフォルトでは、sandboxのspy, stub, mockは関数が実行されたオブジェクトにバインドされる、
なので自分でrestore()したくないのであれば、sinon.spy()の代わりに、this.spy()を使うべきである。

依存関係
========

* :doc:`../sinon.js <../sinon>`
* :doc:`collection.js <./collection>`
* :doc:`util/fake_timers.js <./util/fake_timers>`
* :doc:`util/fake_server_with_clock.js <./util/fake_server_with_clock>`

.. blockdiag::
   :desctable:

   blockdiag {
    "sinon/sandbox.js" -> "sinon.js";
    "sinon/sandbox.js" -> "sinon/collection.js";
    "sinon/sandbox.js" -> "sinon/util/fake_timers.js";
    "sinon/sandbox.js" -> "sinon/util/fake_server.js";
    "sinon/sandbox.js" -> "sinon/util/fake_server_with_clock.js";

    "sinon/sandbox.js" [description = "sinon.sandboxを定義"];
   }

継承
====

:doc:`collection.js <./collection>` を継承

非公開メソッド
==================

.. function:: exposeValue(sandbox, config, key, value)

   | config.injectIntoまたは、sandbox.argsに、valueを設定する。
   | valueが未設定の場合は、処理を行わない。

   :param sandbox: sinon.create(sinon.sandbox)で生成されたオブジェクト
   :param config: sinon.defaultConfigと同様のプロパティを持ったオブジェクト
   :param key: config.injectIntoのHashキー
   :param value: config.injectInto[key]または、sandbox.argsに設定する値。
   :type sandbox: sandboxオブジェクト
   :type config: Object
   :type key: String
   :type value: Object or Function or リテラル etc...
   :returns: なし。


.. function:: prepareSandboxFromConfig(config)

   | configの設定内容を元に、sandboxオブジェクトを生成。
   | config.useFakeServerにtypeofの結果=="object"が設定されている場合は、config.useFakeServerをsandbox.serverPrototypeに設定して、sinon.useFakeServer()を呼び出す。
   | config.useFakeTimersにtypeofの結果=="object"が設定されている場合、sandbox.useFakeTimers.apply(...)を呼び出す。"object"でない場合は、sandbox.useFakeTimers()を呼び出す。

   :param config: sinon.defaultConfigと同様のプロパティを持ったオブジェクト
   :type config: Object

   :rtype: sandboxオブジェクト
   :returns: config.useFakeServer / config.useFakeTimersを反映させたsandbox。

   .. note::
      config.useFakeTimersには[0, "Date", "setTimeout"]を設定できる。
      その際に、sandbox.useFakeTimers.apply(sandbox, config.useFakeTimers)が呼び出される。
      この記述は、jQueryでも使用されている形で、sandbox.useFakeTimersの第1引数は0、第2引数は"Date"、第3引数は"setTimeout"となる。

公開メソッド
==================

.. function:: useFakeTimers()
   :module: sinon.sandbox

   | sandboxインスタンスのclockに、 :doc:`sinon/util/fake_timers.js <./util/fake_timers>` のsinon.useFakeTimers()の呼び出し結果を設定する。
   | また、sandbox.clockをsandbox.fakesに追加する。

   :rtype: sinon.clockを継承したObject
   :returns: sinon.useFakeTimers()の結果を返す。

.. function:: useFakeServer()
   :module: sinon.sandbox

   | sandbox.serverPrototypeまたは、:doc:`sinon/util/fake_server.js <./util/fake_server>` のsinon.fakeServerのcreateメソッドを呼び出し、
   | 結果をsandbox.serverに設定する。
   | sandbox.serverPrototypeまたは、sinon.fakeServerにcreateメソッドが無い場合は、nullを返す。
   | また、sandbox.serverをsandbox.fakesに追加する。

   :rtype: sinon.fakeServerを継承したObject
   :returns: sandbox.serverPrototypeまたは、sinon.fakeServerにcreateの戻り値を返す。

.. function:: inject(obj)
   :module: sinon.sandbox

   | objに、spy/stub/mockメソッドを追加する。
   |   spy/stub/mockはsandboxインスタンスのspy/stub/mockを呼び出す。
   | sandboxインスタンスにclockが定義されている場合
   |   objに、sandboxインスタンスのclockを設定する。
   | sandboxインスタンスにserverが設定されている場合
   |   obj.serverにsandboxインスタンスのserverを、obj.requestsにsandboxインスタンスのserver.requestsを追加する。

   :param Object obj: sandboxインスタンスのメソッドが追加されるオブジェクト

   :rtype: Object
   :returns: 引数のobjを返す。objにはspy/stub/mock/clock/server/requestsが追加されている。

.. function:: create(config)
   :module: sinon.sandbox

   | sandboxインスタンスを生成(sinon.sandboxをプロトタイプに持つ新しいインスタンスを生成)

   :param object config: configを指定しなくても問題ない。configはsinon.defaultConfigをデフォルト値にとる事が出来る。
   :rtype: sandbox object.

.. function:: useFakeXMLHttpRequest()
   :module: sinon.sandbox

   | sinon.sandbox.useFakeServerを参照している。

プロパティ
==================

.. data:: serverPrototype
   :module: sinon.sandbox

   | 初期状態ではsinon.fakeServerを参照している。
   | prepareSandboxFromConfig非公開メソッド内でconfig.useFakeServerによって書き換えられる可能性もある。
   | sinon.sandbox.useFakeServerメソッド内で使用される。
