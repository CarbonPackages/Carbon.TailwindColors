export type ColorObject = {
    [key: string]: {
        [key: number]: string;
    };
};

export type StateObject = {
    group?: string;
    strength?: number;
    hex?: string;
    rgb?: string;
    hsl?: string;
    rgbValues?: string;
    hslValues?: string;
};

type ForegroundAndBackgroundStateObject = {
    group?: string;
    strength?: [number | null, number | null];
    hex?: [string | null, string | null];
    rgb?: [string | null, string | null];
    hsl?: [string | null, string | null];
    rgbValues?: [string | null, string | null];
    hslValues?: [string | null, string | null];
};

export function generateColorObject({
    colors,
    scheme,
    grayscale,
    disableStrength,
}: {
    colors: ColorObject;
    scheme: null | undefined | string;
    grayscale: string[];
    disableStrength: number[];
}) {
    if (!colors || Array.isArray(colors) || typeof colors !== "object" || !Object.keys(colors).length) {
        return null;
    }

    const showOnlyColors = scheme === "color";
    const showOnlyGrayscale = scheme === "grayscale";
    disableStrength = disableStrength || [];

    // Make a deep clone copy of the colors
    const copy = JSON.parse(JSON.stringify(colors));
    for (const key in colors) {
        // This removes the colors who are not selected
        if ((showOnlyColors && grayscale.includes(key)) || (showOnlyGrayscale && !grayscale.includes(key))) {
            delete copy[key];
            continue;
        }

        // Remove empty values
        const value = copy[key];
        if (!value || !Object.keys(value).length) {
            delete copy[key];
            continue;
        }

        if (disableStrength && Array.isArray(disableStrength) && disableStrength.length) {
            // This removes the strength of the colors who are not selected
            disableStrength.forEach((strength) => {
                delete copy[key][strength];
            });
        }
    }

    if (Object.keys(copy).length) {
        return copy;
    }

    return null;
}

export function createSelectBoxOptions(colors: any, minimalStrenghtSpan: number | undefined) {
    return Object.keys(colors).map((value) => {
        const colorItems = Object.assign({}, colors[value]);
        let colorsValues: string[] = [];

        if (minimalStrenghtSpan) {
            for (const key in colorItems) {
                const strenght = parseInt(key);
                // Check if a foreground color is even possible
                if (strenght < minimalStrenghtSpan && strenght + minimalStrenghtSpan > 1000) {
                    continue;
                }
                colorsValues.push(colorItems[key]);
            }
        } else {
            colorsValues = Object.values(colorItems);
        }

        const label = capitalizeFirstLetter(value);

        return {
            value,
            colors: colorsValues,
            label,
        };
    });
}

export function colorForegroundAndBackgroundValues({
    group,
    strength,
    colors,
}: {
    group: string;
    strength: [number | null, number | null];
    colors: [ColorObject, ColorObject];
}): ForegroundAndBackgroundStateObject {
    if (!group || !colors[0] || !colors[1] || !colors[0][group] || !colors[1][group]) {
        return {};
    }

    strength = strength ?? null;

    if (strength === null) {
        return { group };
    }

    const bgGroup = colors[0][group];
    const fgGroup = colors[1][group];
    const bgStrength = strength[0];
    const fgStrength = strength[1];

    const bgColor = bgGroup && bgStrength !== null && Number.isInteger(bgStrength) ? bgGroup[bgStrength] : null;
    const fgColor = fgGroup && fgStrength !== null && Number.isInteger(fgStrength) ? fgGroup[fgStrength] : null;

    if (!bgColor && !fgColor) {
        return { group };
    }

    const bgColorValues = bgColor ? colorValues(bgColor) : null;
    const fgColorValues = fgColor ? colorValues(fgColor) : null;

    return {
        group,
        strength: [bgColorValues ? bgStrength : null, fgColorValues ? fgStrength : null],
        hex: [bgColorValues?.hex || null, fgColorValues?.hex || null],
        rgb: [bgColorValues?.rgb || null, fgColorValues?.rgb || null],
        hsl: [bgColorValues?.hsl || null, fgColorValues?.hsl || null],
        rgbValues: [bgColorValues?.rgbValues || null, fgColorValues?.rgbValues || null],
        hslValues: [bgColorValues?.hslValues || null, fgColorValues?.hslValues || null],
    };
}

export function colorReturnValues({
    group,
    strength,
    colors,
}: {
    group: string;
    strength: number | null;
    colors: ColorObject;
}): StateObject {
    if (!group || !colors[group]) {
        return {};
    }

    strength = strength ?? null;

    if (strength === null) {
        return { group };
    }

    const color = colors[group][strength];

    if (!color) {
        return { group };
    }

    return {
        group,
        strength,
        ...colorValues(color),
    };
}

export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getPreviewBoxStyle({
    colors,
    state,
    placeholder,
}: {
    colors: ColorObject;
    state: any;
    placeholder: any;
}) {
    const { group, strength } = state || {};
    const backgroundColor = getPreviewBoxColor({ colors, group, strength });
    const color = backgroundColor ? getTextColor(backgroundColor) : "transparent";

    return {
        backgroundColor: backgroundColor || placeholder,
        color,
    };
}

export function getPreviewBoxColor({
    colors,
    group,
    strength,
}: {
    colors: ColorObject;
    group?: string;
    strength?: any;
}) {
    if (group && typeof strength === "number" && colors[group] && colors[group][strength]) {
        return colors[group][strength];
    }
    return;
}

function getTextColor(hex: string) {
    const rgb = hex2rgb(hex);
    return rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114 > 186 ? "black" : "white";
}

function colorValues(hex: string) {
    const rgb = hex2rgb(hex);
    const hsl = rgb2hsl(rgb);

    const rgbValues = rgb.join(" ");
    const hslValues = hsl.join(" ");

    return {
        hex,
        rgb: `rgb(${rgbValues})`,
        hsl: `hsl(${hslValues})`,
        rgbValues,
        hslValues,
    };
}

function hex2rgb(hex: string) {
    if (hex.length === 4) {
        let r: string | number = hex.slice(1, 2);
        let g: string | number = hex.slice(2, 3);
        let b: string | number = hex.slice(3, 4);

        r = parseInt(r + r, 16);
        g = parseInt(g + g, 16);
        b = parseInt(b + b, 16);

        return [r, g, b];
    }

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return [r, g, b];
}

function rgb2hsl(rgb: number[]) {
    let [r, g, b] = rgb;
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b);
    let cmax = Math.max(r, g, b);
    let delta = cmax - cmin;
    let h = 0;
    let s: string | number = 0;
    let l: string | number = 0;

    // Calculate hue
    if (delta == 0) {
        // No difference
        h = 0;
    } else if (cmax == r) {
        // Red is max
        h = ((g - b) / delta) % 6;
    } else if (cmax == g) {
        // Green is max
        h = (b - r) / delta + 2;
    } else {
        // Blue is max
        h = (r - g) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) {
        // Make negative hues positive behind 360°
        h += 360;
    }

    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    // Add % to s and l
    s = s + "%";
    l = l + "%";

    return [h, s, l];
}
