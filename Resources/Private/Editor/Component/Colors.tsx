// @ts-ignore
import React, { useState, useEffect } from "react";
import { neos } from "@neos-project/neos-ui-decorators";
import { IconButton, SelectBox } from "@neos-project/react-ui-components";
import {
    generateColorObject,
    createSelectBoxOptions,
    colorReturnValues,
    capitalizeFirstLetter,
    getPreviewBoxStyle,
} from "./Utlis";
import * as stylex from "@stylexjs/stylex";
import Error from "./Error";
import OptionPreview from "./OptionPreview";
import { colors, sizes, fonts } from "./Tokens.stylex";
import type { StateObject } from "./Utlis";

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
    wrapper: {
        display: "flex",
        flexDirection: "column",
        gap: sizes.spacingHalf,
    },
    disabled: {
        cursor: "not-allowed",
        opacity: 0.65,
        ":where(*) *": {
            pointerEvents: "none",
        },
    },
    previewBoxWrapper: {
        display: "flex",
        gap: sizes.spacingHalf,
    },
    previewBox: {
        flex: 1,
        height: sizes.goldenUnit,
        lineHeight: `calc(${sizes.goldenUnit} - 2px)`,
        border: `1px solid ${colors.contrastDark}`,
        borderRadius: sizes.borderRadius,
        display: "flex",
        alignItems: "baseline",
        paddingInline: sizes.spacingHalf,
        gap: sizes.spacingHalf,
        overflow: "hidden",
        textEllipsis: "ellipsis",
    },
    checkboard: {
        backgroundImage: `url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" fill-opacity=".25"><rect x="200" width="200" height="200" /><rect y="200" width="200" height="200" /></svg>')`,
        backgroundSize: "16px 16px",
    },
    highlight: {
        borderRadius: sizes.borderRadius,
        boxShadow: `0 0 0 2px ${colors.warn}`,
    },
    colorList: {
        position: "relative",
        display: "flex",
        gap: 2,
        borderRadius: sizes.borderRadius,
    },
    strength: {
        fontFamily: fonts.mono,
    },
    colorListItem: {
        height: sizes.input,
        cursor: "pointer",
        border: 0,
        padding: 0,
        flex: 1,
        ":first-child": {
            borderTopLeftRadius: sizes.borderRadius,
            borderBottomLeftRadius: sizes.borderRadius,
        },
        ":last-child": {
            borderTopRightRadius: sizes.borderRadius,
            borderBottomRightRadius: sizes.borderRadius,
        },
        ":hover": {
            boxShadow: `0 0 0 2px ${colors.primaryBlue}`,
            zIndex: 2,
        },
        ":focus": {
            boxShadow: `0 0 0 2px ${colors.primaryBlue}`,
            zIndex: 2,
        },
    },
    colorListItemActive: {
        boxShadow: `0 0 0 2px ${colors.primaryBlue}`,
        zIndex: 1,
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

    const [state, setState]: [StateObject, any] = useState(
        colorReturnValues({
            group: value?.group,
            strength: value?.strength,
            colors,
        }),
    );

    useEffect(() => {
        if (!state?.hex) {
            if (value != "") {
                commit("");
            }
            return;
        }
        if (JSON.stringify(value) != JSON.stringify(state)) {
            commit(state);
        }
    }, [state]);

    function handleColorClick(group: string, strength: number) {
        setState(colorReturnValues({ group, strength, colors }));
    }

    function handleGroupChange(group: string) {
        const strength = state?.strength || null;
        setState(colorReturnValues({ group, strength, colors }));
    }

    const i18n = {
        white: i18nRegistry.translate("Carbon.TailwindColors:Main:white"),
        black: i18nRegistry.translate("Carbon.TailwindColors:Main:black"),
        selectColor: i18nRegistry.translate("Carbon.TailwindColors:Main:selectColor"),
        resetColor: i18nRegistry.translate("Carbon.TailwindColors:Main:resetColor"),
        selectColorGroup: i18nRegistry.translate("Carbon.TailwindColors:Main:selectColorGroup"),
    };

    const colorsArray = [];
    for (const group in colors) {
        const groupValues = colors[group];
        const label = capitalizeFirstLetter(group);
        const values = [];
        for (const strength in groupValues) {
            const color = groupValues[strength];
            let label = strength;
            if (label == "0") {
                label = i18n.white;
            } else if (label == "1000") {
                label = i18n.black;
            }
            values.push({
                strength: typeof strength == "string" ? parseInt(strength) : strength,
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

    return (
        <div {...stylex.props(styles.wrapper, disabled && styles.disabled)}>
            <div {...stylex.props(styles.previewBoxWrapper)}>
                <div
                    {...stylex.props(
                        styles.previewBox,
                        !placeholder && !state?.hex && styles.checkboard,
                        highlight && styles.highlight,
                    )}
                    style={getPreviewBoxStyle({ colors, state, placeholder })}
                >
                    {state?.hex && state?.group && (
                        <>
                            {state?.strength == 1000 && i18n.black}
                            {state?.strength == 0 && i18n.white}
                            {state?.strength != 0 && state?.strength != 1000 && (
                                <>
                                    <span>{capitalizeFirstLetter(state.group)}</span>{" "}
                                    <span {...stylex.props(styles.strength)}>{state?.strength}</span>
                                </>
                            )}
                        </>
                    )}
                </div>
                {allowEmpty && (
                    <IconButton
                        style="lighter"
                        icon="times"
                        title={i18n.resetColor}
                        onClick={() => {
                            setState(null);
                        }}
                    />
                )}
            </div>
            <SelectBox
                options={selectBoxOptions}
                value={state?.group}
                placeholder={i18n.selectColorGroup}
                allowEmpty={false}
                onValueChange={handleGroupChange}
                ListPreviewElement={OptionPreview}
            />
            {colorsArray.map((item) => {
                const isActiveGroup = state && state.group == item.group;
                return (
                    isActiveGroup && (
                        <div {...stylex.props(styles.colorList)}>
                            {item.values.map((entry) => {
                                const current = entry.strength == state.strength;

                                return (
                                    <button
                                        {...stylex.props(styles.colorListItem, current && styles.colorListItemActive)}
                                        key={item.group + entry.strength}
                                        style={{ backgroundColor: entry.color }}
                                        title={entry.label}
                                        onClick={() => handleColorClick(item.group, entry.strength)}
                                    ></button>
                                );
                            })}
                        </div>
                    )
                );
            })}
        </div>
    );
}

export default neosifier(Editor);
