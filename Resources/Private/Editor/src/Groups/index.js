import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { IconButton, SelectBox } from "@neos-project/react-ui-components";
import { neos } from "@neos-project/neos-ui-decorators";
import OptionWithPreview from "../Helper/OptionWithPreview";
import style from "./style.css";

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    config: globalRegistry.get("frontendConfiguration").get("Carbon.TailwindColors"),
}));

class Editor extends PureComponent {
    static propTypes = {
        value: PropTypes.string,
        commit: PropTypes.func.isRequired,
        i18nRegistry: PropTypes.object.isRequired,
        options: PropTypes.shape({
            allowEmpty: PropTypes.bool,
            placeholder: PropTypes.string,
            scheme: PropTypes.oneOf(["grayscale", "color"]),
            disabled: PropTypes.bool,
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

        if (!colors) {
            return (
                <div className={style.error}>
                    {i18nRegistry.translate("Carbon.TailwindColors:Main:noColorsDefined")}
                </div>
            );
        }
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

        const onValueChange = (value) => {
            this.props.commit(value);
        };

        return (
            <div className={disabled && style.disabled}>
                <SelectBox
                    options={selectBoxOptions}
                    value={value}
                    placeholder={placeholder || i18nRegistry.translate("Carbon.TailwindColors:Main:selectColorGroup")}
                    allowEmpty={allowEmpty}
                    onValueChange={onValueChange}
                    ListPreviewElement={OptionWithPreview}
                />
            </div>
        );
    }
}

export default neosifier(Editor);
