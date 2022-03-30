import { Layout, Menu } from "antd"
import { CustomHeader } from "./CustomHeader";

const {Header, Content, Footer} = Layout;
import {categories} from '../shared/fake/FakeData.json'
import { useEffect, useState } from "react";

export const LayoutContainer = ({component}) => {

    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        
    }, []);

    const renderCategories = ()

    return (
        <Layout>
            <CustomHeader />
            <Header>
                <Menu>
                    {
                        
                    }
                </Menu>
            </Header>
        </Layout>
    )
}