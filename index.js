module.exports = {
    plugins:[
    	"react"
    ],
    // 规则可扩展
    "extends": [
        "./rules/eslintrc-base.js",
        "./rules/eslintrc-react.js",
        "./rules/eslintrc-style.js"
    ].map(require.resolve)
}