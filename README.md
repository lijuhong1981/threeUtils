# threeUtils

存放开发 [three.js](https://threejs.org/) 过程中编写的一些小工具函数，基于 three.js 内置 API 封装，提供更便捷的遍历、相交检测与参数赋值能力。

## 特性

- 🌲 **遍历**：支持提前中止遍历子对象，并可只遍历可见对象
- 🎯 **相交检测**：支持忽略不可见对象、自定义忽略回调，结果按距离由近到远排序
- 🎨 **赋值**：统一处理 `Color` / `Vector` / `Euler` / `Quaternion` / `Spherical` / `Object3D` 的参数赋值
- 🌳 **按需引入**：ES Module，支持 tree-shaking
- 📦 **零额外依赖**：仅依赖 `three`

## 安装

```bash
npm install @lijuhong1981/three.utils
```

> 要求 `three >= 0.171.0`，且需在 ES Module 项目中使用。

## 使用

```js
import { traverse, setColorValue } from "@lijuhong1981/three.utils";
```

### 遍历 traverse / traverseVisible

与 `Object3D.traverse` 类似，但回调返回 `true` 即可中止遍历该对象的子对象，避免不必要的递归：

```js
import { traverse, traverseVisible } from "@lijuhong1981/three.utils";

traverse(scene, (child) => {
    if (child.isHiddenGroup) {
        return true; // 返回 true，不再遍历该对象的子对象
    }
    // 处理 child...
});
```

`traverseVisible` 只会遍历可见对象（`visible !== false`），其余行为与 `traverse` 一致：

```js
traverseVisible(scene, (child) => {
    // 只会进入 visible 为 true 的对象
});
```

### 相交检测 intersect / intersectObject / intersectObjects

```js
import { intersect, intersectObject, intersectObjects } from "@lijuhong1981/three.utils";

// 检测单个对象与射线的相交情况，结果追加到传入的数组并返回
const intersects = intersect(mesh, raycaster);

// 检测单个对象，并按距离由近到远排序返回
const results = intersectObject(mesh, raycaster, []);

// 检测多个对象，并按距离由近到远排序返回
const results = intersectObjects([mesh1, mesh2], raycaster);

// 忽略不可见对象（默认），并可通过回调自定义忽略规则
const results = intersectObjects(meshes, raycaster, [], true, true, (obj) => {
    return obj.userData.pickable === false; // 返回 true 表示忽略该对象
});
```

### 赋值 setColorValue / setVectorValue / setValues

```js
import { setColorValue, setVectorValue, setValues } from "@lijuhong1981/three.utils";

// 为 Color 赋值：支持数组、十六进制数、CSS 颜色字符串或另一个 Color 对象
setColorValue(material.color, [1, 0, 0]);   // 红色
setColorValue(material.color, 0xff0000);    // 红色
setColorValue(material.color, "#ff0000");   // 红色

// 为向量赋值：支持数组、同类对象或单个数字
setVectorValue(obj.position, [1, 2, 3]);          // position.set(1, 2, 3)
setVectorValue(obj.scale, { x: 2, y: 2, z: 2 });  // scale.copy({...})
setVectorValue(obj.rotation, 0);                  // 所有分量设为 0

// 批量设置 Object3D 参数，会自动识别 Color / Vector 等类型
setValues(mesh, {
    position: [0, 1, 0],
    scale: 2,
    rotation: 0,
    visible: true,
});
```

## 函数列表

| 函数 | 说明 |
| --- | --- |
| [`traverse`](./API.md#traverse) | 遍历对象及其子对象，回调返回 `true` 可中止遍历子对象 |
| [`traverseVisible`](./API.md#traversevisible) | 遍历对象及其子对象中可见的对象 |
| [`intersect`](./API.md#intersect) | 检测对象与射线的相交情况，结果追加到传入数组 |
| [`intersectObject`](./API.md#intersectobject) | 检测单个对象，并按距离由近到远排序 |
| [`intersectObjects`](./API.md#intersectobjects) | 检测多个对象，并按距离由近到远排序 |
| [`setColorValue`](./API.md#setcolorvalue) | 为 `Color` 对象赋值 |
| [`setVectorValue`](./API.md#setvectorvalue) | 为 `Vector2/3/4`、`Euler`、`Quaternion`、`Spherical` 赋值 |
| [`setValues`](./API.md#setvalues) | 批量设置 `Object3D` 参数 |

## [API 文档](./API.md)
