import { Select } from 'antd'
import PropTypes from 'prop-types';

const { Option } = Select;

const WKSelect = ({
    onChange,
    onSeach,
    optionFilterProp,
    placeholder,
    filterOption,
    multiple,
    isRequired,
    maxTagsCount,
    onSelect,
    style,
    value,
    optionLabelProp,
    showSeach,
    allowClear,
    onClear,
    options,
    size
}) => {

    let defaultStyle = {

    }

    let defaultProps = {
        allowClear: false,
        value: -1, // select all
        showSearch: false,
        size: 'small'
    }

    if (multiple) {
        defaultProps = { ...defaultProps, mode: 'multiple' }
    }
    const additionalProps = {
        onSeach,
        onChange,
        placeholder,
        optionFilterProp,
        filterOption,
        maxTagsCount,
        onSelect,
        value,
        optionLabelProp,
        showSeach,
        allowClear,
        onClear,
        size
    }

    const renderOptions = () => {
        return options.map((opt, index) => {
            return <Option value={opt.value}>{opt.label}</Option>
        })
    }

    return <Select {...defaultProps} onChange={onChange} style={{ ...defaultStyle, ...style }} {...additionalProps} >
        {renderOptions()}
    </Select>
}

WKSelect.propTypes = {
    placeholder: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any,
        label: PropTypes.string
    })),
    allowClear: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
    searchable: PropTypes.bool.isRequired,
    // isRequired: PropTypes.bool.isRequired,
}

export {
    WKSelect
}