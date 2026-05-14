import { Color } from "three";

/**
 * 为threejs的Color对象赋值
 * @param {Color} color - 要赋值的Color对象实例
 * @param {Array<number>|number|string|Color} value - 颜色值，可以是一个包含RGB分量的数组（如[1, 0, 0]表示红色），一个十六进制数（如0xff0000表示红色），一个CSS颜色字符串（如"red"或"#ff0000"表示红色），或者另一个Color对象实例
 * @param {string} [colorSpace] - 颜色空间，可选值为"srgb"或"srgb-linear"，仅当value为number或string时有效，表示输入的颜色值是sRGB空间还是线性空间，默认为"sRGB"
 * @returns {Color}
 */
function setColorValue(color, value, colorSpace) {
    if (Array.isArray(value))
        color.fromArray(value);
    else if (typeof value === 'number')
        color.setHex(value, colorSpace);
    else if (typeof value === 'string')
        color.setStyle(value, colorSpace);
    else if (typeof value === 'object')
        color.copy(value);
    else
        console.warn("The setColorValue error, unsupported value.", value);
    return color;
};

export default setColorValue;
export { setColorValue };
