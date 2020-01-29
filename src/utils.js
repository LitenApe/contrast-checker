export const isHex = (value) => RegExp(/(^#?([a-f\d]{3}|[a-f\d]{6}))$/i).test(value);

export const isCompactRGB = (value) => RegExp(/^(?:(?:25[0-5]|2[0-4][\d]|[01]?[\d][\d]?)[\,\.]{1}[ ]?){2}(?:25[0-5]|2[0-4][\d]|[01]?[\d][\d]?)$/i).test(value);

export const isFullRGB = (value) => value.startsWith('rgb(') && value.endsWith(')') && isCompactRGB(value.slice(4, -1));

export const isRGB = (value) => isCompactRGB(value) || isFullRGB(value);

export function convertToValidColour(value) {
    if (isHex(value) && !value.startsWith('#')) {
        return '#' + value;
    } else if (isHex(value)) {
        return value;
    } else if (isCompactRGB(value)) {
        return 'rgb(' + value + ')';
    } else {
        return value;
    }
}

export function hexToRgb(hex) {
    hex = hex.replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (_, r, g, b) => r + r + g + g + b + b
	);

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result ? `${
        parseInt(result[1], 16)
    },${
        parseInt(result[2], 16)
    },${
        parseInt(result[3], 16)
    }` : null
}

export function luminance(value) {
    let colour = value;

    if (isRGB(colour)) {
        if (isFullRGB(colour)) colour = colour.slice(4, -1);
        colour = colour.replace(' ', '').split(',').map(elem => parseInt(elem, 10));
    } else if (isHex(colour)) {
        colour = hexToRgb(colour).split(',').map(elem => parseInt(elem, 10));
    } else {
        return null;
    }

    const val = colour.map((elem) => {
        elem /= 255;
        return elem <= 0.03928
            ? elem / 12.92
            : Math.pow((elem + 0.055) / 1.055, 2.4)
    });
    return val[0] * 0.2126 + val[1] * 0.7152 + val[2] * 0.0722;
}

export function contrast(colour1, colour2) {
    if (!colour1 || !colour2) return null
    const lum1 = luminance(colour1)
    const lum2 = luminance(colour2)
    return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05)
}
