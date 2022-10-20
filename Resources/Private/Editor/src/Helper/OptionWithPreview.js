import React, { PureComponent } from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line camelcase
import { SelectBox_Option_MultiLineWithThumbnail } from "@neos-project/react-ui-components";

class OptionWithPreview extends PureComponent {
    static propTypes = {
        option: PropTypes.shape({
            label: PropTypes.string.isRequired,
            colors: PropTypes.arrayOf(PropTypes.string),
        }),
    };

    generatePreview(colors) {
        const length = colors.length;
        const stop = 100 / length;

        let svg =
            '<svg viewBox="0 0 134 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="100%" id="bg">';
        colors.forEach((color, index) => {
            const start = stop * index;
            const end = stop * (index + 1);
            svg += `<stop stop-color="${color}" offset="${start}%"></stop><stop stop-color="${color}" offset="${end}%"></stop>`;
        });
        svg += '</linearGradient></defs><rect fill="url(#bg)" x="0" y="0" width="134" height="100"></rect></svg>';

        return `data:image/svg+xml;base64,${btoa(svg)}`;
    }

    render() {
        const { option } = this.props;

        return (
            <SelectBox_Option_MultiLineWithThumbnail
                {...this.props}
                imageUri={this.generatePreview(option.colors)}
                label={option.label}
            />
        );
    }
}

export default OptionWithPreview;
