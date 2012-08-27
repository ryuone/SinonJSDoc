=============
sinon/mock.js
=============

依存関係
========

* :doc:`../sinon.js <../sinon>`
* :doc:`stub.js <./stub>`

継承
====

非公開メソッド
==================

.. function:: mock(object)
   :module: sinon

   .. function:: each(collection, callback)

.. attribute:: expectation
   :module: sinon

   .. function:: callCountInWords(callCount)

   .. function:: expectedCallCountInWords(expectation)

   .. function:: receivedMinCalls(expectation)

   .. function:: receivedMaxCalls(expectation)

公開メソッド
==================

.. function:: mock(object)
   :module: sinon

   .. function:: create(object)
      :module: sinon.mock

   .. function:: expects(method)
      :module: sinon.mock

   .. function:: restore()
      :module: sinon.mock

   .. function:: verify()
      :module: sinon.mock

   .. function:: invokeMethod(method, thisValue, args)
      :module: sinon.mock

.. attribute:: expectation
   :module: sinon

   .. function:: create(methodName)
      :module: sinon.expectation

   .. function:: invoke(func, thisValue, args)
      :module: sinon.expectation

   .. function:: atLeast(num)
      :module: sinon.expectation

   .. function:: atMost(num)
      :module: sinon.expectation

   .. function:: never()
      :module: sinon.expectation

   .. function:: once()
      :module: sinon.expectation

   .. function:: twice()
      :module: sinon.expectation

   .. function:: thrice()
      :module: sinon.expectation

   .. function:: exactly(num)
      :module: sinon.expectation

   .. function:: met()
      :module: sinon.expectation

   .. function:: verifyCallAllowed(thisValue, args)
      :module: sinon.expectation

   .. function:: allowsCall(thisValue, args)
      :module: sinon.expectation

   .. function:: withArgs()
      :module: sinon.expectation

   .. function:: withExactArgs()
      :module: sinon.expectation

   .. function:: on(thisValue)
      :module: sinon.expectation

   .. function:: toString()
      :module: sinon.expectation

   .. function:: verify()
      :module: sinon.expectation

   .. function:: pass()
      :module: sinon.expectation

   .. function:: fail()
      :module: sinon.expectation


プロパティ
==================

.. attribute:: expectation
   :module: sinon

   .. data:: minCalls
      :module: sinon.expectation

      デフォルト値 : 1

   .. data:: maxCalls
      :module: sinon.expectation

      デフォルト値 : 1

