import React from 'react';
import chroma from 'chroma-js';
import { colourOptions } from './data';
import Select from 'react-select';
const colourStyles = {
    control: (styles) => (Object.assign(Object.assign({}, styles), { backgroundColor: 'white' })),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return Object.assign(Object.assign({}, styles), { backgroundColor: isDisabled
                ? undefined
                : isSelected
                    ? data.color
                    : isFocused
                        ? color.alpha(0.1).css()
                        : undefined, color: isDisabled
                ? '#ccc'
                : isSelected
                    ? chroma.contrast(color, 'white') > 2
                        ? 'white'
                        : 'black'
                    : data.color, cursor: isDisabled ? 'not-allowed' : 'default', ':active': Object.assign(Object.assign({}, styles[':active']), { backgroundColor: !isDisabled
                    ? isSelected
                        ? data.color
                        : color.alpha(0.3).css()
                    : undefined }) });
    },
    multiValue: (styles, { data }) => {
        const color = chroma(data.color);
        return Object.assign(Object.assign({}, styles), { backgroundColor: color.alpha(0.1).css() });
    },
    multiValueLabel: (styles, { data }) => (Object.assign(Object.assign({}, styles), { color: data.color })),
    multiValueRemove: (styles, { data }) => (Object.assign(Object.assign({}, styles), { color: data.color, ':hover': {
            backgroundColor: data.color,
            color: 'white',
        } })),
};

export default () => (
  <Select
    closeMenuOnSelect={false}
    defaultValue={[colourOptions[0], colourOptions[1]]}
    isMulti
    options={colourOptions}
    styles={colourStyles}
  />
);