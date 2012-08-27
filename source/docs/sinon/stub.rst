=============
sinon/stub.js
=============

依存関係
========

* :doc:`../sinon.js <../sinon>`
* :doc:`spy.js <./spy>`

継承
====

非公開メソッド
==================

.. function:: getCallback(stub, args)

.. function:: getCallbackError(stub, func, args)

.. function:: callCallback(stub, args)

.. attribute:: stub
   :module: sinon

   .. function:: throwsException(error, message)

公開メソッド
==================

.. function:: stub(object, property, func)
   :module: sinon

   .. function:: create()
      :module: sinon.stub

   .. function:: returns(value)
      :module: sinon.stub

   .. function:: returnsArg(pos)
      :module: sinon.stub

   .. function:: returnsThis()
      :module: sinon.stub

   .. function:: throws()
      :module: sinon.stub

      非公開メソッド：throwsException を呼び出す。

   .. function:: throwsException()
      :module: sinon.stub

      非公開メソッド：throwsException を呼び出す。

   .. function:: callsArg(pos)
      :module: sinon.stub

   .. function:: callsArgOn(pos, context)
      :module: sinon.stub

   .. function:: callsArgWith(pos)
      :module: sinon.stub

   .. function:: callsArgWith(pos, context)
      :module: sinon.stub

   .. function:: callsArgAsync(pos)
      :module: sinon.stub

      this.callbackAsync(thisはsinon.stubのインスタンス)にtrueを設定して、sinon.stub.callsArgを呼び出す。

   .. function:: callsArgOnAsync(pos, context)
      :module: sinon.stub

      this.callbackAsync(thisはsinon.stubのインスタンス)にtrueを設定して、sinon.stub.callsArgOnを呼び出す。

   .. function:: callsArgWithAsync(pos)
      :module: sinon.stub

      this.callbackAsync(thisはsinon.stubのインスタンス)にtrueを設定して、sinon.stub.callsArgWithを呼び出す。

   .. function:: callsArgWithAsync(pos, context)
      :module: sinon.stub

      this.callbackAsync(thisはsinon.stubのインスタンス)にtrueを設定して、sinon.stub.callsArgWithを呼び出す。

   .. function:: yields()
      :module: sinon.stub

   .. function:: yieldsOn(context)
      :module: sinon.stub

   .. function:: yieldsTo(prop)
      :module: sinon.stub

   .. function:: yieldsToOn(prop, context)
      :module: sinon.stub

   .. function:: yieldsAsync()
      :module: sinon.stub

      this.callbackAsync(thisはsinon.stubのインスタンス)にtrueを設定して、sinon.stub.yieldsを呼び出す。

   .. function:: yieldsOnAsync(context)
      :module: sinon.stub

      this.callbackAsync(thisはsinon.stubのインスタンス)にtrueを設定して、sinon.stub.yieldsOnを呼び出す。

   .. function:: yieldsToAsync(prop)
      :module: sinon.stub

      this.callbackAsync(thisはsinon.stubのインスタンス)にtrueを設定して、sinon.stub.yieldsToを呼び出す。

   .. function:: yieldsToOnAsync(prop, context)
      :module: sinon.stub

      this.callbackAsync(thisはsinon.stubのインスタンス)にtrueを設定して、sinon.stub.yieldsToOnを呼び出す。

プロパティ
==================

