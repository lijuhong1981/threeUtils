import { Euler, Quaternion, Spherical, Vector2, Vector3, Vector4 } from "three";

/**
 * 为threejs的Vector2或Vector3或Vector4或Euler或Quaternion或Spherical对象赋值
 * @param {Vector2|Vector3|Vector4|Euler|Quaternion|Spherical} vector
 * @param {Array<number>|object} value
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

