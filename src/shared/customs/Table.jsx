import PropTypes from "prop-types";
import { Table } from "antd";
import { useSelector } from "react-redux";

const WKTable = ({ dataSource, columns, expand, pagination, page, pageSize }) => {
    const defaultConfig = {
        pagination: false,
    };
    let windowWidth = useSelector((state) => state.window.winWidth);

    const additionalProps = {
        pagination: pagination ? pagination : false,
    };

    const renderTableResponsive = () => {
        return (
            <table className="table">
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th scope="col" key={col.dataIndex}>
                                <span>{col.title}</span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataSource.map((item, itemIndex) => (
                        <tr key={item.key}>
                            {columns.map((col) => {
                                if (col.dataIndex === "No.") {
                                    return (
                                        <td data-label={col.title} key={col.dataIndex}>
                                            {itemIndex + 1 + (page - 1) * pageSize}
                                        </td>
                                    );
                                }
                                else return (
                                    <td data-label={col.title} key={col.dataIndex}>
                                        {item[col.dataIndex]}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return windowWidth > 1000 ? (
        <Table dataSource={dataSource} columns={columns} expandable={expand} {...defaultConfig} {...additionalProps} scroll={{ x: true, y: false }} />
    ) : (
        renderTableResponsive()
    );
};

WKTable.propTypes = {
    dataSource: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.string })).isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string, dataIndex: PropTypes.string })).isRequired,
    expand: PropTypes.shape({
        expandedRowRender: PropTypes.func,
        rowExpandable: PropTypes.func,
    }),
};

export { WKTable };
