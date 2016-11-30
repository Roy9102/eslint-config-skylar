/*
* @Author: Roy
* @Date:   2016-05-09 19:44:57
* @Last Modified by:   RoyChen
* @Last Modified time: 2016-11-30 12:19:45
*
* ESlint 代码格式规范
*/

module.exports = {
    "rules":{     

        // style Rules
        
        // 强制使用驼峰命名
        "camelcase":[1, {"properties":"always"}],
        // 强制在逗号后使用空格
        "comma-spacing":[1, {"before": false, "after": true}],
        // 约束标识符长度
        "id-length": [1, {"min": 1, "max": 32, "properties": "always", "exceptions": []}],
        // 标识符黑名单
        "id-blacklist":[1, "this", "top", "window", "class", "super", "event" ],
        // 缩进为4个空格，开启switchCase缩进，大小是4个空格
        "indent":[1, 4, {"SwitchCase":1}],
        // jsx属性使用双引号
        "jsx-quotes":[1, "prefer-double"],
        // 代码行最大长度，忽略注释和url，同时一个tab算4个字符
        "max-len":[1, {"code":120, "tabWidth":4, "ignoreComments":true, "ignoreUrls":true}],
        // 最大的嵌套层数
        "max-depth":[1,{"max":3}],
        // 构造函数的首字母大写，或者new操作符之后的函数首字母大写
        "new-cap":1,
        // 调用无参数构造函数时，不允许省略构造函数
        "new-parens":1, 
        // 链式调用时，每个方法调用必须在新的一行，可通过设置ignoreChainWithDepth来限定小于N层时不需要换行
        "newline-per-chained-call":[1, {"ignoreChainWithDepth":3}],
        // 不允许单独的if语句出现在else块中
        "no-lonely-if":1,
        // 不允许混用空格和TAB做为缩进
        "no-mixed-spaces-and-tabs":1,
        // 不允许多个空行
        "no-multiple-empty-lines":1,
        // 不允许使用嵌套的三元表达式
        "no-nested-ternary":1,
        // 在有else的时候，不允许使用否定的条件语句，这样逻辑太难理解
        "no-negated-condition":0,
        // 不允许函数调用时，函数名和括号之间有空格
        "no-spaced-func":1,
        // 该规则只对点操作符和方括号之间的空格有效，换行符不会有警告产生
        "no-whitespace-before-property":1,
        // 属性引号必要一致，只在有需要的时候引入
        "quote-props": [1, "consistent-as-needed", {"keywords":true}],
        // 保持字符串风格一致，使用单引号
        "quotes":[1, "double", "avoid-escape"],
        // 注释后必须有一个或多个空格 // 或者 /*
        "spaced-comment": 1,
        // 正则要用括号包起来，避免看起来像除法运算符
        "wrap-regex":1,  

    }


}