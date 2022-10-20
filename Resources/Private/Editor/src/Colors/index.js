import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { IconButton, SelectBox } from "@neos-project/react-ui-components";
import { neos } from "@neos-project/neos-ui-decorators";
import OptionWithPreview from "../Helper/OptionWithPreview";
import { returnValues, getPreviewBoxAttributes, getPreviewBoxText } from "./utlis";
import style from "./style.css";

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    config: globalRegistry.get("frontendConfiguration").get("Carbon.TailwindColors"),
}));

class Editor extends PureComponent {
    static propTypes = {
        value: PropTypes.shape({
            group: PropTypes.string,
            strength: PropTypes.string || PropTypes.number,
            hex: PropTypes.string,
            rgb: PropTypes.string,
            hsl: PropTypes.string,
            rgbValues: PropTypes.string,
            hslValues: PropTypes.string,
        }),
        commit: PropTypes.func.isRequired,
        i18nRegistry: PropTypes.object.isRequired,
        options: PropTypes.shape({
            allowEmpty: PropTypes.bool,
            placeholder: PropTypes.string,
            disabled: PropTypes.bool,
            scheme: PropTypes.oneOf(["grayscale", "color"]),
            disableStrength: PropTypes.arrayOf(PropTypes.string || PropTypes.number),
            colors: PropTypes.objectOf(
                PropTypes.shape({
                    label: PropTypes.string,
                    0: PropTypes.string,
                    50: PropTypes.string,
                    100: PropTypes.string,
                    200: PropTypes.string,
                    300: PropTypes.string,
                    400: PropTypes.string,
                    500: PropTypes.string,
                    600: PropTypes.string,
                    700: PropTypes.string,
                    800: PropTypes.string,
                    900: PropTypes.string,
                    1000: PropTypes.string,
                })
            ),
        }).isRequired,
    };

    onReset = () => {
        this.props.commit("");
    };

    static defaultOptions = {
        allowEmpty: false,
        disabled: false,
        placeholder: null,
        scheme: null,
        disableStrength: [],
    };

    render() {
        let { value, options, i18nRegistry, config } = this.props;
        options = Object.assign({}, this.constructor.defaultOptions, options);
        if (options.colors) {
            config.colors = options.colors;
        }

        let colors = Object.assign({}, config.colors);

        if (options.scheme === "grayscale") {
            for (let color in colors) {
                if (!colors[color]["1000"]) {
                    delete colors[color];
                }
            }
        } else if (options.scheme === "color") {
            for (let color in colors) {
                if (colors[color]["1000"]) {
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
            return (
                <div className={style.error}>
                    {i18nRegistry.translate("Carbon.TailwindColors:Main:noColorsDefined")}
                </div>
            );
        }

        value = returnValues({
            group: value.group,
            strength: value.strength,
            colors,
        });
        const { allowEmpty, disabled, placeholder } = options;

        const selectBoxOptions = Object.keys(colors).map((value) => {
            const colorItems = Object.assign({}, colors[value]);
            const label = colors[value].label || value;
            delete colorItems.label;
            return {
                value,
                colors: Object.values(colorItems),
                label,
            };
        });

        const colorsArray = [];
        for (const group in colors) {
            const groupValues = colors[group];
            const label = groupValues.label || group;
            const values = [];
            for (const strength in groupValues) {
                if (strength === "label") {
                    continue;
                }
                const color = groupValues[strength];
                let label = strength;
                if (label == "0") {
                    label = i18nRegistry.translate("Carbon.TailwindColors:Main:white");
                } else if (label == "1000") {
                    label = i18nRegistry.translate("Carbon.TailwindColors:Main:black");
                }
                values.push({
                    strength,
                    label,
                    color,
                });
            }
            colorsArray.push({
                group,
                label,
                values,
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
            selectColor: i18nRegistry.translate("Carbon.TailwindColors:Main:selectColor"),
        };

        return (
            <div className={disabled && style.disabled}>
                <div className={style.wrapper}>
                    <div {...getPreviewBoxAttributes({ colors, value, placeholder })}>
                        {getPreviewBoxText({ colors, value, placeholder, i18n: previewTextI18n })}
                    </div>
                    {allowEmpty && (
                        <div className={style.reset}>
                            <IconButton
                                style="lighter"
                                icon="times"
                                title={i18nRegistry.translate("Carbon.TailwindColors:Main:resetColor")}
                                onClick={this.onReset}
                            />
                        </div>
                    )}
                </div>
                <div className={style.group}>
                    <SelectBox
                        options={selectBoxOptions}
                        value={value && value.group}
                        placeholder={i18nRegistry.translate("Carbon.TailwindColors:Main:selectColorGroup")}
                        allowEmpty={false}
                        onValueChange={groupChangeHandler}
                        ListPreviewElement={OptionWithPreview}
                    />
                </div>
                {colorsArray.map((item) => {
                    const isActiveGroup = value && value.group == item.group;
                    return (
                        isActiveGroup && (
                            <div className={style.list}>
                                {item.values.map((entry) => (
                                    <button
                                        key={item.group + entry.strength}
                                        className={[
                                            style.item,
                                            isActiveGroup && entry.strength == value.strength && style.itemactive,
                                        ].join(" ")}
                                        style={{ backgroundColor: entry.color }}
                                        title={entry.label}
                                        onClick={() => handleColorClick(item.group, entry.strength)}
                                    ></button>
                                ))}
                            </div>
                        )
                    );
                })}
            </div>
        );
    }
}

export default neosifier(Editor);
