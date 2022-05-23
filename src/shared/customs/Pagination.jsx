import { Pagination } from "antd";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const WKPagination = ({ current, pageSize, total, onChange, currentNumberOfItems, itemUnit }) => {

    let winWidth = useSelector(state => state.window.winWidth);

    return (
        <div className={winWidth > 600 ? "pagination-container d-flex" : "pagination-container"}>
            <div className={winWidth > 600 ? "flex-grow-1 d-flex align-items-center" : "text-center"}>
                Showing {currentNumberOfItems} of {total} {itemUnit}
            </div>
            <div className={winWidth > 600 ? "": "d-flex justify-content-center"}>
                <Pagination current={current} showLessItems={winWidth < 600} pageSize={pageSize} total={total} onChange={onChange} />
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
