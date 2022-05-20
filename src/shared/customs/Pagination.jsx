import { Pagination } from "antd";
import PropTypes from "prop-types";

const WKPagination = ({ current, pageSize, total, onChange, currentNumberOfItems, itemUnit }) => {
    return (
        <div className="pagination-container d-flex">
            <div className="flex-grow-1">
                Showing {currentNumberOfItems} from {total} {itemUnit}
            </div>
            <div>
                <Pagination current={current} pageSize={pageSize} total={total} onChange={onChange} />
            </div>
        </div>
    );
};

WKPagination.propTypes = {
    current: PropTypes.number,
    pageSize: PropTypes.number,
    total: PropTypes.number,
    onChange: PropTypes.func,
    currentNumberOfItems: PropTypes.number,
    itemUnit: PropTypes.string,
};

export { WKPagination };
