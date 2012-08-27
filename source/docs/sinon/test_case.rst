==================
sinon/test_case.js
==================

テストケースに複数のsinon.testの動作が必要な場合は、sinon.testCaseを使用することができる。

If you need the behavior of sinon.test for more than one test method in a test case, you can use sinon.testCase,
which behaves exactly like wrapping each test in sinon.test with one exception: setUp and tearDown can share fakes.

依存関係
========

* :doc:`../sinon.js <../sinon>`
* :doc:`test.js <./test>`

継承
====

なし

非公開メソッド
==================

.. function:: createTest(property, setUp, tearDown)

   | setUpまたはtearDownが定義されている場合に呼び出され、setUp -> property -> tearDownの順で関数を呼び出す関数オブジェクトを返す。
   | propertyでexceptionが発生すると、catchしtearDownを呼び出したあとで、再度exceptionをthrowし、上位にexceptionを伝播させる。
   | 関数オブジェクトの戻り値は、property関数の戻り値が返される。

   :param property: テスト用関数
   :param setUp: property関数呼び出し前に呼び出す関数。
   :param tearDown: property関数呼び出し後に呼び出す関数。
   :type property: Function
   :type setUp: Function
   :type tearDown: Function

   :rtype: Function
   :returns: setUp -> property -> tearDownの順番で関数を呼び出す関数オブジェクトを返す。

公開メソッド
==================

.. function:: testCase(tests, prefix)
   :module: sinon

   | sinon.testメソッドで生成したメソッドをmethodsに格納し、戻り値として返す。
   | 引数testsのObjctキーの先頭にprefixが設定されている場合sinon.testを用いたテスト候補となる。prefixのデフォルト値は、"test"となる。
   | prefixにマッチしない場合は、methodsにObjectキーをキーとしてtestsの関数オブジェクトが設定される。

   :param tests: テスト関数を持ったオブジェクト
   :param prefix: Test項目として判断する為のキーワード。デフォルトは"test"。
   :type tests: Object
   :type prefix: String

   :rtype: Object
   :returns: sinon.test()の戻り値(関数オブジェクト)を格納したObjectを返す。

プロパティ
==================

なし