# eslint-config-skylar
这是一份方便项目组中多人协作时约定代码规范的配置；

## Why

一个好的规范可以让团队的代码规范更加统一，增加代码的可读性，减少一些低级错误

## Usage

1. `npm install eslint-config-skylar --save-dev`
2. add `"extends": "skylar"` to your .eslintrc
3. Override rules in .eslintrc

For example:
```json
{
  "extends": "skylar",
  "rules" : {
    "semi": [2, "never"],
  }
}
```