import { Spin } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { LayoutContainer } from "../../layouts/LayoutContainer";
import { CategoryManagement } from "../admin/category-mng/CategoryManagement";

export const CategoryMngWrapper = () => {

    const loading = useSelector(state => state.loading.loading)
    const [breadcrumbItems] = useState([
        {url: 'https://reactjs.org/docs/typechecking-with-proptypes.html', title: 'Admin Home'},
        {url: 'https://ant.design/components/breadcrumb/#header', title: 'Category Management'},
    ]);

    return (
        <Spin spinning={loading}>
            <LayoutContainer breadcrumbItems={breadcrumbItems}>
                <CategoryManagement />
            </LayoutContainer>
        </Spin>
    );
};
