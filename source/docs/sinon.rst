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

   | objがDOM要素かどうかを判断する。DOM要素であればtrue、DOM要素で無ければfalseを返す。

   :param Object(DOM要素) obj: DOM要素かどうかの判断対象
   :returns: DOM要素の場合、true / DOM要素では無い場合、false。
   :rtype: Boolean

.. function:: isElement(obj)

   | objがDOM要素かどうかチェックする。nodeType === 1をチェックし、内部でisDOMNodeを呼び出す。
   | DOM要素であればtrue,違えばfalseを返す。

   :param Object(DOM要素) obj: DOM要素かどうかの判断対象
   :returns: DOM要素の場合、true / DOM要素では無い場合、false。
   :rtype: Boolean

.. function:: isFunction(obj)

   | objがFunctionであればtrue,違えばfalseを返す。

   :param Function obj: Functionかどうかの判断対象
   :returns: Functionの場合、true / Functionでは無い場合、false。
   :rtype: Boolean

.. function:: mirrorProperties(target, source)

   | sourceのプロパティをtargetにコピーする。
   | この時Object.prototype.hasOwnPropertyを用いて、targetが同じ名前のプロパティを持っている場合は、コピーしない。

   :param Object target: コピー先オブジェクト
   :param Object source: コピー元オブジェクト

公開メソッド
==================

.. function:: wrapMethod(object, property, method)
   :module: sinon

   | object[property]をmethodで上書きする。すでにwarpされている場合はエラーとなる。
   | また、mirrorPropertiesを用いてobject[property]のプロパティ等をmethodにコピーする。

   :param Object object: wrap対象となる ``property`` を持っているobject
   :param String property: objectのメソッド名
   :param Function method: ``object[property]`` を上書きする関数オブジェクト
   :returns: 引数のmethodを返す。
   :rtype: Function

.. function:: extend(target,...)
   :module: sinon

   | 第2引数以降のオブジェクトのプロパティをtargetに追加する。

   :param Object target: 拡張対象のオブジェクト
   :returns: 第一引数のtargetを返す。
   :rtype: Object

.. function:: create(proto)
   :module: sinon

   | protoをprototypeに設定したインスタンスを生成して返す。

   :param Object proto: 関数のプロトタイプに設定するオブジェクト
   :returns: protoをprototypeに設定したインスタンスオブジェクト
   :rtype: Object

.. function:: deepEqual(a, b)
   :module: sinon

   | aとbが同じかどうかチェック。a,b共に配列であれば、要素一つずつを更にdeepEqualを使って比較している。
   | DOMかどうかのチェックなども行なっている。
   | aとbが同じであれば、trueを返す。

   :param Anything a: 比較対象A
   :param Anything b: 比較対象B
   :returns: 比較した結果同じであればtrue、異なればfalseを返す。
   :rtype: Boolean

.. function:: functionName(func)
   :module: sinon

   | 関数名を返す。

   :param Function func: 名前を知りたい関数オブジェクト
   :returns: 関数名を返す。
   :rtype: String

.. function:: functionToString()
   :module: sinon

   | this.getCall && this.callCountをしている為、sinonのコンテキストで呼び出すことは想定していない。現時点での呼び出し方法は不明。
   | spy.js / stub.js内で使用されている。

   :returns: 関数名を返す。
   :rtype: String

.. function:: getConfig(custom)
   :module: sinon

   | sinon.defaultConfigを取得。cutomオブジェクトにsinon.defaultConfigのキーと同じ名前がある場合は、customの方を優先。

   :param Object custom: sinon.jsの設定を上書きする為のオブジェクト
   :returns: sinon.jsの設定値
   :rtype: Object

.. function:: format(val)
   :module: sinon

   | return "" + valをしているだけ、sinon.jsの後半で、上書きを行なっている。

   :param Anything val: format処理したい値
   :returns: "" + valの結果を返す。(val.toString()の結果)
   :rtype: String

.. function:: timesInWords(count)
   :module: sinon

   | countが1なら"once" / 2なら"twice" / 3なら"thrice" / 0 or otherなら "N times"を返す。

   :param Numeric count: 文字化したい数字
   :returns: 回数を文字で返す。
   :rtype: String

.. function:: calledInOrder(spies)
   :module: sinon

   | 順番通りに、spyが呼ばれているかチェック。

   :param Array spies: Spy関数の配列
   :returns: 順番通り呼ばれている場合true、呼ばれていない場合false。
   :rtype: Boolean

.. function:: orderByFirstCall(spies)
   :module: sinon

   | 呼ばれた順にspiesをソート

   :param Array spies: Spy関数の配列
   :returns: ソートした結果
   :rtype: Array

.. function:: log()
   :module: sinon

   | noop関数(自分で実装しないと何もしてくれない。)

.. function:: logError(label, err)
   :module: sinon

   | sinon.logを呼び出して、例外をthrowしている。(なぜsetTimeoutを利用してthrowしているのか不明)

   :param String label: エラーメッセージに出力する文字列
   :param Object error: エラーオブジェクト(name/message/stackプロパティを持っている事を想定)

.. function:: typeOf(value)
   :module: sinon

   | nullは"null"を返す。
   | Object.prototype.toString.call(value)で取得した結果、"[object String]"等の"String".toLowerCase()を返す。

   :param Anything value: 型情報を知りたい値
   :returns: 型名
   :rtype: String

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
