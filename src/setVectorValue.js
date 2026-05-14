import { Euler, Quaternion, Spherical, Vector2, Vector3, Vector4 } from "three";

/**
 * 为threejs的Vector2或Vector3或Vector4或Euler或Quaternion或Spherical对象赋值
 * @param {Vector2|Vector3|Vector4|Euler|Quaternion|Spherical} vector - 要赋值的Vector2或Vector3或Vector4或Euler或Quaternion或Spherical对象实例
 * @param {Array<number>|object} value - 向量值，可以是一个包含分量的数组（如[1, 2, 3]表示一个三维向量），或者另一个具有相同属性的对象实例（如{ x: 1, y: 2, z: 3 }表示一个三维向量）
 * @returns {Vector2|Vector3|Vector4|Euler|Quaternion|Spherical}
 */
function setVectorValue(vector, value) {
    if (Array.isArray(value))
        vector.set(...value);
    else if (typeof value === 'object')
        vector.copy(value);
    else
        console.warn("The setVectorValue error, unsupported value.", value);
    return vector;
};

export default setVectorValue;
export { setVectorValue };

