## Functions

<dl>
<dt><a href="#intersect">intersect(object, raycaster, [intersects], [recursive], [ignoreInvisible], [checkIgnore])</a> ⇒ <code><a href="#Intersection">Array.&lt;Intersection&gt;</a></code></dt>
<dd><p>检测对象与射线的相交情况，并将结果存储到相交结果数组中</p>
<ul>
<li>该方法基于threejs内部的intersect方法实现，增加了一个checkIgnore回调函数参数，用于在检测前检查是否需要忽略该对象，提升性能。</li>
</ul>
</dd>
<dt><a href="#intersectObject">intersectObject(object, raycaster, [intersects], [recursive], [ignoreInvisible], [checkIgnore])</a> ⇒ <code><a href="#Intersection">Array.&lt;Intersection&gt;</a></code></dt>
<dd><p>检查一个对象与射线的相交情况，并按由近到远顺序返回所有相交结果数组</p>
</dd>
<dt><a href="#intersectObjects">intersectObjects(objects, raycaster, [intersects], [recursive], [ignoreInvisible], [checkIgnore])</a> ⇒ <code><a href="#Intersection">Array.&lt;Intersection&gt;</a></code></dt>
<dd><p>检查多个对象与射线的相交情况，并按由近到远顺序返回所有相交结果数组</p>
</dd>
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
<dd><p>遍历对象及其子对象，执行回调函数，与threejs的Object3D.traverse方法类似，但增加了一个回调函数返回参数，用于在遍历过程中检查是否需要停止遍历该对象的子对象，以提升性能。</p>
</dd>
<dt><a href="#traverseVisible">traverseVisible(object, callback)</a></dt>
<dd><p>遍历对象及其子对象中可见的对象，执行回调函数，与threejs的Object3D.traverse方法类似，但增加了一个回调函数返回参数，用于在遍历过程中检查是否需要停止遍历该对象的子对象，以提升性能。</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Intersection">Intersection</a> : <code>Object</code></dt>
<dd><p>The intersection point of a raycaster intersection test.</p>
</dd>
</dl>

<a name="intersect"></a>

## intersect(object, raycaster, [intersects], [recursive], [ignoreInvisible], [checkIgnore]) ⇒ [<code>Array.&lt;Intersection&gt;</code>](#Intersection)
检测对象与射线的相交情况，并将结果存储到相交结果数组中- 该方法基于threejs内部的intersect方法实现，增加了一个checkIgnore回调函数参数，用于在检测前检查是否需要忽略该对象，提升性能。

**Kind**: global function  
**Returns**: [<code>Array.&lt;Intersection&gt;</code>](#Intersection) - 返回相交结果数组，如果没有相交对象，则返回空数组  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| object | <code>Object3D</code> |  | 要检测的对象实例 |
| raycaster | <code>Raycaster</code> |  | 射线发射器对象 |
| [intersects] | <code>Array</code> |  | 存储相交结果的数组，可不传 |
| [recursive] | <code>boolean</code> | <code>true</code> | 是否递归检测子对象，默认true |
| [ignoreInvisible] | <code>boolean</code> | <code>true</code> | 是否忽略不可见对象，默认true |
| [checkIgnore] | <code>function</code> |  | 是否忽略对象的回调函数，参数为对象实例，返回true表示忽略该对象，false表示不忽略，可不传 |

<a name="intersectObject"></a>

## intersectObject(object, raycaster, [intersects], [recursive], [ignoreInvisible], [checkIgnore]) ⇒ [<code>Array.&lt;Intersection&gt;</code>](#Intersection)
检查一个对象与射线的相交情况，并按由近到远顺序返回所有相交结果数组

**Kind**: global function  
**Returns**: [<code>Array.&lt;Intersection&gt;</code>](#Intersection) - 返回相交结果数组，按照距离从近到远排序，如果没有相交对象，则返回空数组  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object3D</code> | 要检测的对象实例 |
| raycaster | <code>Raycaster</code> | 射线发射器对象 |
| [intersects] | <code>Array</code> | 存储相交结果的数组，可不传 |
| [recursive] | <code>boolean</code> | 是否递归检测子对象，默认true |
| [ignoreInvisible] | <code>boolean</code> | 是否忽略不可见对象，默认true |
| [checkIgnore] | <code>function</code> | 是否忽略对象的回调函数，参数为对象实例，返回true表示忽略该对象，false表示不忽略，可不传 |

<a name="intersectObjects"></a>

## intersectObjects(objects, raycaster, [intersects], [recursive], [ignoreInvisible], [checkIgnore]) ⇒ [<code>Array.&lt;Intersection&gt;</code>](#Intersection)
检查多个对象与射线的相交情况，并按由近到远顺序返回所有相交结果数组

**Kind**: global function  
**Returns**: [<code>Array.&lt;Intersection&gt;</code>](#Intersection) - 返回相交结果数组，按照距离从近到远排序，如果没有相交对象，则返回空数组  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| objects | <code>Array.&lt;Object3D&gt;</code> |  | 要检测的对象实例数组 |
| raycaster | <code>Raycaster</code> |  | 射线发射器对象 |
| [intersects] | <code>Array</code> |  | 存储相交结果的数组，可不传 |
| [recursive] | <code>boolean</code> | <code>true</code> | 是否递归检测子对象，默认true |
| [ignoreInvisible] | <code>boolean</code> | <code>true</code> | 是否忽略不可见对象，默认true |
| [checkIgnore] | <code>function</code> |  | 是否忽略对象的回调函数，参数为对象实例，返回true表示忽略该对象，false表示不忽略，可不传 |

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
遍历对象及其子对象，执行回调函数，与threejs的Object3D.traverse方法类似，但增加了一个回调函数返回参数，用于在遍历过程中检查是否需要停止遍历该对象的子对象，以提升性能。

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object3D</code> | 要遍历的对象实例 |
| callback | <code>function</code> | 回调函数，参数为当前遍历的对象实例，返回true表示停止遍历该对象的子对象 |

<a name="traverseVisible"></a>

## traverseVisible(object, callback)
遍历对象及其子对象中可见的对象，执行回调函数，与threejs的Object3D.traverse方法类似，但增加了一个回调函数返回参数，用于在遍历过程中检查是否需要停止遍历该对象的子对象，以提升性能。

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object3D</code> | 要遍历的对象实例 |
| callback | <code>function</code> | 回调函数，参数为当前遍历的对象实例，返回true表示停止遍历该对象的子对象 |

<a name="Intersection"></a>

## Intersection : <code>Object</code>
The intersection point of a raycaster intersection test.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| distance | <code>number</code> | The distance from the ray's origin to the intersection point. |
| distanceToRay | <code>number</code> | Some 3D objects e.g. [Points](Points) provide the distance of the intersection to the nearest point on the ray. For other objects it will be `undefined`. |
| point | <code>Vector3</code> | The intersection point, in world coordinates. |
| face | <code>Object</code> | The face that has been intersected. |
| faceIndex | <code>number</code> | The face index. |
| object | <code>Object3D</code> | The 3D object that has been intersected. |
| uv | <code>Vector2</code> | U,V coordinates at point of intersection. |
| uv1 | <code>Vector2</code> | Second set of U,V coordinates at point of intersection. |
| normal | <code>Vector3</code> | Interpolated normal vector at point of intersection. |
| instanceId | <code>number</code> | The index number of the instance where the ray intersects the [InstancedMesh](InstancedMesh). |

