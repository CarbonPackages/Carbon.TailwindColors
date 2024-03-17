(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js
  var init_manifest = __esm({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js"() {
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js
  var init_createConsumerApi = __esm({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js"() {
      init_manifest();
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js
  function readFromConsumerApi(key) {
    return (...args) => {
      if (window["@Neos:HostPluginAPI"] && window["@Neos:HostPluginAPI"][`@${key}`]) {
        return window["@Neos:HostPluginAPI"][`@${key}`](...args);
      }
      throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
  }
  var init_readFromConsumerApi = __esm({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"() {
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js
  var init_AbstractRegistry = __esm({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js"() {
    }
  });

  // node_modules/.pnpm/@neos-project+positional-array-sorter@8.3.6/node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js
  var init_positionalArraySorter = __esm({
    "node_modules/.pnpm/@neos-project+positional-array-sorter@8.3.6/node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js"() {
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js
  var init_SynchronousRegistry = __esm({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"() {
      init_AbstractRegistry();
      init_positionalArraySorter();
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js
  var init_SynchronousMetaRegistry = __esm({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js"() {
      init_SynchronousRegistry();
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js
  var init_registry = __esm({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js"() {
      init_SynchronousRegistry();
      init_SynchronousMetaRegistry();
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/index.js
  var dist_default;
  var init_dist = __esm({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/index.js"() {
      init_createConsumerApi();
      init_readFromConsumerApi();
      init_registry();
      dist_default = readFromConsumerApi("manifest");
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js
  var require_react = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().React;
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().PropTypes;
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js
  var require_react_ui_components = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().ReactUiComponents;
    }
  });

  // node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js
  var require_neos_ui_decorators = __commonJS({
    "node_modules/.pnpm/@neos-project+neos-ui-extensibility@8.3.6/node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiDecorators;
    }
  });

  // node_modules/.pnpm/nanoid@5.0.6/node_modules/nanoid/url-alphabet/index.js
  var urlAlphabet;
  var init_url_alphabet = __esm({
    "node_modules/.pnpm/nanoid@5.0.6/node_modules/nanoid/url-alphabet/index.js"() {
      urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
    }
  });

  // node_modules/.pnpm/nanoid@5.0.6/node_modules/nanoid/index.browser.js
  var nanoid;
  var init_index_browser = __esm({
    "node_modules/.pnpm/nanoid@5.0.6/node_modules/nanoid/index.browser.js"() {
      init_url_alphabet();
      nanoid = (size = 21) => {
        let id = "";
        let bytes = crypto.getRandomValues(new Uint8Array(size));
        while (size--) {
          id += urlAlphabet[bytes[size] & 63];
        }
        return id;
      };
    }
  });

  // css-modules:css-modules://N4VXH8PxzX6R8upqiXOLfLuFruoezM5GpGygg2IvUWk.css
  var init_N4VXH8PxzX6R8upqiXOLfLuFruoezM5GpGygg2IvUWk = __esm({
    "css-modules:css-modules://N4VXH8PxzX6R8upqiXOLfLuFruoezM5GpGygg2IvUWk.css"() {
    }
  });

  // src/OptionPreview/style.module.css
  var style_default;
  var init_style = __esm({
    "src/OptionPreview/style.module.css"() {
      init_N4VXH8PxzX6R8upqiXOLfLuFruoezM5GpGygg2IvUWk();
      style_default = { "preview": "carbon-tailwind-12CwKq-preview", "highlighted": "carbon-tailwind-12CwKq-highlighted" };
    }
  });

  // node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs
  function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e)
      n += e;
    else if ("object" == typeof e)
      if (Array.isArray(e)) {
        var o = e.length;
        for (t = 0; t < o; t++)
          e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
      } else
        for (f in e)
          e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++)
      (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }
  var clsx_default;
  var init_clsx = __esm({
    "node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"() {
      clsx_default = clsx;
    }
  });

  // src/OptionPreview/index.js
  var import_react, import_prop_types, OptionPreview;
  var init_OptionPreview = __esm({
    "src/OptionPreview/index.js"() {
      import_react = __toESM(require_react());
      import_prop_types = __toESM(require_prop_types());
      init_index_browser();
      init_style();
      init_clsx();
      OptionPreview = class extends import_react.PureComponent {
        render() {
          const { option, onClick, isHighlighted, onMouseEnter } = this.props;
          const { colors, label } = option;
          const length = colors.length;
          const stop = 100 / length;
          const id = "bg-" + nanoid();
          const width = 90;
          const height = 60;
          return /* @__PURE__ */ import_react.default.createElement(
            "button",
            {
              className: clsx_default(style_default.preview, isHighlighted && style_default.highlighted),
              onClick,
              onMouseEnter,
              type: "button"
            },
            /* @__PURE__ */ import_react.default.createElement(
              "svg",
              {
                height,
                width,
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                preserveAspectRatio: "none",
                className: "pointer-events-none size-full"
              },
              /* @__PURE__ */ import_react.default.createElement("defs", null, /* @__PURE__ */ import_react.default.createElement("linearGradient", { x1: "0%", y1: "100%", x2: "100%", y2: "100%", id }, colors.map((color, index) => {
                const start = stop * index + "%";
                const end = stop * (index + 1) + "%";
                return /* @__PURE__ */ import_react.default.createElement(import_react.Fragment, { key: index }, /* @__PURE__ */ import_react.default.createElement("stop", { stopColor: color, offset: start }), /* @__PURE__ */ import_react.default.createElement("stop", { stopColor: color, offset: end }));
              }))),
              /* @__PURE__ */ import_react.default.createElement("rect", { fill: `url(#${id})`, x: "0", y: "0", width, height })
            ),
            /* @__PURE__ */ import_react.default.createElement("span", { title: label }, label)
          );
        }
      };
      __publicField(OptionPreview, "propTypes", {
        option: import_prop_types.default.shape({
          label: import_prop_types.default.string.isRequired,
          colors: import_prop_types.default.arrayOf(import_prop_types.default.string)
        })
      });
    }
  });

  // css-modules:css-modules://wwwToG097VlELjDTj6ntR8-35PTaNViPTYgvpCYnvJY.css
  var init_wwwToG097VlELjDTj6ntR8_35PTaNViPTYgvpCYnvJY = __esm({
    "css-modules:css-modules://wwwToG097VlELjDTj6ntR8-35PTaNViPTYgvpCYnvJY.css"() {
    }
  });

  // src/Colors/style.module.css
  var style_default2;
  var init_style2 = __esm({
    "src/Colors/style.module.css"() {
      init_wwwToG097VlELjDTj6ntR8_35PTaNViPTYgvpCYnvJY();
      style_default2 = { "item": "carbon-tailwind-Wr0QEa-item", "feedback": "carbon-tailwind-Wr0QEa-feedback", "list": "carbon-tailwind-Wr0QEa-list", "itemActive": "carbon-tailwind-Wr0QEa-itemActive", "itemHighlight": "carbon-tailwind-Wr0QEa-itemHighlight", "reset": "carbon-tailwind-Wr0QEa-reset", "checkboard": "carbon-tailwind-Wr0QEa-checkboard", "text-black": "carbon-tailwind-Wr0QEa-text-black", "disabled": "carbon-tailwind-Wr0QEa-disabled", "group": "carbon-tailwind-Wr0QEa-group", "wrapper": "carbon-tailwind-Wr0QEa-wrapper", "text-white": "carbon-tailwind-Wr0QEa-text-white", "error": "carbon-tailwind-Wr0QEa-error", "itemDefault": "carbon-tailwind-Wr0QEa-itemDefault" };
    }
  });

  // src/Colors/utlis.js
  function hex2rgb(hex) {
    if (hex.length === 4) {
      let r3 = hex.slice(1, 2);
      let g2 = hex.slice(2, 3);
      let b2 = hex.slice(3, 4);
      r3 = parseInt(r3 + r3, 16);
      g2 = parseInt(g2 + g2, 16);
      b2 = parseInt(b2 + b2, 16);
      return { r: r3, g: g2, b: b2 };
    }
    const r2 = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r2, g, b];
  }
  function rgb2hsl(r2, g, b) {
    r2 /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r2, g, b);
    let cmax = Math.max(r2, g, b);
    let delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;
    if (delta == 0) {
      h = 0;
    } else if (cmax == r2) {
      h = (g - b) / delta % 6;
    } else if (cmax == g) {
      h = (b - r2) / delta + 2;
    } else {
      h = (r2 - g) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) {
      h += 360;
    }
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
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
      hslValues
    };
  }
  function getTextColor(hex) {
    const rgb = hex2rgb(hex);
    return rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114 > 186 ? "text-black" : "text-white";
  }
  function getPreviewBoxAttributes({ colors, value, placeholder }) {
    const { group, strength } = value || {};
    let hasValue = false;
    if (group && strength) {
      hasValue = !!(colors[group] && colors[group][strength]);
    }
    const color = hasValue ? colors[group][strength] : placeholder;
    const title = hasValue ? `${capitalizeFirstLetter(group)} - ${strength}` : null;
    const textColor = hasValue ? getTextColor(color) : null;
    const classNames = [style_default2.feedback, style_default2[textColor]];
    if (!hasValue && !placeholder) {
      classNames.push(style_default2.checkboard);
    }
    return {
      className: classNames.filter((item) => !!item).join(" "),
      style: { backgroundColor: color },
      title
    };
  }
  function getPreviewBoxText({ colors, value, placeholder, i18n }) {
    const strength = value.strength;
    if (!strength) {
      return placeholder ? "" : i18n.selectColor;
    }
    if (strength == "0") {
      return i18n.white;
    }
    if (strength == "1000") {
      return i18n.black;
    }
    const label = capitalizeFirstLetter(value.group);
    return `${label} - ${strength}`;
  }
  function returnValues(options) {
    let { group, strength, colors } = options;
    if (!group || !colors[group]) {
      return "";
    }
    strength = strength || null;
    if (!strength) {
      return { group };
    }
    const color = colors[group][strength];
    if (!color) {
      return { group };
    }
    return {
      group,
      strength,
      ...colorValues(color)
    };
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  var init_utlis = __esm({
    "src/Colors/utlis.js"() {
      init_style2();
    }
  });

  // src/Colors/index.js
  var import_react2, import_prop_types2, import_react_ui_components, import_neos_ui_decorators, neosifier, Editor, Colors_default;
  var init_Colors = __esm({
    "src/Colors/index.js"() {
      import_react2 = __toESM(require_react());
      import_prop_types2 = __toESM(require_prop_types());
      import_react_ui_components = __toESM(require_react_ui_components());
      import_neos_ui_decorators = __toESM(require_neos_ui_decorators());
      init_OptionPreview();
      init_utlis();
      init_clsx();
      init_style2();
      neosifier = (0, import_neos_ui_decorators.neos)((globalRegistry) => ({
        i18nRegistry: globalRegistry.get("i18n"),
        config: globalRegistry.get("frontendConfiguration").get("CarbonTailwindColors")
      }));
      Editor = class extends import_react2.PureComponent {
        constructor() {
          super(...arguments);
          __publicField(this, "onReset", () => {
            this.props.commit("");
          });
        }
        render() {
          let { value, options, i18nRegistry, config, highlight } = this.props;
          options = Object.assign({}, this.constructor.defaultOptions, options);
          if (options.colors) {
            config.colors = options.colors;
          }
          if (options.grayscale) {
            config.grayscale = options.grayscale;
          }
          let colors = Object.assign({}, config.colors);
          Object.entries(colors).forEach(([key, value2]) => {
            if (!value2 || !Object.keys(value2).length) {
              delete colors[key];
            }
          });
          if (options.scheme === "grayscale") {
            for (let color in colors) {
              if (!config.grayscale.includes(color)) {
                delete colors[color];
              }
            }
          } else if (options.scheme === "color") {
            for (let color in colors) {
              if (config.grayscale.includes(color)) {
                delete colors[color];
              }
            }
          }
          if (options.disableStrength.length) {
            for (let color in colors) {
              options.disableStrength.forEach((strength) => {
                delete colors[color][strength.toString()];
              });
            }
          }
          if (!colors) {
            return /* @__PURE__ */ import_react2.default.createElement("div", { className: style_default2.error }, i18nRegistry.translate("Carbon.TailwindColors:Main:noColorsDefined"));
          }
          value = returnValues({
            group: value.group,
            strength: value.strength,
            colors
          });
          const { allowEmpty, disabled, placeholder } = options;
          const selectBoxOptions = Object.keys(colors).map((value2) => {
            const colorItems = Object.assign({}, colors[value2]);
            const label = capitalizeFirstLetter(value2);
            return {
              value: value2,
              colors: Object.values(colorItems),
              label
            };
          });
          const colorsArray = [];
          for (const group in colors) {
            const groupValues = colors[group];
            const label = capitalizeFirstLetter(group);
            const values = [];
            for (const strength in groupValues) {
              const color = groupValues[strength];
              let label2 = strength;
              if (label2 == "0") {
                label2 = i18nRegistry.translate("Carbon.TailwindColors:Main:white");
              } else if (label2 == "1000") {
                label2 = i18nRegistry.translate("Carbon.TailwindColors:Main:black");
              }
              values.push({
                strength,
                label: label2,
                color
              });
            }
            colorsArray.push({
              group,
              label,
              values
            });
          }
          const handleColorClick = (group, strength) => {
            this.props.commit(returnValues({ group, strength, colors }));
          };
          const groupChangeHandler = (group) => {
            const { strength } = this.props.value;
            this.props.commit(returnValues({ group, strength, colors }));
          };
          const previewTextI18n = {
            white: i18nRegistry.translate("Carbon.TailwindColors:Main:white"),
            black: i18nRegistry.translate("Carbon.TailwindColors:Main:black"),
            selectColor: i18nRegistry.translate("Carbon.TailwindColors:Main:selectColor")
          };
          return /* @__PURE__ */ import_react2.default.createElement("div", { className: disabled && style_default2.disabled }, /* @__PURE__ */ import_react2.default.createElement("div", { className: style_default2.wrapper }, /* @__PURE__ */ import_react2.default.createElement("div", { ...getPreviewBoxAttributes({ colors, value, placeholder }) }, getPreviewBoxText({ colors, value, placeholder, i18n: previewTextI18n })), allowEmpty && /* @__PURE__ */ import_react2.default.createElement("div", { className: style_default2.reset }, /* @__PURE__ */ import_react2.default.createElement(
            import_react_ui_components.IconButton,
            {
              style: "lighter",
              icon: "times",
              title: i18nRegistry.translate("Carbon.TailwindColors:Main:resetColor"),
              onClick: this.onReset
            }
          ))), /* @__PURE__ */ import_react2.default.createElement("div", { className: style_default2.group }, /* @__PURE__ */ import_react2.default.createElement(
            import_react_ui_components.SelectBox,
            {
              options: selectBoxOptions,
              value: value && value.group,
              placeholder: i18nRegistry.translate("Carbon.TailwindColors:Main:selectColorGroup"),
              allowEmpty: false,
              onValueChange: groupChangeHandler,
              ListPreviewElement: OptionPreview
            }
          )), colorsArray.map((item) => {
            const isActiveGroup = value && value.group == item.group;
            return isActiveGroup && /* @__PURE__ */ import_react2.default.createElement("div", { className: style_default2.list }, item.values.map((entry) => {
              const current = entry.strength == value.strength;
              const itemHighlight = highlight && current;
              const itemActive = current && !highlight;
              const itemDefault = !itemHighlight && !itemActive;
              return /* @__PURE__ */ import_react2.default.createElement(
                "button",
                {
                  key: item.group + entry.strength,
                  className: clsx_default(style_default2.item, itemDefault && style_default2.itemDefault, itemActive && style_default2.itemActive, itemHighlight && style_default2.itemHighlight),
                  style: { backgroundColor: entry.color },
                  title: entry.label,
                  onClick: () => handleColorClick(item.group, entry.strength)
                }
              );
            }));
          }));
        }
      };
      __publicField(Editor, "propTypes", {
        value: import_prop_types2.default.shape({
          group: import_prop_types2.default.string,
          strength: import_prop_types2.default.string || import_prop_types2.default.number,
          hex: import_prop_types2.default.string,
          rgb: import_prop_types2.default.string,
          hsl: import_prop_types2.default.string,
          rgbValues: import_prop_types2.default.string,
          hslValues: import_prop_types2.default.string
        }),
        commit: import_prop_types2.default.func.isRequired,
        i18nRegistry: import_prop_types2.default.object.isRequired,
        options: import_prop_types2.default.shape({
          allowEmpty: import_prop_types2.default.bool,
          placeholder: import_prop_types2.default.string,
          disabled: import_prop_types2.default.bool,
          scheme: import_prop_types2.default.oneOf(["grayscale", "color"]),
          disableStrength: import_prop_types2.default.arrayOf(import_prop_types2.default.string || import_prop_types2.default.number),
          colors: import_prop_types2.default.objectOf(
            import_prop_types2.default.shape({
              0: import_prop_types2.default.string,
              50: import_prop_types2.default.string,
              100: import_prop_types2.default.string,
              200: import_prop_types2.default.string,
              300: import_prop_types2.default.string,
              400: import_prop_types2.default.string,
              500: import_prop_types2.default.string,
              600: import_prop_types2.default.string,
              700: import_prop_types2.default.string,
              800: import_prop_types2.default.string,
              900: import_prop_types2.default.string,
              950: import_prop_types2.default.string,
              1e3: import_prop_types2.default.string
            })
          )
        }).isRequired
      });
      __publicField(Editor, "defaultOptions", {
        allowEmpty: false,
        disabled: false,
        placeholder: null,
        scheme: null,
        disableStrength: []
      });
      Colors_default = neosifier(Editor);
    }
  });

  // css-modules:css-modules://JAwdugv8i-fJTS6xX2zfmLzKJQspEWW9r0wrbjOHkWg.css
  var init_JAwdugv8i_fJTS6xX2zfmLzKJQspEWW9r0wrbjOHkWg = __esm({
    "css-modules:css-modules://JAwdugv8i-fJTS6xX2zfmLzKJQspEWW9r0wrbjOHkWg.css"() {
    }
  });

  // src/Groups/style.module.css
  var style_default3;
  var init_style3 = __esm({
    "src/Groups/style.module.css"() {
      init_JAwdugv8i_fJTS6xX2zfmLzKJQspEWW9r0wrbjOHkWg();
      style_default3 = { "disabled": "carbon-tailwind-gRELtW-disabled", "highlight": "carbon-tailwind-gRELtW-highlight", "error": "carbon-tailwind-gRELtW-error" };
    }
  });

  // src/Groups/index.js
  function capitalizeFirstLetter2(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  var import_react3, import_prop_types3, import_react_ui_components2, import_neos_ui_decorators2, neosifier2, Editor2, Groups_default;
  var init_Groups = __esm({
    "src/Groups/index.js"() {
      import_react3 = __toESM(require_react());
      import_prop_types3 = __toESM(require_prop_types());
      import_react_ui_components2 = __toESM(require_react_ui_components());
      import_neos_ui_decorators2 = __toESM(require_neos_ui_decorators());
      init_OptionPreview();
      init_style3();
      neosifier2 = (0, import_neos_ui_decorators2.neos)((globalRegistry) => ({
        i18nRegistry: globalRegistry.get("i18n"),
        config: globalRegistry.get("frontendConfiguration").get("CarbonTailwindColors")
      }));
      Editor2 = class extends import_react3.PureComponent {
        constructor() {
          super(...arguments);
          __publicField(this, "onReset", () => {
            this.props.commit("");
          });
        }
        render() {
          let { value, options, i18nRegistry, config, highlight } = this.props;
          options = Object.assign({}, this.constructor.defaultOptions, options);
          if (options.colors) {
            config.colors = options.colors;
          }
          if (options.grayscale) {
            config.grayscale = options.grayscale;
          }
          let colors = Object.assign({}, config.colors);
          Object.entries(colors).forEach(([key, value2]) => {
            if (!value2 || !Object.keys(value2).length) {
              delete colors[key];
            }
          });
          if (options.scheme === "grayscale") {
            for (let color in colors) {
              if (!config.grayscale.includes(color)) {
                delete colors[color];
              }
            }
          } else if (options.scheme === "color") {
            for (let color in colors) {
              if (config.grayscale.includes(color)) {
                delete colors[color];
              }
            }
          }
          if (!colors) {
            return /* @__PURE__ */ import_react3.default.createElement("div", { className: style_default3.error }, i18nRegistry.translate("Carbon.TailwindColors:Main:noColorsDefined"));
          }
          const { allowEmpty, disabled, placeholder } = options;
          const selectBoxOptions = Object.keys(colors).map((value2) => {
            const colorItems = Object.assign({}, colors[value2]);
            const label = capitalizeFirstLetter2(value2);
            return {
              value: value2,
              colors: Object.values(colorItems),
              label
            };
          });
          const onValueChange = (value2) => {
            this.props.commit(value2);
          };
          return /* @__PURE__ */ import_react3.default.createElement("div", { className: Boolean(disabled) && style_default3.disabled }, /* @__PURE__ */ import_react3.default.createElement(
            import_react_ui_components2.SelectBox,
            {
              options: selectBoxOptions,
              value,
              placeholder: placeholder || i18nRegistry.translate("Carbon.TailwindColors:Main:selectColorGroup"),
              allowEmpty,
              onValueChange,
              ListPreviewElement: OptionPreview,
              className: Boolean(highlight) && style_default3.highlight
            }
          ));
        }
      };
      __publicField(Editor2, "propTypes", {
        value: import_prop_types3.default.string,
        commit: import_prop_types3.default.func.isRequired,
        i18nRegistry: import_prop_types3.default.object.isRequired,
        options: import_prop_types3.default.shape({
          allowEmpty: import_prop_types3.default.bool,
          placeholder: import_prop_types3.default.string,
          scheme: import_prop_types3.default.oneOf(["grayscale", "color"]),
          disabled: import_prop_types3.default.bool
        }).isRequired
      });
      __publicField(Editor2, "defaultOptions", {
        allowEmpty: false,
        disabled: false,
        placeholder: null,
        scheme: null
      });
      Groups_default = neosifier2(Editor2);
    }
  });

  // src/manifest.js
  var manifest_exports = {};
  var init_manifest2 = __esm({
    "src/manifest.js"() {
      init_dist();
      init_Colors();
      init_Groups();
      dist_default("Carbon.TailwindColors:Editors", {}, (globalRegistry) => {
        const editorsRegistry = globalRegistry.get("inspector").get("editors");
        editorsRegistry.set("Carbon.TailwindColors/Colors", {
          component: Colors_default
        });
        editorsRegistry.set("Carbon.TailwindColors/Groups", {
          component: Groups_default
        });
      });
    }
  });

  // src/index.js
  init_manifest2();
})();
//# sourceMappingURL=Plugin.js.map
