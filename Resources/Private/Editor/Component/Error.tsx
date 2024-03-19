// @ts-ignore
import React, { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { colors, sizes } from "./Tokens.stylex";

const styles = stylex.create({
    error: {
        background: colors.error,
        padding: `${sizes.spacingHalf} ${sizes.spacingFull}`,
        marginInline: `calc(${sizes.spacingFull} * -1)`,
    },
});

export default function Error({ children }: { children: ReactNode }) {
    return <div {...stylex.props(styles.error)}>{children}</div>;
}
