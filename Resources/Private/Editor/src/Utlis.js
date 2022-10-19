import style from "./TailwindColorsEditor.css";

function hex2rgb(hex) {
  if (hex.length === 4) {
    let r = hex.slice(1, 2);
    let g = hex.slice(2, 3);
    let b = hex.slice(3, 4);

    r = parseInt(r + r, 16);
    g = parseInt(g + g, 16);
    b = parseInt(b + b, 16);

    return { r, g, b };
  }

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return [r, g, b];
}

function rgb2hsl(r, g, b) {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b);
  let cmax = Math.max(r, g, b);
  let delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

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

function colorValues(hex) {
  const rgb = hex2rgb(hex);
  const hsl = rgb2hsl(...rgb);

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

function getTextColor(hex) {
  const rgb = hex2rgb(hex);
  return rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114 > 186
    ? "text-black"
    : "text-white";
}

function getPreviewBoxAttributes({ colors, value, placeholder }) {
  const { group, strength } = value || {};

  let hasValue = false;
  if (group && strength) {
    hasValue = !!(colors[group] && colors[group][strength]);
  }

  const color = hasValue ? colors[group][strength] : placeholder;
  const title = hasValue ? `${colors[group].label} - ${strength}` : null;
  const textColor = hasValue ? getTextColor(color) : null;

  const classNames = [style.feedback, style[textColor]];

  if (!hasValue && !placeholder) {
    classNames.push(style.checkboard);
  }

  return {
    className: classNames.filter((item) => !!item).join(" "),
    style: { backgroundColor: color },
    title,
  };
}

function getPreviewBoxText({ colors, value, placeholder }) {
  const strength = value.strength;

  if (!strength) {
    return placeholder ? "" : "Select a color";
  }

  if (strength == "0") {
    return "White";
  }

  if (strength == "1000") {
    return "Black";
  }
  const label = colors[value.group].label || value.group;
  return `${label} - ${strength}`;
}

function returnValues(options) {
  let { group, strength, colors } = options;
  if (!group) {
    return "";
  }

  strength = strength || null;

  if (!strength) {
    return { group };
  }

  const groupColors = colors[group];
  let color = groupColors[strength];
  if (!color) {
    const keys = Object.keys(groupColors);
    if (strength == "1000") {
      color = groupColors(keys[keys.length - 1]);
    } else {
      color = groupColors(keys[0]);
    }
  }

  return {
    group,
    strength,
    ...colorValues(color),
  };
}

export { getPreviewBoxAttributes, getPreviewBoxText, returnValues };
