module.exports = {
    // 每个规则都有三个值
    // 0: 关闭该规则
    // 1: 开启，返回警告
    // 2: 开启，返回错误
    // 插件规则以插件名为命名空间
    "rules":{
        // 对象或者数据最后一个元素不能带上逗号
        "comma-dangle":[2, "never"],
        // 不允许在if或者循环中判断中赋值
        "no-cond-assign": [2, "except-parens"],
        // 函数定义时不能有重复参数
        "no-dupe-args": 2,
        // 不允许Object有重复的Key
        "no-dupe-keys": 2,
        // 不允许switch有相同的case值
        "no-duplicate-case":2,
        //不允许不空的块作用域
        "no-empty": [1, { "allowEmptyCatch": true }],
        // 不允许重复定义异常变量
        "no-ex-assign":2,
        // 不能对已经是bool值的变量再进行bool类型转换
        "no-extra-boolean-cast":2,
        // 检查是否有多余的括号
        "no-extra-parens":[1, "all"],
        // 多余分号
        "no-extra-semi":2,
        // 禁止声明块级var变量或者声明函数
        "no-inner-declarations": 1,
        // 将声明在块级作用域的var变量看成块级变量，防止在块作用域之外调用
        "block-scoped-var":1,
        // 禁止in操作符的否定的左操作数
        "no-negated-in-lhs": 2,
        // 禁止不规则的空格
        "no-irregular-whitespace":2,
        // 禁止全局对象的函数调用，
        "no-obj-calls":2,
        // 禁止正则表达式中的空格 
        "no-regex-spaces":2,
        // 禁止使用稀疏数组
        "no-sparse-arrays":2,
        // 避免意外的多行表达式
        "no-unexpected-multiline":2,
        // 禁止不可达代码 比如，在return 之后还有执行代码
        "no-unreachable":2,
        // 在if中如果有return语句，那样else就是多余，可去掉 
        "no-else-return":1,
        // 不允许使用NaN来进行比较判断，判断是否为数字应该使用isNaN()
        "use-isnan":1,
        // 确保typeof的结果是与下面集合的元素进行比较
        // 【undefined, object, number, boolean, string, functdion, symbol】
        "valid-typeof":2,
        // 确保数组方法中有return语句
        "array-callback-return":1,
        // 最大的复杂度
        "complexity": [1, { "max": 20 }],
        // 确保所有的return语句返回指定的值；
        "consistent-return":1,
        // 不允许省略花括号
        "curly":1,
        // 确保有switch语句中有default-case
        "default-case":1,
        // 保持点操作符位置的一致性，链式编程时统一风格
        // "property":点操作符在行首 
        // "object": 点操作符在行末
        "dot-location":[1, "property"],
        //强制使用三等号
        "eqeqeq":1,
        // 使用for in 循环时，如果没有对结果进行筛选（hasOwnProperty）,给出警告
        "guard-for-in":1,       
        // arguments.caller,arguments.callee, es6中已经被弃用;
        "no-caller":1,
        // 禁止在case子句中进行声明
        "no-case-declarations":1,
        // 禁止出现像除法的正则表达式
        "no-div-regex":1,
        // 禁止声明空函数
        "no-empty-function":2,
        // 禁止使用空解构模式
        "no-empty-pattern":2,
        // 禁止在没有使用typeof的情况下与null进行比较，因为自动类型转换，undefined == null 为true
        "no-eq-null":1,
        // 不允许使用eval
        "no-eval":1,
        // 在无需使用this的函数体内使用bind,对性能会造成不必要的损耗
        "no-extra-bind":2,
        // 避免出现无意的缺少break的switch-case，可通过注释（// fallthrough）声明是有意为之
        "no-fallthrough":2,
        // 禁止数字字面量使用前置或末尾小数点
        "no-floating-decimal":1,        
        // 禁止在顶级做用域声明全局变更，全局变量要显式赋值给window或self，对于es6和amd,umd无效
        "no-implicit-globals":1,
        // setTimeout,setInterval第一个参数不允许使用可执行的js字符串，防止隐式eval
        "no-implied-eval":1,
        // 禁止this关键字出现在类或者对象之外，该规则只在严格模式下生效，或者ESlint配置中设置sourceType:module
        "no-invalid-this":2,
        //禁用不必要的嵌套块, es6中let，const会有块级绑定
        "no-lone-blocks":2,
        // 禁止在循环中存在函数，读取外层变量
        "no-loop-func":2,
        // 代码中多次出现的无意义的数字常量，尽量用命名常量取代，让代码更为清晰，维护更方便；
        "no-magic-numbers":[1,{"ignoreArrayIndexes":true, "enforceConst":true}],
        // 禁止使用多行字符串，可以用``代替
        "no-multi-str":2,
        // 禁止对原生对象进行赋值
        "no-native-reassign":2,
        // 禁止新建一个对象却没有将对象存储在变量中
        "no-new":2,
        // 禁止对Function使用new操作符
        "no-new-func":2,
        // 不建议使用原始类型如String，Boolean，Number等这些包装实例
        "no-new-wrappers":1,
        // 禁止对函数参数重新赋值,props为true时会对对象属性也进行只读检测
        "no-param-reassign":[2, {"props":false}],
        // 禁止多次声明同一变量,"builtinGlobals": true时会检查关键字
        "no-redeclare":[2,{"builtinGlobals": true}],
        // 禁止无效的自我赋值
        "no-self-assign":2,
        // 禁止循环条件不改变，造成死循环
        "no-unmodified-loop-condition":1,
        // 禁止无用的表达式，类似un-used-var
        "no-unused-expressions":1,
        // 禁止不必要的call,apply,这两种方法效率太低
        "no-useless-call":1,
        // 禁止不必要的转义
        "no-useless-escape":1,
        // 禁止无必要的字符拼接
        "no-useless-concat":1,
        // 建议使用parseInt的第二个参数
        // "as_need",只在需要时传入
        // "always", 默认值，总是需要传入
        "radix":1,
        // 建议变量在其作用域前置
        "vars-on-top":1,
        // 常量必须写在前面，防止写少一个等号，这样会报错
        "yoda":[2,"always"],
        // 禁止声明无用的变量
        "no-unused-vars":1,
        // 禁止使用未声明变量
        "no-undef":2,
        // 禁止在未声明变量之前使用变量
        "no-use-before-define":2,
     

        // 不允许使用console
        "no-console":     [1, { "allow": ["warn", "log"] }],   
        // 使用alert, confirm, prompt等原生API时给出警告
        "no-alert": 1,
         // 验证JSDoc的正确性，因为js语法不检查注释的正确性；
        "valid-jsdoc":1
    }

}