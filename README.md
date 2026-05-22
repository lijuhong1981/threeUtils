# threeUtils

用来存放开发threejs过程中编写的一些小工具函数。

## 安装

```bash
npm install @lijuhong1981/three.utils
```

## 使用

```js
import { traverse, setColorValue } from "@lijuhong1981/three.utils";
...
traverse(scene, (child)=>{
    if (child.visible === false)
        return true; //返回true表示中止遍历该对象的子对象
});
```

## [API文档](./API.md)
