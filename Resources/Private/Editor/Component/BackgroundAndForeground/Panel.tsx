// @ts-ignore
import React from "react";
import { SelectBox } from "@neos-project/react-ui-components";
import { createSelectBoxOptions, colorForegroundAndBackgroundValues, StateObject } from "../Utlis";
import * as stylex from "@stylexjs/stylex";
import OptionPreview from "../OptionPreview";
import { colors, sizes } from "../Tokens.stylex";
import type { ColorObject } from "../Utlis";

const styles = stylex.create({
    colorList: {
        position: "relative",
        display: "flex",
        gap: 2,
        borderRadius: sizes.borderRadius,
    },
    colorListItem: {
        height: sizes.input,
        cursor: "pointer",
        borderWidth: 0,
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
    marginTop: {
        marginTop: sizes.spacingHalf,
    },
    paddingBottom: {
        paddingBottom: sizes.spacingQuarter,
    },
});

export default function Panel({
    foregroundColors,
    backgroundColors,
    minimalStrenghtSpan,
    i18n,
    state,
    setState,
    id,
    inPopover = false,
}: {
    foregroundColors: ColorObject;
    backgroundColors: ColorObject;
    minimalStrenghtSpan: number;
    i18n: { [key: string]: string };
    state: StateObject;
    setState: (state: StateObject) => void;
    id: string;
    inPopover?: boolean;
}) {
    const selectBoxOptions = createSelectBoxOptions(backgroundColors, minimalStrenghtSpan);
    const colors: [ColorObject, ColorObject] = [backgroundColors, foregroundColors];

    function handleColorClick(newStrength: number, isBackground = false) {
        let otherStrength = state?.strength?.[isBackground ? 1 : 0];
        if (!Number.isInteger(otherStrength) || Math.abs(newStrength - otherStrength) < minimalStrenghtSpan) {
            otherStrength = null;
        }
        const strength: [number | null, number | null] = isBackground
            ? [newStrength, otherStrength]
            : [otherStrength, newStrength];
        setState(colorForegroundAndBackgroundValues({ group: state.group, strength: strength, colors }));
    }

    function handleGroupChange(group: string) {
        const strength = state?.strength || null;
        setState(colorForegroundAndBackgroundValues({ group, strength, colors }));
    }

    const bgColorsArray = createColorsArray(backgroundColors, state?.group, i18n);
    const fgColorsArray = createColorsArray(foregroundColors, state?.group, i18n).reverse();

    return (
        <>
            <SelectBox
                {...stylex.props(inPopover && styles.marginTop)}
                id={id}
                options={selectBoxOptions}
                value={state?.group}
                placeholder={i18n.selectColorGroup}
                allowEmpty={false}
                onValueChange={handleGroupChange}
                ListPreviewElement={OptionPreview}
            />
            <div {...stylex.props(styles.colorList, inPopover && styles.paddingBottom)}>
                {bgColorsArray.map((entry: any) => {
                    const current = entry.strength === state.strength?.[0];

                    // Check if a foreground color is even possible
                    if (entry.strength < minimalStrenghtSpan && entry.strength + minimalStrenghtSpan > 1000) {
                        return;
                    }

                    return (
                        <button
                            {...stylex.props(styles.colorListItem, current && styles.colorListItemActive)}
                            key={`${state.group}${entry.strength}`}
                            style={{ backgroundColor: entry.color }}
                            title={entry.label}
                            onClick={() => handleColorClick(entry.strength, true)}
                        ></button>
                    );
                })}
            </div>
            {typeof state?.strength?.[0] == "number" && (
                <div {...stylex.props(styles.colorList, inPopover && styles.paddingBottom)}>
                    {fgColorsArray.map((entry: any) => {
                        const bgStrength = state.strength[0];
                        const current = entry.strength === state.strength?.[1];

                        // Test if the numbers are not to close to each other
                        if (Math.abs(entry.strength - bgStrength) < minimalStrenghtSpan) {
                            return;
                        }

                        return (
                            <button
                                {...stylex.props(styles.colorListItem, current && styles.colorListItemActive)}
                                key={`${state.group}${entry.strength}`}
                                style={{ backgroundColor: entry.color }}
                                title={entry.label}
                                onClick={() => handleColorClick(entry.strength, false)}
                            ></button>
                        );
                    })}
                </div>
            )}
        </>
    );
}

function createColorsArray(colors: ColorObject, group: string | null | undefined, i18n: { [key: string]: string }) {
    if (!group || !colors[group]) {
        return [];
    }
    const groupValues = colors[group];
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

    return values;
}
