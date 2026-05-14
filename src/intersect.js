import { InstancedMesh, Object3D, Points, Raycaster } from "three";

/**
 * The intersection point of a raycaster intersection test.
 * @typedef {Object} Intersection
 * @property {number} distance - The distance from the ray's origin to the intersection point.
 * @property {number} distanceToRay -  Some 3D objects e.g. {@link Points} provide the distance of the intersection to the nearest point on the ray. For other objects it will be `undefined`.
 * @property {Vector3} point - The intersection point, in world coordinates.
 * @property {Object} face - The face that has been intersected.
 * @property {number} faceIndex - The face index.
 * @property {Object3D} object - The 3D object that has been intersected.
 * @property {Vector2} uv - U,V coordinates at point of intersection.
 * @property {Vector2} uv1 - Second set of U,V coordinates at point of intersection.
 * @property {Vector3} normal - Interpolated normal vector at point of intersection.
 * @property {number} instanceId - The index number of the instance where the ray intersects the {@link InstancedMesh}.
*/

/**
 * 检测对象与射线的相交情况，并将结果存储到相交结果数组中
 * - 该方法基于threejs内部的intersect方法实现，增加了一个checkIgnore回调函数参数，用于在检测前检查是否需要忽略该对象，提升性能。
 * @param {Object3D} object - 要检测的对象实例
 * @param {Raycaster} raycaster - 射线发射器对象
 * @param {Array} [intersects] - 存储相交结果的数组，可不传
 * @param {boolean} [recursive] - 是否递归检测子对象，默认true
 * @param {boolean} [ignoreInvisible] - 是否忽略不可见对象，默认true
 * @param {Function} [checkIgnore] - 是否忽略对象的回调函数，参数为对象实例，返回true表示忽略该对象，false表示不忽略，可不传
 * @returns {Array<Intersection>} 返回相交结果数组，如果没有相交对象，则返回空数组
*/
function intersect(object, raycaster, intersects = [], recursive = true, ignoreInvisible = true, checkIgnore) {
    if ((ignoreInvisible && !object.visible) ||
        (typeof checkIgnore === 'function' && checkIgnore(object)))
        return;

    let propagate = true;
    if (object.layers.test(raycaster.layers)) {
        const result = object.raycast(raycaster, intersects);
        if (result === false) propagate = false;
    }

    if (propagate === true && recursive === true) {
        const children = object.children;
        for (let i = 0, l = children.length; i < l; i++) {
            intersect(children[i], raycaster, intersects, true, ignoreInvisible, checkIgnore);
        }
    }

    return intersects;
};

function ascSort(a, b) {
    return a.distance - b.distance;
};

/**
 * 检查一个对象与射线的相交情况，并按由近到远顺序返回所有相交结果数组
 * @param {Object3D} object - 要检测的对象实例
 * @param {Raycaster} raycaster - 射线发射器对象
 * @param {Array} [intersects] - 存储相交结果的数组，可不传
 * @param {boolean} [recursive] - 是否递归检测子对象，默认true
 * @param {boolean} [ignoreInvisible] - 是否忽略不可见对象，默认true
 * @param {Function} [checkIgnore] - 是否忽略对象的回调函数，参数为对象实例，返回true表示忽略该对象，false表示不忽略，可不传
 * @returns {Array<Intersection>} 返回相交结果数组，按照距离从近到远排序，如果没有相交对象，则返回空数组
*/
function intersectObject(object, raycaster, intersects, recursive, ignoreInvisible, checkIgnore) {
    intersect(object, raycaster, intersects, recursive, ignoreInvisible, checkIgnore);
    intersects.sort(ascSort);
    return intersects;
};


/**
 * 检查多个对象与射线的相交情况，并按由近到远顺序返回所有相交结果数组
 * @param {Array<Object3D>} objects - 要检测的对象实例数组
 * @param {Raycaster} raycaster - 射线发射器对象
 * @param {Array} [intersects] - 存储相交结果的数组，可不传
 * @param {boolean} [recursive] - 是否递归检测子对象，默认true
 * @param {boolean} [ignoreInvisible] - 是否忽略不可见对象，默认true
 * @param {Function} [checkIgnore] - 是否忽略对象的回调函数，参数为对象实例，返回true表示忽略该对象，false表示不忽略，可不传
 * @returns {Array<Intersection>} 返回相交结果数组，按照距离从近到远排序，如果没有相交对象，则返回空数组
*/
function intersectObjects(objects, raycaster, intersects = [], recursive = true, ignoreInvisible = true, checkIgnore) {
    for (let i = 0, l = objects.length; i < l; i++) {
        intersect(objects[i], raycaster, intersects, recursive, ignoreInvisible, checkIgnore);
    }
    intersects.sort(ascSort);
    return intersects;
};

export default intersect;
export { intersect, intersectObject, intersectObjects };
