// @ts-ignore
import React, { useState, useEffect, MouseEvent } from "react";
import { neos } from "@neos-project/neos-ui-decorators";
import { IconButton, Icon } from "@neos-project/react-ui-components";
import Panel from "./Panel";
import PreviewBox from "./PreviewBox";
import Error from "../Error";
import { generateColorObject, colorReturnValues } from "../Utlis";
import * as stylex from "@stylexjs/stylex";
import { colors, sizes, transitions } from "../Tokens.stylex";
import type { StateObject } from "../Utlis";

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
        borderWidth: 0,
        padding: 0,
        minHeight: sizes.goldenUnit,
        borderRadius: sizes.borderRadius,
        cursor: "pointer",
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

    const colors = generateColorObject({
        colors: options.colors,
        scheme: options.scheme,
        grayscale: options.grayscale,
        disableStrength: options.disableStrength,
    });

    if (!colors) {
        return <Error>{i18nRegistry.translate("Carbon.TailwindColors:Main:noColorsDefined")}</Error>;
    }

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

    const { allowEmpty, disabled, placeholder, collapsed } = options;

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
                            placeholder={placeholder}
                            state={state}
                            colors={colors}
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
                        placeholder={placeholder}
                        state={state}
                        colors={colors}
                        i18n={i18n}
                        highlight={highlight}
                    />
                )}
                <Panel colors={colors} i18n={i18n} state={state} setState={setState} id={id} />
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
                <PreviewBox placeholder={placeholder} state={state} colors={colors} i18n={i18n} inPopover={true} />
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
                    <Panel colors={colors} i18n={i18n} state={state} setState={setState} id={id} inPopover={true} />
                </div>
            </div>
        </div>
    );
}

export default neosifier(Editor);
