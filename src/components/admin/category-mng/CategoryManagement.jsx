import { DeleteOutlined, EditOutlined, FileExcelOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Space } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CategoryService } from "../../../apis/CategoryService";
import { loaded, loading } from "../../../redux/actions/LoadingAction";
import { store } from "../../../redux/Store";
import { WKButton } from "../../../shared/customs/Button";
import { WKPagination } from "../../../shared/customs/Pagination";
import { WKTable } from "../../../shared/customs/Table";

export const CategoryManagement = () => {
    const [categories, setCategories] = useState([]);
    const [totalCategories, setTotalCategories] = useState(0);
    const [page, setPage] = useState(1);
    const [pageSize] = useState(2);

    let windowSize = useSelector(state => state.window.winWidth);

    const columns = [
        {
            title: "No.",
            dataIndex: "No.",
            render: (text, record, index) => {
                return index + 1 + (page - 1) * pageSize;
            },
            // width: 50,
        },
        {
            title: "Title",
            dataIndex: "title",
        },
        {
            title: "Created Date",
            dataIndex: "createdDate",
        },
        {
            title: "Created By",
            dataIndex: "createdBy",
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: () => {
                return (
                    <Space>
                        <WKButton icon={<EditOutlined />} type="primary">
                            Edit
                        </WKButton>
                        <WKButton icon={<DeleteOutlined />} danger>
                            Delete
                        </WKButton>
                    </Space>
                );
            },
            width: 200,
        },
    ];

    const getListCategories = (page) => {
        CategoryService.getAllCategories(page, pageSize).then((res) => {
            setCategories(res.categories);
            setTotalCategories(res.total);
            setPage(page);
            store.dispatch(loaded());
        });
    };

    const onChangePage = (page) => {        
        store.dispatch(loading());
        getListCategories(page);        
    };

    useEffect(() => {
        store.dispatch(loading());
        getListCategories(page);
    }, []);

    return (
        <Card
            title={
                <div className="d-flex">
                    <span className="flex-grow-1 d-flex align-items-center">
                        <b>Category Management</b>
                    </span>
                    <span className="p-1">
                        <WKButton icon={<PlusOutlined />}>{windowSize > 600 ? 'Add new category': null}</WKButton>
                    </span>
                </div>
            }
            style={{minWidth: '300px'}}
        >
            <div className="table-container ">
                <WKTable dataSource={categories.map((item) => ({ ...item, key: item.id }))} columns={columns} page={page} pageSize={pageSize} />
            </div>
            <div className="mt-3">
                <WKPagination total={totalCategories} pageSize={pageSize} current={page} itemUnit="categories" currentNumberOfItems={categories.length} onChange={onChangePage} />
            </div>
        </Card>
    );
};
