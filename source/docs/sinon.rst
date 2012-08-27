========
sinon.js
========

nodeでは以下のみrequireしている。

* util/fake_timers.js

nodeでsinonをrequireした場合以下のファイルはrequireされていない。

* util/event.js(sinon.Event)
* util/fake_server.js(sinon.fakeServer)
* util/fake_server_with_clock.js(sinon.fakeServerWithClock)
* util/fake_xml_http_request.js(sinon.useFakeXMLHttpRequest, sinon.FakeXMLHttpRequest)

IE用

* util/timers_ie.js
* util/xhr_ie.js

依存関係
========

* :doc:`sinon/spy.js <./sinon/spy>`
* :doc:`sinon/stub.js <./sinon/stub>`
* :doc:`sinon/mock.js <./sinon/mock>`
* :doc:`sinon/collection.js <./sinon/collection>`
* :doc:`sinon/test.js <./sinon/test>`
* :doc:`sinon/test_case.js <./sinon/test_case>`

継承
====

なし

非公開メソッド
==================

.. function:: isDOMNode(obj)

.. function:: isElement(obj)

.. function:: isFunction(obj)

.. function:: mirrorProperties(obj)

公開メソッド
==================

.. function:: wrapMethod(object, property, method)
   :module: sinon

.. function:: extend(target)
   :module: sinon

.. function:: create(proto)
   :module: sinon

.. function:: deepEqual(a, b)
   :module: sinon

.. function:: functionName(func)
   :module: sinon

.. function:: toString()
   :module: sinon

.. function:: getConfig(custom)
   :module: sinon

.. function:: format(val)
   :module: sinon

.. function:: timesInWords(count)
   :module: sinon

.. function:: calledInOrder(spies)
   :module: sinon

.. function:: orderByFirstCall(spies)
   :module: sinon

.. function:: log()
   :module: sinon

.. function:: logError(label, err)
   :module: sinon

.. function:: typeOf(value)
   :module: sinon

プロパティ
==================

.. attribute:: defaultConfig
   :module: sinon

   .. data:: injectIntoThis

    | デフォルト値 : true
    | trueの場合、実行時のthisにsinon.config.properties [1]_ に記したの関数を設定する。
    |   この場合、sinon.config.injectInto === thisになる。
    | falseの場合、sinon.config.injectInto(またはsinon.defaultConfig.injectInto)に

   .. data:: injectInto

    | デフォルト値 : null
    | sinon.config.injectIntoThisにfalseを設定した場合に、injectIntoに設定されているオブジェクトに
    | spy,stub,mock等のメソッドを設定する。

   .. data:: properties

    | デフォルト値 : ["spy", "stub", "mock", "clock", "server", "requests"]
    | sinon.config.injectIntoまたは、sandbox.argsに上記のメソッドを設定する。

   .. data:: useFakeTimers

    | デフォルト値 : true
    | trueの場合、sinon.config.injectIntoまたは、sandbox.argsにclockを設定する。
    | falseの場合、clockはどこにも設定されない。

   .. data:: useFakeServer

    | デフォルト値 : true
    | trueの場合、sinon.config.injectIntoまたは、sandbox.argsにserver / requestsを設定する。
    | falseの場合、server / requestsはどこにも設定されない。

.. [1]
   設定が無い場合は、sinon.defaultConfigを指している。
