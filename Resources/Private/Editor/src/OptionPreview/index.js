// @ts-ignore
import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import style from "./style.module.css";
import clsx from "clsx";

export default class OptionPreview extends PureComponent {
    static propTypes = {
        option: PropTypes.shape({
            label: PropTypes.string.isRequired,
            colors: PropTypes.arrayOf(PropTypes.string),
        }),
    };

    render() {
        const { option, onClick, isHighlighted, onMouseEnter } = this.props;
        const { colors, label } = option;

        const length = colors.length;
        const stop = 100 / length;
        const id = "bg-" + nanoid();
        const width = 90;
        const height = 60;

        return (
            <button
                className={clsx(style.preview, isHighlighted && style.highlighted)}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                type="button"
            >
                <svg
                    height={height}
                    width={width}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="none"
                    className="pointer-events-none size-full"
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
                    <rect fill={`url(#${id})`} x="0" y="0" width={width} height={height}></rect>
                </svg>
                <span title={label}>{label}</span>
            </button>
        )
    }
}
