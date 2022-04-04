import { Breadcrumb, Layout, Menu } from "antd";
import { CustomHeader } from "./CustomHeader";
import fake from "../shared/fake/FakeData.json";
import { useEffect, useState } from "react";
import SubMenu from "antd/lib/menu/SubMenu";
import "../styles/LayoutContainer.scss";
import { LaptopOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

export const LayoutContainer = ({ component }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [lessons, setLessons] = useState([]);
    const [courses, setCourses] = useState([]);
    const [collapsed, setCollapsed] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setCategories(fake.categories);
            setCourses(fake.courses);
            setLessons(fake.lessons);
            setSelectedCourse("61b56b40-2dd9-416f-bc96-952ced0731f5");
        }, 1000);
    }, []);

    // get only parent courses for a category on horizontal navabar
    const getParentCoursesForCategoryMenu = (categoryId) => {
        return courses.filter((course) => !course.parentCourseId && course.categoryId === categoryId);
    };

    // render courses when click on a category on horizontal navbar
    const renderCoursesForCategoryMenu = (cate) => {
        return (
            <SubMenu key={cate.id} title={cate.title}>
                {getParentCoursesForCategoryMenu(cate.id).map((parentCourse) => {
                    return <Menu.Item key={parentCourse.id}>{parentCourse.title}</Menu.Item>;
                })}
            </SubMenu>
        );
    };

    // render categories in horizontal navbar
    const renderCategories = () => {
        return (
            <Menu mode="horizontal" theme="dark" style={{ lineHeight: '64px' }}>
                {categories.map((cate) => {
                    return renderCoursesForCategoryMenu(cate);
                })}
            </Menu>
        );
    };

    // render lessons of a child course on submenu in sidebar
    const renderLessonsForChildCourse = (childCourse) => {
        return (
            <SubMenu key={childCourse.id} title={
                <span>
                    <LaptopOutlined />
                    <span>{childCourse.title}</span>
                </span>
            }>
                {getLessonsForChildCourse(childCourse).map((l) => {
                    return <Menu.Item key={l.id} title={l.title}> {l.title} </Menu.Item>;
                })}
            </SubMenu>
        );
    };

    // get child courses for current selected course
    const getChildCoursesForParent = () => {
        return courses.filter((c) => c.parentCourseId === selectedCourse);
    };

    // render child courses of a course
    const renderChildCourses = () => {
        return (
            <Menu mode="inline" theme="dark" style={{ height: "100%", borderRight: 0 }}>
                {getChildCoursesForParent().map((c) => {
                    return renderLessonsForChildCourse(c);
                })}
            </Menu>
        );
    };

    const getLessonsForChildCourse = (childCourse) => {
        return lessons.filter((l) => l.courseId === childCourse.id);
    };

    const onCollapse = (collapsed) => {
        setCollapsed(collapsed)
    };

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header>
                <CustomHeader />
                {renderCategories()}
            </Header>
            <Layout>
                <Sider width={200} collapsible collapsed={collapsed} onCollapse={onCollapse} breakpoint="md">
                    {renderChildCourses()}
                </Sider>
                <Layout style={{ padding: "0 24px 24px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                    <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </Layout>
    );
};
