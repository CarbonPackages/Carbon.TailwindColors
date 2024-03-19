// @ts-ignore
import React, { Fragment } from "react";
import { nanoid } from "nanoid";
import * as stylex from "@stylexjs/stylex";
import { colors, sizes, fonts } from "./Tokens.stylex";

const styles = stylex.create({
    preview: {
        display: "block",
        marginLeft: `calc(${sizes.spacingFull} * -1)`,
        marginBlock: `calc(${sizes.spacingQuarter} * -1)`,
        height: sizes.previewHeight,
        minWidth: sizes.previewWidth,
        pointerEvents: "none",
    },
    button: {
        cursor: "pointer",
        fontSize: fonts.size,
        lineHeight: `calc(${sizes.goldenUnit} - 10px)`,
        padding: `${sizes.spacingQuarter} ${sizes.spacingFull}`,
        display: "flex",
        gap: sizes.spacingFull,
        alignItems: "center",
        justifyContent: "flex-start",
        border: 0,
        background: "none",
        borderRadius: 0,
        color: "white",
        width: "100%",
    },
    buttonHighlighted: {
        backgroundColor: colors.primaryBlue,
    },
    text: {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        flex: 1,
        textAlign: "left",
    },
});

export default function OptionPreview({
    option,
    onClick,
    isHighlighted,
    onMouseEnter,
}: {
    option: { label: string; value: string; colors: string[] };
    onClick: () => void;
    isHighlighted: boolean;
    onMouseEnter: () => void;
}) {
    const { colors, label } = option;
    const length = colors.length;
    const stop = 100 / length;
    const id = "bg-" + nanoid();

    return (
        <button
            {...stylex.props(styles.button, isHighlighted && styles.buttonHighlighted)}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            type="button"
        >
            <svg
                {...stylex.props(styles.preview)}
                height="100"
                width="100"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient x1="0%" y1="100%" x2="100%" y2="100%" id={id}>
                        {colors.map((color, index) => {
                            const start = stop * index + "%";
                            const end = stop * (index + 1) + "%";
                            return (
                                <Fragment key={index}>
                                    <stop stopColor={color} offset={start}></stop>
                                    <stop stopColor={color} offset={end}></stop>
                                </Fragment>
                            );
                        })}
                    </linearGradient>
                </defs>
                <rect fill={`url(#${id})`} x="0" y="0" width="100" height="100"></rect>
            </svg>
            <span {...stylex.props(styles.text)} title={label}>
                {label}
            </span>
        </button>
    );
}
