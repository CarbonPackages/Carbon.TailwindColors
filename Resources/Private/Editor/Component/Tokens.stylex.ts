import * as stylex from "@stylexjs/stylex";

export const colors = stylex.defineVars({
    primaryBlue: "var(--colors-PrimaryBlue)",
    primaryBlueHover: "var(--colors-PrimaryBlueHover)",
    contrastNeutral: "var(--colors-ContrastNeutral)", // #323232
    contrastDark: "var(--colors-ContrastDark)", // #3f3f3f
    warn: "var(--colors-Warn)",
    error: "var(--colors-Error)",
});

export const sizes = stylex.defineVars({
    input: "calc(var(--spacing-Full) + var(--spacing-Half))",
    spacingFull: "var(--spacing-Full)", // 16px
    spacingHalf: "var(--spacing-Half)", // 8px
    spacingQuarter: "var(--spacing-Quarter)", // 4px
    borderRadius: "2px",
    goldenUnit: "var(--spacing-GoldenUnit)", // 40px
    previewWidth: "90px",
    previewHeight: "50px",
});

export const fonts = stylex.defineVars({
    mono: "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace",
    size: "var(--fontSize-Base)", // 14px
});

export const transitions = stylex.defineVars({
    fast: "var(--transition-Fast)", // 0.1s
    default: "var(--transition-Default)", // 0.25s
    slow: "var(--transition-Slow)", // 0.5s
    timing: "cubic-bezier(0.4, 0, 0.2, 1)",
});
