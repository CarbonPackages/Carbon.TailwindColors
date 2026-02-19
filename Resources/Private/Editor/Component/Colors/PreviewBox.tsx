// @ts-ignore
import React from "react";
import { capitalizeFirstLetter, getPreviewBoxStyle } from "../Utlis";
import * as stylex from "@stylexjs/stylex";
import { colors, sizes, fonts } from "../Tokens.stylex";

const styles = stylex.create({
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
        textOverflow: "ellipsis",
    },
    checkboard: {
        backgroundImage: `url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" fill-opacity=".25"><rect x="200" width="200" height="200" /><rect y="200" width="200" height="200" /></svg>')`,
        backgroundSize: "16px 16px",
    },
    highlight: {
        borderRadius: sizes.borderRadius,
        boxShadow: `0 0 0 2px ${colors.warn}`,
    },
    strength: {
        fontFamily: fonts.mono,
    },
    rightNotRounded: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
});

export default function PreviewBox({
    placeholder,
    state,
    colors,
    i18n,
    highlight = false,
    inPopover = false,
}: {
    placeholder: any;
    state: any;
    colors: any;
    i18n: any;
    highlight?: boolean;
    inPopover?: boolean;
}) {
    return (
        <div
            {...stylex.props(
                styles.previewBox,
                !placeholder && !state?.hex && styles.checkboard,
                !inPopover && highlight && styles.highlight,
                inPopover && styles.rightNotRounded,
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
    );
}
