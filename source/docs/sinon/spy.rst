============
sinon/spy.js
============

依存関係
========

* :doc:`../sinon.js <../sinon>`
* :doc:`match.js <./match>`

継承
====

非公開メソッド
==================

.. attribute:: spyCall
   :module: sinon

   .. function:: throwYieldError(proxy, text, args)

公開メソッド
==================

.. function:: spy(object, property)
   :module: sinon

   .. function:: reset()
      :module: sinon.spy

   .. function:: create(func)
      :module: sinon.spy

   .. function:: invoke(func, thisValue, args)
      :module: sinon.spy

   .. function:: getCall(i)
      :module: sinon.spy

   .. function:: calledBefore(spyFn)
      :module: sinon.spy

   .. function:: calledAfter(spyFn)
      :module: sinon.spy

   .. function:: withArgs()
      :module: sinon.spy

   .. function:: matches(args, strict)
      :module: sinon.spy

   .. function:: printf(format)
      :module: sinon.spy

   .. function:: alwaysCalledOn()
      :module: sinon.spy

      sinon.spy.spyCall.calledOnを呼び出す。

   .. function:: alwaysCalledWith()
      :module: sinon.spy

      sinon.spy.spyCall.calledWithを呼び出す。

   .. function:: alwaysCalledWithExactly()
      :module: sinon.spy

      sinon.spy.spyCall.calledWithExactlyを呼び出す。

   .. function:: alwaysCalledWithMatch()
      :module: sinon.spy

      sinon.spy.spyCall.calledWithMatchを呼び出す。

   .. function:: alwaysCalledWithNew()
      :module: sinon.spy

      sinon.spy.spyCall.calledWithNewを呼び出す。

   .. function:: alwaysReturned()
      :module: sinon.spy

      sinon.spy.spyCall.returnedを呼び出す。

   .. function:: alwaysThrew()
      :module: sinon.spy

      sinon.spy.spyCall.threwを呼び出す。

   .. function:: callArg()
      :module: sinon.spy

      sinon.spy.spyCall.callArgWithを呼び出す。

   .. function:: callArgWith()
      :module: sinon.spy

      sinon.spy.callArgを呼び出す。

   .. function:: calledOn()
      :module: sinon.spy

      sinon.spy.spyCall.calledOnを呼び出す。

   .. function:: calledWith()
      :module: sinon.spy

      sinon.spy.spyCall.calledWithを呼び出す。

   .. function:: calledWithExactly()
      :module: sinon.spy

      sinon.spy.spyCall.calledWithExactlyを呼び出す。

   .. function:: calledWithMatch()
      :module: sinon.spy

      sinon.spy.spyCall.calledWithMatchを呼び出す。

   .. function:: calledWithNew()
      :module: sinon.spy

      sinon.spy.spyCall.calledWithNewを呼び出す。

   .. attribute:: formatters()
      :module: sinon.spy

      .. function:: c(spy)
         :module: sinon.spy.formatters

      .. function:: n(spy)
         :module: sinon.spy.formatters

      .. function:: C(spy)
         :module: sinon.spy.formatters

      .. function:: t(spy)
         :module: sinon.spy.formatters

      .. function:: asterisk(spy, args)
         :module: sinon.spy.formatters

         asterisk === \*

   .. function:: invokeCallback()
      :module: sinon.spy

      sinon.spy.yieldを呼び出す。

   .. function:: neverCalledWith()
      :module: sinon.spy

      sinon.spy.spyCall.notCalledWithを呼び出す。

   .. function:: neverCalledWithMatch()
      :module: sinon.spy

      sinon.spy.spyCall.notCalledWithMatchを呼び出す。

   .. function:: returned()
      :module: sinon.spy

      sinon.spy.spyCall.returnedを呼び出す。

   .. attribute:: spyCall()
      :module: sinon.spy

      sinon.spyCallと同一オブジェクト

   .. attribute:: threw()
      :module: sinon.spy

      sinon.spy.spyCall.threwを呼び出す。

   .. attribute:: yield()
      :module: sinon.spy

      sinon.spy.spyCall.yieldを呼び出す。

   .. attribute:: yieldTo()
      :module: sinon.spy

      sinon.spy.spyCall.yieldToを呼び出す。

プロパティ
==================

.. attribute:: spyCall
   :module: sinon

   .. function:: create(spy, thisValue, args, returnValue, exception, id)
      :module: sinon.spyCall

   .. function:: calledOn(thisValue)
      :module: sinon.spyCall

   .. function:: calledWith()
      :module: sinon.spyCall

   .. function:: calledWithMatch()
      :module: sinon.spyCall

   .. function:: calledWithExactly()
      :module: sinon.spyCall

   .. function:: notCalledWith()
      :module: sinon.spyCall

   .. function:: notCalledWithMatch()
      :module: sinon.spyCall

   .. function:: returned(value)
      :module: sinon.spyCall

   .. function:: threw(error)
      :module: sinon.spyCall

   .. function:: calledWithNew(thisValue)
      :module: sinon.spyCall

   .. function:: calledBefore(other)
      :module: sinon.spyCall

   .. function:: calledAfter(other)
      :module: sinon.spyCall

   .. function:: callArg(pos)
      :module: sinon.spyCall

   .. function:: callArgWith(pos)
      :module: sinon.spyCall

   .. function:: yield()
      :module: sinon.spyCall

   .. function:: yieldTo(prop)
      :module: sinon.spyCall

   .. function:: toString()
      :module: sinon.spyCall




