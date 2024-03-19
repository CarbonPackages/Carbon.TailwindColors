// @ts-ignore
import React from "react";
import { neos } from "@neos-project/neos-ui-decorators";
import { SelectBox } from "@neos-project/react-ui-components";
import { generateColorObject, createSelectBoxOptions } from "./Utlis";
import * as stylex from "@stylexjs/stylex";
import Error from "./Error";
import OptionPreview from "./OptionPreview";
import { colors, sizes } from "./Tokens.stylex";

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    config: globalRegistry.get("frontendConfiguration").get("CarbonTailwindColors"),
}));

const defaultProps = {
    options: {
        allowEmpty: false,
        disabled: false,
        placeholder: null,
        scheme: null,
        disableStrength: [],
    },
};

const styles = stylex.create({
    disabled: {
        cursor: "not-allowed",
        opacity: 0.65,
        ":where(*) *": {
            pointerEvents: "none",
        },
    },
    highlight: {
        borderRadius: sizes.borderRadius,
        boxShadow: `0 0 0 2px ${colors.warn}`,
    },
});

// @ts-ignore
function Editor(props) {
    const options = { ...defaultProps.options, ...props.config, ...props.options };
    const { value, commit, highlight, i18nRegistry } = props;

    const colors = generateColorObject({
        colors: options.colors,
        scheme: options.scheme,
        grayscale: options.grayscale,
        disableStrength: options.disableStrength,
    });

    if (!colors) {
        return <Error>{i18nRegistry.translate("Carbon.TailwindColors:Main:noColorsDefined")}</Error>;
    }

    const { allowEmpty, disabled, placeholder } = options;
    const selectBoxOptions = createSelectBoxOptions(colors);

    return (
        <div {...stylex.props(disabled && styles.disabled)}>
            <SelectBox
                {...stylex.props(highlight && styles.highlight)}
                options={selectBoxOptions}
                value={value}
                placeholder={placeholder || i18nRegistry.translate("Carbon.TailwindColors:Main:selectColorGroup")}
                allowEmpty={allowEmpty}
                onValueChange={(value: string) => commit(value)}
                ListPreviewElement={OptionPreview}
            />
        </div>
    );
}

export default neosifier(Editor);
