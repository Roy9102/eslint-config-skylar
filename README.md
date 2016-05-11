eslint-config-skylar
```.eslintrc.json
{
  "extends": "skylar",
}
```

# eslint-config-skylar
This package provides ES6 and React styleguide;

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