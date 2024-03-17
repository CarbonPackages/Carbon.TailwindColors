import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { IconButton, SelectBox } from "@neos-project/react-ui-components";
import { neos } from "@neos-project/neos-ui-decorators";
import OptionPreview from "../OptionPreview";
import style from "./style.module.css";

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    config: globalRegistry.get("frontendConfiguration").get("CarbonTailwindColors"),
}));

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

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
        let { value, options, i18nRegistry, config, highlight } = this.props;

        options = Object.assign({}, this.constructor.defaultOptions, options);
        if (options.colors) {
            config.colors = options.colors;
        }
        if (options.grayscale) {
            config.grayscale = options.grayscale;
        }

        let colors = Object.assign({}, config.colors);
        Object.entries(colors).forEach(([key, value]) => {
            if (!value || !Object.keys(value).length) {
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
            return (
                <div className={style.error}>
                    {i18nRegistry.translate("Carbon.TailwindColors:Main:noColorsDefined")}
                </div>
            );
        }
        const { allowEmpty, disabled, placeholder } = options;

        const selectBoxOptions = Object.keys(colors).map((value) => {
            const colorItems = Object.assign({}, colors[value]);
            const label = capitalizeFirstLetter(value);
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
            <div className={Boolean(disabled) && style.disabled}>
                <SelectBox
                    options={selectBoxOptions}
                    value={value}
                    placeholder={placeholder || i18nRegistry.translate("Carbon.TailwindColors:Main:selectColorGroup")}
                    allowEmpty={allowEmpty}
                    onValueChange={onValueChange}
                    ListPreviewElement={OptionPreview}
                    className={Boolean(highlight) && style.highlight}
                />
            </div>
        );
    }
}

export default neosifier(Editor);
