import PropTypes from 'prop-types';
import {Table} from 'antd'

const WKTable = ({
    dataSource,
    columns,
    expand,
    pagination
}) => {
    const defaultConfig = {
        pagination: false
    }

    const additionalProps = {
        pagination: pagination?pagination:false
    }

    return <Table dataSource={dataSource} columns={columns} expandable={expand} {...defaultConfig} {...additionalProps} />
}

WKTable.propTypes = {
    dataSource: PropTypes.arrayOf(PropTypes.shape({key: PropTypes.string})).isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({title: PropTypes.string, dataIndex: PropTypes.string})).isRequired,
    expand: PropTypes.shape({
        expandedRowRender: PropTypes.func,
        rowExpandable: PropTypes.func
    })
}

export {
    WKTable
}