// @ts-ignore
import React, { useState, useEffect, MouseEvent } from "react";
import { neos } from "@neos-project/neos-ui-decorators";
import { IconButton, Icon } from "@neos-project/react-ui-components";
import Panel from "./Panel";
import PreviewBox from "./PreviewBox";
import Error from "../Error";
import { generateColorObject, colorForegroundAndBackgroundValues } from "../Utlis";
import * as stylex from "@stylexjs/stylex";
import { colors, sizes, transitions } from "../Tokens.stylex";
import type { StateObject, ColorObject } from "../Utlis";

const neosifier = neos((globalRegistry) => ({
    i18nRegistry: globalRegistry.get("i18n"),
    config: globalRegistry.get("frontendConfiguration").get("CarbonTailwindColors"),
}));

/*

The value will be saved like this:

{
    group: NAME OF THE GROUP,
    strength: [BACKGROUND_STRENGTH, FOREGROUND_STRENGTH],
    hex: [BACKGROUND_HEX, FOREGROUND_HEX],
    rgb: [BACKGROUND_RGB, FOREGROUND_RGB],
    hsl: [BACKGROUND_HSL, FOREGROUND_HSL],
    rgbValues: [BACKGROUND_RGB_VALUES, FOREGROUND_RGB_VALUES],
    hslValues: [BACKGROUND_HSL_VALUES, FOREGROUND_HSL_VALUES]
}

*/

const defaultProps = {
    options: {
        allowEmpty: false,
        disabled: false,
        scheme: null,
        collapsed: false,
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
    highlight: {
        borderRadius: sizes.borderRadius,
        boxShadow: `0 0 0 2px ${colors.warn}`,
    },
    noGap: {
        gap: 0,
    },
    popoverButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "stretch",
        border: "none",
        padding: 0,
        minHeight: sizes.goldenUnit,
        borderRadius: sizes.borderRadius,
        cursor: "pointer",
        background: "none",
        backgroundColor: colors.contrastNeutral,
    },
    popoverButtonIcon: (open) => ({
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: `transform ${transitions.default} ${transitions.timing}`,
        minWidth: sizes.goldenUnit,
    }),
    popoverPanel: (open) => ({
        display: "grid",
        gridTemplateRows: open ? "1fr" : "0fr",
        opacity: open ? 1 : 0,
        transition: `grid-template-rows ${transitions.default} ${transitions.timing}, opacity ${transitions.fast} ${transitions.timing} ${open ? transitions.fast : "0s"}`,
    }),
    popoverContent: {
        overflow: "hidden",
        paddingInline: 16,
        marginInline: -16,
    },
});

// @ts-ignore
function Editor(props) {
    const options = { ...defaultProps.options, ...props.config, ...props.options };
    const { value, commit, highlight, i18nRegistry, id } = props;
    const minimalStrenghtSpan = Math.min(Math.max(options.minimalStrenghtSpan || 100, 100), 900);

    const foregroundColors: ColorObject = generateColorObject({
        colors: options.colors,
        scheme: options.scheme,
        grayscale: options.grayscale,
        disableStrength: [],
    });
    const backgroundColors: ColorObject = generateColorObject({
        colors: options.colors,
        scheme: options.scheme,
        grayscale: options.grayscale,
        disableStrength: options.disableStrength || [],
    });

    if (!foregroundColors || !backgroundColors) {
        return <Error>{i18nRegistry.translate("Carbon.TailwindColors:Main:noColorsDefined")}</Error>;
    }

    const [state, setState]: [StateObject, any] = useState(
        colorForegroundAndBackgroundValues({
            group: value?.group,
            strength: [value?.strength?.[0], value?.strength?.[1]],
            colors: [backgroundColors, foregroundColors],
        }),
    );

    useEffect(() => {
        if (state === null) {
            if (value && Object.keys(value).length) {
                commit("");
            }
            return;
        }

        // Both are set
        const hex = state?.hex;
        if (hex && hex[0] && hex[1] && JSON.stringify(value) != JSON.stringify(state)) {
            commit(state);
        }
    }, [state]);

    const { allowEmpty, disabled, collapsed } = options;

    const i18n = {
        white: i18nRegistry.translate("Carbon.TailwindColors:Main:white"),
        black: i18nRegistry.translate("Carbon.TailwindColors:Main:black"),
        selectColor: i18nRegistry.translate("Carbon.TailwindColors:Main:selectColor"),
        resetColor: i18nRegistry.translate("Carbon.TailwindColors:Main:resetColor"),
        selectColorGroup: i18nRegistry.translate("Carbon.TailwindColors:Main:selectColorGroup"),
    };

    if (!collapsed) {
        return (
            <div {...stylex.props(styles.wrapper, disabled && styles.disabled)}>
                {allowEmpty ? (
                    <div {...stylex.props(styles.previewBoxWrapper)}>
                        <PreviewBox
                            state={state}
                            foregroundColors={foregroundColors}
                            backgroundColors={backgroundColors}
                            i18n={i18n}
                            highlight={highlight}
                        />
                        <IconButton
                            style="lighter"
                            icon="times"
                            title={i18n.resetColor}
                            onClick={() => {
                                setState(null);
                            }}
                        />
                    </div>
                ) : (
                    <PreviewBox
                        state={state}
                        foregroundColors={foregroundColors}
                        backgroundColors={backgroundColors}
                        i18n={i18n}
                        highlight={highlight}
                    />
                )}
                <Panel
                    foregroundColors={foregroundColors}
                    backgroundColors={backgroundColors}
                    minimalStrenghtSpan={minimalStrenghtSpan}
                    i18n={i18n}
                    state={state}
                    setState={setState}
                    id={id}
                />
            </div>
        );
    }

    const [open, setOpen] = useState(false);

    return (
        <div {...stylex.props(styles.wrapper, options.disabled && styles.disabled, styles.noGap)}>
            <button
                {...stylex.props(styles.popoverButton, highlight && styles.highlight)}
                type="button"
                title={i18nRegistry.translate(`Carbon.ColorPicker.OKLCH:Main:${open ? "close" : "open"}Panel`)}
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls={`${id}-panel`}
            >
                <PreviewBox
                    state={state}
                    foregroundColors={foregroundColors}
                    backgroundColors={backgroundColors}
                    i18n={i18n}
                    inPopover={true}
                />
                {Boolean(allowEmpty) && Boolean(state?.hex) && (
                    <IconButton
                        style="light"
                        icon="times"
                        title={i18nRegistry.translate("Carbon.ColorPicker.OKLCH:Main:resetColor")}
                        onClick={(event: MouseEvent<HTMLButtonElement>) => {
                            event.stopPropagation();
                            setState(null);
                        }}
                    />
                )}
                <Icon icon="chevron-down" {...stylex.props(styles.popoverButtonIcon(open))} />
            </button>
            <div {...stylex.props(styles.popoverPanel(open))} aria-hidden={!open} id={`${id}-panel`}>
                <div {...stylex.props(styles.wrapper, styles.popoverContent)}>
                    <Panel
                        foregroundColors={foregroundColors}
                        backgroundColors={backgroundColors}
                        minimalStrenghtSpan={minimalStrenghtSpan}
                        i18n={i18n}
                        state={state}
                        setState={setState}
                        id={id}
                        inPopover={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default neosifier(Editor);
