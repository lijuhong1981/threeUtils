import { Object3D } from "three";
import setColorValue from "./setColorValue.js";
import setVectorValue from "./setVectorValue.js";

/**
 * 设置threejs的Obejct3D对象参数
 * @param {Object3D} target - 要设置参数的Object3D对象实例
 * @param {object} values - 参数对象，包含要设置的参数名称和对应的值
 */
function setValues(target, values) {
    for (const key in values) {
        if (values.hasOwnProperty(key) === false)
            continue;
        if (key in target) {
            const newValue = values[key];
            if (newValue === undefined) {
                console.warn(`${values}: parameter '${key}' value is undefined.`);
                continue;
            }
            const currentValue = target[key];
            if (currentValue && currentValue.isColor) {
                setColorValue(currentValue, newValue);
            } else if (currentValue && (currentValue.isVector2 || currentValue.isVector3 || currentValue.isVector4 || currentValue.isEuler || currentValue.isQuaternion || currentValue.isSpherical)) {
                setVectorValue(currentValue, newValue);
            } else {
                target[key] = newValue;
            }
        } else {
            console.warn(`${target}: parameter '${key}' is not exist.`);
        }
    }
};

export default setValues;
export { setValues };

