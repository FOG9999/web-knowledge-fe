import { Breadcrumb } from 'antd';
import PropTypes from 'prop-types';

const WKBreadcrumb = ({
    items
}) => {

    const renderBreadcrumbItems = () => {
        return items.map((item, ind) => (
            <Breadcrumb.Item key={ind}>
                <a href={item.url}>{item.title}</a>
            </Breadcrumb.Item>
        ))
    }

    return <Breadcrumb>
        {renderBreadcrumbItems()}
    </Breadcrumb>
}

WKBreadcrumb.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({title: PropTypes.string, url: PropTypes.string})).isRequired
}

export {
    WKBreadcrumb
}

