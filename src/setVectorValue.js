import { Euler, Quaternion, Spherical, Vector2, Vector3, Vector4 } from "three";

/**
 * 为threejs的Vector2或Vector3或Vector4或Euler或Quaternion或Spherical对象赋值
 * @param {Vector2|Vector3|Vector4|Euler|Quaternion|Spherical} vector - 要赋值的Vector2或Vector3或Vector4或Euler或Quaternion或Spherical对象实例
 * @param {Array<number>|object|number} value - 向量值，可以是一个包含分量的数组（如[1, 2, 3]表示一个三维向量），或者另一个具有相同属性的对象实例（如{ x: 1, y: 2, z: 3 }表示一个三维向量），或者一个单一的数字（如0表示所有分量都设置为0）
 * @returns {Vector2|Vector3|Vector4|Euler|Quaternion|Spherical}
 */
function setVectorValue(vector, value) {
    if (Array.isArray(value))
        vector.set(...value);
    else if (typeof value === 'number') {
        if (vector.isEuler)
            vector.set(value, value, value);
        else
            vector.set(value, value, value, value);
    } else if (typeof value === 'object')
        vector.copy(value);
    else
        console.warn("The setVectorValue error, unsupported value.", value);
    return vector;
};

export default setVectorValue;
export { setVectorValue };

