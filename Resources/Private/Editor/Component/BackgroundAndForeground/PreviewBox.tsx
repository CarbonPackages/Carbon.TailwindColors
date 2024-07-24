// @ts-ignore
import React from "react";
import { capitalizeFirstLetter, getPreviewBoxColor } from "../Utlis";
import * as stylex from "@stylexjs/stylex";
import { colors, sizes, fonts } from "../Tokens.stylex";

const styles = stylex.create({
    previewBox: {
        flex: 1,
        minHeight: sizes.goldenUnit,
        maxHeight: sizes.goldenUnit,
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
    state,
    foregroundColors,
    backgroundColors,
    i18n,
    highlight = false,
    inPopover = false,
}: {
    state: any;
    foregroundColors: any;
    backgroundColors: any;
    i18n: any;
    highlight?: Boolean;
    inPopover?: Boolean;
}) {
    const group = state?.group ? capitalizeFirstLetter(state.group) : null;
    const bgIsWhite = state?.strength?.[0] === 0;
    const bgIsBlack = state?.strength?.[0] === 1000;
    const fgIsWhite = state?.strength?.[1] === 0;
    const fgIsBlack = state?.strength?.[1] === 1000;

    const output = [];

    if (Number.isInteger(state?.strength?.[0]) && Number.isInteger(state?.strength?.[1])) {
        if (bgIsWhite || bgIsBlack) {
            output.push(bgIsWhite ? i18n.white : i18n.black);
        } else {
            output.push(group);
            output.push(state.strength[0]);
        }
        output.push("/");
        if (fgIsWhite || fgIsBlack) {
            output.push(fgIsWhite ? i18n.white : i18n.black);
        } else {
            if (!output.includes(group)) {
                output.push(group);
            }
            output.push(state.strength[1]);
        }
    }

    return (
        <div
            {...stylex.props(
                styles.previewBox,
                !state?.hex?.[0] && styles.checkboard,
                !inPopover && highlight && styles.highlight,
                inPopover && styles.rightNotRounded,
            )}
            style={{
                backgroundColor: getPreviewBoxColor({
                    colors: backgroundColors,
                    group: state?.group,
                    strength: state?.strength?.[0],
                }),
                color: getPreviewBoxColor({
                    colors: foregroundColors,
                    group: state?.group,
                    strength: state?.strength?.[1],
                }),
            }}
        >
            {output.map((item) => {
                if (typeof item === "number") {
                    return <span {...stylex.props(styles.strength)}>{item}</span>;
                }
                return <span>{item}</span>;
            })}
        </div>
    );
}
