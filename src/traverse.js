import { Object3D } from "three";

/**
 * 遍历对象及其子对象，执行回调函数，与threejs的Object3D.traverse方法类似，但增加了一个回调函数返回参数，用于在遍历过程中检查是否需要停止遍历该对象的子对象，以提升性能。
 * @param {Object3D} object - 要遍历的对象实例
 * @param {Function} callback - 回调函数，参数为当前遍历的对象实例，返回true表示停止遍历该对象的子对象
*/
function traverse(object, callback) {
    if (callback(object) === true)
        return;
    const children = object.children;
    for (let i = 0, l = children.length; i < l; i++) {
        traverse(children[i], callback);
    }
};

export default traverse;
export { traverse };