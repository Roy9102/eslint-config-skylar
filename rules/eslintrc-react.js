module.exports = {
	"rules": {
		// 指定jsx属性应该使用双引号
		"jsx-quotes": [2, "prefer-double"],
		// 关闭display-name需要显式声明的要求
		"react/display-name": [0, { "ignoreTranspilerName": false }],
		// 禁止使用的propTypes类型
		"react/forbid-prop-types": [2, { "forbid": ["any"] }],
		// 强制使用boolean类型,如果是true也要声明，不能省略
		"react/jsx-boolean-value": [2, "always"],
		// 规定右边尖括号的位置
		"react/jsx-closing-bracket-location": [2,  {selfClosing: 'tag-aligned', nonEmpty: 'after-props'}],
		// jsx 属性的花括号左右两则可以存在空格，也可以都不要，支持多行属性
		"react/jsx-curly-spacing": [2, "never", { "allowMultiline": true }],
		// 约定jsx事件句柄的key的规范和回调函数的命名规范  eg. onChange = { this.handleChange }
		"react/jsx-handler-names": [1, {
		  "eventHandlerPrefix": "handle",	// 回调函数必须以handle开头    eg. handleChange
		  "eventHandlerPropPrefix": "on",   // 事件名称属性必须以on开头 eg. onChange
		}],
		// 规定JSX标签的缩进方式，必须是四个空格
		"react/jsx-indent": [2, 4],
		// 规定jsx的属性缩进必须是四个空格
		"react/jsx-indent-props": [2, 4],
		// 在数组遍历渲染过程中要求必须有key属性，提高react渲染性能
		"react/jsx-key": 2,
		// 规定每行只能最多只能有两个属性
		"react/jsx-max-props-per-line": [1, { "maximum": 2 }],
		// 不允许在属性中使用bind，如果有必要应该把这个提到构造函数中；
		"react/jsx-no-bind": [2, {
		  "ignoreRefs": true,
		  "allowArrowFunctions": true,
		  "allowBind": false,
		}],
		// 禁止使用重复属性  
		"react/jsx-no-duplicate-props": [1, { "ignoreCase": false }],
		// Disallow undeclared variables in JSX
		"react/jsx-no-undef": 2,
		// Enforce PascalCase for user-defined JSX components
		"react/jsx-pascal-case": [2, {
		  "allowAllCaps": true,
		  "ignore": [],
		}],
		// propTypes属性按字母排序
		"react/sort-prop-types": [0, {
		  "ignoreCase": false,
		  "callbacksLast": false,
		  "requiredFirst":false,
		}],
		// 属性必须要在propTypes中进行类型声明
		"react/prop-types": [1, { "ignore": [], "customValidators": [] }],
		// 属性按字母表排序
		"react/jsx-sort-props": [0, {
		  "ignoreCase": false,
		  "callbacksLast": false,
		  "shorthandFirst":false
		}],
		// 只有no-unused-varas启用时，此项才有用
		"react/jsx-uses-react": 2,
		// 阻止那些用在jsx标签中的变量被定义成未使用，同样只有no-unused-vars启用时才有效
		"react/jsx-uses-vars": 2,
		// 禁止使用危险的jsx属性，如：dangerouslySetInnerHTML
		"react/no-danger": 2,
		// 禁止使用已经废弃的方法,带上react版本
		"react/no-deprecated": 1,
		// 禁止在componentDidMount和componentDidUpdate方法中使用setState，这样会造成死循环，可以在事件注册的回调函数中使用
		"react/no-did-mount-set-state": 2,
		"react/no-did-update-set-state": 2,
		// 禁止直接对this.state进行赋值，只能通过setState
		"react/no-direct-mutation-state": 1,
		// 禁止使用isMounted方法，即将被官方抛弃
		"react/no-is-mounted": 2,
		// 一个文件只能是一个组件，除非是那些无状态组件
		"react/no-multi-comp": [2, { "ignoreStateless": true }],
		// 在使用redux,或者flux等架构时可以开启
		"react/no-set-state": 0,
		// 禁止使用字符串做为refs的值
		"react/no-string-refs": 0,
		// 禁止使用未知的DOM属性，属性都是camelCase命名规则；
		"react/no-unknown-property": 2,
		// 强制使ES6的声明方式去定义组件，不使用React.createClass方法去声明组件
		"react/prefer-es6-class": [2, "always"],
		// 对于不满足下面条件状态的组件，建议写成纯函数组件
		// 1、有displayName, propTypes, render, 和无用的构造函数之外的一些其它属性或者方法；
		// 2、有this.props和 this.context这两个属性之外的一些属性
		// 3、jsx中有ref属性；
		// 4、render方法返回jsx组件
		"react/prefer-stateless-function": 1,
		// 阻止在JSX语法中没有引入React
		"react/react-in-jsx-scope": 2,
		// 在extensions数组中的后缀名的组件无须写上其扩展名
		"react/require-extension": [0, { "extensions": [] }],
		// 强制render方法一定必须return元素
		"react/require-render-return": 2,
		// 自闭合标签无需要再使用额外的closing Tag
		"react/self-closing-comp": 2, 
		// 强制在自闭合标签关闭之前留有空格或者换行符
		"react/jsx-space-before-closing": [0, "always"],
		// 给component的内部方法进行排序,order标明顺序，group代表每个order项里面的排序
		"react/sort-comp": [2, {
		  "order": [
		    "static-methods",
		    "lifecycle",
		    "/^handle.+$/",
		    "everything-else",
		    "renderMethod"
		  ],
		  "groups":{
		  	"liefcycle":[
				'constructor',
				'getChildContext',
				'componentWillMount',
				'componentDidMount',
				'componentWillReceiveProps',
				'shouldComponentUpdate',
				'componentWillUpdate',
				'componentDidUpdate',
				'componentWillUnmount'
		  	],
			renderMethod: [
				'/^render.+$/',
				'render'
			]
		  }
		}],
		// 多行元素需要用括号包起来（）
		"react/jsx-wrap-multilines": [2, {
		  "declaration": true,
		  "assignment": true,
		  "return": true
		}],
		// 规范属性是否应该在新的一行，multiline当有多个属性时必须每个属性都是新的一行，只有一个属性的时候可以和标签同行
		"react/jsx-first-prop-new-line": [2, "multiline"],
		// 强制等号两边必须有空格
		"react/jsx-equals-spacing": [2, "always"],
		// 禁止在A标签中使用target="_blank",使用时必须加上 rel="noopener noreferrer"
		"react/jsx-no-target-blank": 2
	},
}