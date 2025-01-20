// @ts-ignore
import React from "react";
import { SelectBox } from "@neos-project/react-ui-components";
import { createSelectBoxOptions, colorReturnValues, capitalizeFirstLetter } from "../Utlis";
import * as stylex from "@stylexjs/stylex";
import OptionPreview from "../OptionPreview";
import { colors, sizes } from "../Tokens.stylex";

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
    marginTop: {
        marginTop: sizes.spacingHalf,
    },
    paddingBottom: {
        paddingBottom: sizes.spacingQuarter,
    },
});

export default function Panel({
    colors,
    i18n,
    state,
    setState,
    id,
    inPopover = false,
}: {
    colors: any;
    i18n: { [key: string]: string };
    state: any;
    setState: Function;
    id: string;
    inPopover?: boolean;
}) {
    const selectBoxOptions = createSelectBoxOptions(colors);

    function handleColorClick(group: string, strength: number) {
        setState(colorReturnValues({ group, strength, colors }));
    }

    function handleGroupChange(group: string) {
        const strength = state?.strength || null;
        setState(colorReturnValues({ group, strength, colors }));
    }

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
            {colorsArray.map((item) => {
                const isActiveGroup = state && state.group == item.group;
                return (
                    isActiveGroup && (
                        <div {...stylex.props(styles.colorList, inPopover && styles.paddingBottom)}>
                            {item.values.map((entry) => {
                                const current = entry.strength == state.strength;

                                return (
                                    <button
                                        {...stylex.props(styles.colorListItem, current && styles.colorListItemActive)}
                                        key={`${item.group}${entry.strength}`}
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
        </>
    );
}
