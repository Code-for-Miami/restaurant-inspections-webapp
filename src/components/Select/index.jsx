import React from 'react';

const Select = ({
    name,
    label,
    options,
    onChange
}) => (
    <div>
        <label htmlFor={ name } />
        <select id={ name } name={ name } onChange={ onChange }>
            <option value="" >Select one</option>
            { options.map(({value, text, key}) => <option key={ key } value={ value } >{ text }</option>) }
        </select>
    </div>
);

Select.propTypes = {
    name:     React.PropTypes.string.isRequired,
    label:    React.PropTypes.string.isRequired,
    options:  React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func
};

export default Select;
