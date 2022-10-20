import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { IconButton, SelectBox } from "@neos-project/react-ui-components";
import OptionWithPreview from "./OptionWithPreview";
import { returnValues, getPreviewBoxAttributes, getPreviewBoxText } from "./Utlis";
import style from "./TailwindColorsEditor.css";

export default class Editor extends PureComponent {
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
            resetLabel: PropTypes.string,
            disabled: PropTypes.bool,
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
        allowEmpty: true,
        disabled: false,
        placeholder: null,
        resetLabel: "Reset",
    };

    getConfig() {
        return {};
    }

    render() {
        let { colors } = this.getConfig();
        let { value, options } = this.props;

        options = Object.assign({}, this.constructor.defaultOptions, options);
        if (options.colors) {
            colors = options.colors;
        }

        if (!colors) {
            return <div className={style.error}>No colors defined, please add them to your YAML configuration</div>;
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
                    label = "White";
                } else if (label == "1000") {
                    label = "Black";
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

        return (
            <div className={options.disabled && style.disabled}>
                <div className={style.wrapper}>
                    <div {...getPreviewBoxAttributes({ colors, value, placeholder })}>
                        {getPreviewBoxText({ colors, value, placeholder })}
                    </div>
                    {allowEmpty && (
                        <div className={style.reset}>
                            <IconButton
                                style="lighter"
                                icon="times"
                                title={options.resetLabel}
                                onClick={this.onReset}
                            />
                        </div>
                    )}
                </div>
                <div className={style.group}>
                    <SelectBox
                        options={selectBoxOptions}
                        value={value && value.group}
                        placeholder="Please select a color group"
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
