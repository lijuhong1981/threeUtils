## Functions

<dl>
<dt><a href="#setColorValue">setColorValue(color, value, [colorSpace])</a> ⇒ <code>Color</code></dt>
<dd><p>为threejs的Color对象赋值</p>
</dd>
<dt><a href="#setValues">setValues(target, values)</a></dt>
<dd><p>设置threejs的Obejct3D对象参数</p>
</dd>
<dt><a href="#setVectorValue">setVectorValue(vector, value)</a> ⇒ <code>Vector2</code> | <code>Vector3</code> | <code>Vector4</code> | <code>Euler</code> | <code>Quaternion</code> | <code>Spherical</code></dt>
<dd><p>为threejs的Vector2或Vector3或Vector4或Euler或Quaternion或Spherical对象赋值</p>
</dd>
<dt><a href="#traverse">traverse(object, callback)</a></dt>
<dd><p>遍历对象及其子对象，执行回调函数</p>
</dd>
<dt><a href="#traverseVisible">traverseVisible(object, callback)</a></dt>
<dd><p>遍历对象及其子对象中可见的对象，执行回调函数</p>
</dd>
</dl>

<a name="setColorValue"></a>

## setColorValue(color, value, [colorSpace]) ⇒ <code>Color</code>
为threejs的Color对象赋值

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>Color</code> | 要赋值的Color对象实例 |
| value | <code>Array.&lt;number&gt;</code> \| <code>number</code> \| <code>string</code> \| <code>Color</code> | 颜色值，可以是一个包含RGB分量的数组（如[1, 0, 0]表示红色），一个十六进制数（如0xff0000表示红色），一个CSS颜色字符串（如"red"或"#ff0000"表示红色），或者另一个Color对象实例 |
| [colorSpace] | <code>string</code> | 颜色空间，可选值为"srgb"或"srgb-linear"，仅当value为number或string时有效，表示输入的颜色值是sRGB空间还是线性空间，默认为"sRGB" |

<a name="setValues"></a>

## setValues(target, values)
设置threejs的Obejct3D对象参数

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>Object3D</code> | 要设置参数的Object3D对象实例 |
| values | <code>object</code> | 参数对象，包含要设置的参数名称和对应的值 |

<a name="setVectorValue"></a>

## setVectorValue(vector, value) ⇒ <code>Vector2</code> \| <code>Vector3</code> \| <code>Vector4</code> \| <code>Euler</code> \| <code>Quaternion</code> \| <code>Spherical</code>
为threejs的Vector2或Vector3或Vector4或Euler或Quaternion或Spherical对象赋值

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| vector | <code>Vector2</code> \| <code>Vector3</code> \| <code>Vector4</code> \| <code>Euler</code> \| <code>Quaternion</code> \| <code>Spherical</code> | 要赋值的Vector2或Vector3或Vector4或Euler或Quaternion或Spherical对象实例 |
| value | <code>Array.&lt;number&gt;</code> \| <code>object</code> | 向量值，可以是一个包含分量的数组（如[1, 2, 3]表示一个三维向量），或者另一个具有相同属性的对象实例（如{ x: 1, y: 2, z: 3 }表示一个三维向量） |

<a name="traverse"></a>

## traverse(object, callback)
遍历对象及其子对象，执行回调函数

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object3D</code> | 要遍历的对象实例 |
| callback | <code>function</code> | 回调函数，参数为当前遍历的对象实例，返回true表示停止遍历该对象的子对象 |

<a name="traverseVisible"></a>

## traverseVisible(object, callback)
遍历对象及其子对象中可见的对象，执行回调函数

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object3D</code> | 要遍历的对象实例 |
| callback | <code>function</code> | 回调函数，参数为当前遍历的对象实例，返回true表示停止遍历该对象的子对象 |

