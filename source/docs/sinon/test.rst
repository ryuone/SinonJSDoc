=============
sinon/test.js
=============

依存関係
========

* :doc:`../sinon.js <../sinon>`
* :doc:`sandbox.js <./sandbox>`

継承
====

なし

非公開メソッド
==================

なし

公開メソッド
==================

.. function:: test(callback)
   :module: sinon

   | sinon.sandboxをcallback関数にバインドさせた関数オブジェクトを返す。
   | 関数オブジェクト実行時の戻り値は、callback関数の戻り値となっている。
   | また、関数オブジェクト実行時にcallback関数内でthis.spy / this.stub / this.mockを使っている場合は、
   | callback完了後、sandbox.verifyAndRestore()を呼び出して、spy/stub/mockを元に戻している。
   |
   | sandboxインスタンスは、sinon.config引数にしたsinon.getConfig()の設定を元に生成する。

   :param callback: テストを実施する関数
   :type callback: Function

   :returns: sinon.sandboxをbindさせた関数オブジェクトを返す。
   :rtype: Function

プロパティ
==================

.. attribute:: config
   :module: sinon.test

   使用していないと思われる。