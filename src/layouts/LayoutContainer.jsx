/* eslint-disable react-hooks/exhaustive-deps */
import { Breadcrumb, Layout, Menu } from "antd";
import { CustomHeader } from "./CustomHeader";
import fake from "../shared/fake/FakeData.json";
import React, { useEffect, useState } from "react";
import SubMenu from "antd/lib/menu/SubMenu";
import "../styles/LayoutContainer.scss";
import { LaptopOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

export const LayoutContainer = (props) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");
    const [childCourses, setChildCourses] = useState([]);
    const [lessons, setLessons] = useState(new Map());
    const [blocks, setBlocks] = useState([]);
    const [collapsed, setCollapsed] = useState(true);
    const [selectedLesson, setSelectedLesson] = useState("");

    useEffect(() => {
        if (selectedCourse) {
            let childCourses = getChildCoursesForParent();
            let lessonMap = new Map();
            childCourses.forEach((course) => {
                lessonMap.set(course.id, getLessonsForChildCourse(course));
            });
            setChildCourses(childCourses);
            setLessons(lessonMap);
            // selected lesson is the first lesson in the list
            let firstKey = lessonMap.keys().next().value;
            setSelectedLesson(lessonMap.get(firstKey)[0].id); // id of the first lesson in the first child course of the current course
        }
    }, [selectedCourse]);

    useEffect(() => {
        setTimeout(() => {
            setCategories(fake.categories);
            setSelectedCategory("b3256e47-dab3-4ec0-85b9-70fd13e47098");
            // setLessons(fake.lessons);
            setSelectedCourse("61b56b40-2dd9-416f-bc96-952ced0731f5");
        }, 1000);
    }, []);

    useEffect(() => {
        getBlocksForCurrentLesson();
    }, [selectedLesson]);

    // get only parent courses for a category on horizontal navabar
    const getParentCoursesForCategoryMenu = (categoryId) => {
        return fake.courses.filter((course) => !course.parentCourseId && course.categoryId === categoryId);
    };

    // render courses when click on a category on horizontal navbar
    const renderCoursesForCategoryMenu = (cate) => {
        return (
            <SubMenu key={cate.id} title={cate.title}>
                {getParentCoursesForCategoryMenu(cate.id).map((parentCourse) => {
                    return (
                        <Menu.Item key={parentCourse.id}>
                            {parentCourse.title}
                        </Menu.Item>
                    );
                })}
            </SubMenu>
        );
    };

    // render categories in horizontal navbar
    const renderCategories = () => {
        return (
            <Menu mode="horizontal" theme="dark" style={{ lineHeight: "64px" }} activeKey={selectedCategory} onSelect={onClickParentCourse} triggerSubMenuAction="click">
                {categories.map((cate) => {
                    return renderCoursesForCategoryMenu(cate);
                })}
            </Menu>
        );
    };

    // render lessons of a child course on submenu in sidebar
    const renderLessonsForChildCourse = (childCourse) => {
        return (
            <SubMenu
                key={childCourse.id}
                title={
                    <span>
                        <LaptopOutlined />
                        <span>{childCourse.title}</span>
                    </span>
                }
                popupClassName="layout-submenu-popup"
            >
                {lessons.get(childCourse.id).map((l) => {
                    return (
                        <Menu.Item key={l.id} title={l.title} >
                            <span>{l.title}</span>
                        </Menu.Item>
                    );
                })}
            </SubMenu>
        );
    };

    // get child courses for current selected course
    const getChildCoursesForParent = () => {
        return fake.courses.filter((c) => c.parentCourseId === selectedCourse);
    };

    // render child courses of a course
    const renderChildCourses = () => {
        return (
            <Menu mode="inline" theme="dark" style={{ height: "100%", borderRight: 0 }} onSelect={onClickLesson} activeKey={selectedLesson} triggerSubMenuAction="click">
                {childCourses.map((c) => {
                    return renderLessonsForChildCourse(c);
                })}
            </Menu>
        );
    };

    const getLessonsForChildCourse = (childCourse) => {
        let currLessons = fake.lessons.filter((l) => l.courseId === childCourse.id);
        return currLessons;
    };

    const getBlocksForCurrentLesson = () => {
        let currBlocks = fake.blocks.filter((b) => b.lessonId === selectedLesson);
        setBlocks(currBlocks);
    };

    const onCollapse = (collapsed) => {
        setCollapsed(collapsed);
    };

    // on click a parent course under category menu
    // key - the selected Menu.Item, keyPath: ['parentCourseId', 'categoryId']
    const onClickParentCourse = ({ item, key, keyPath, selectedKeys, domEvent }) => {
        setSelectedCourse(key);
        setSelectedCategory(keyPath[1]);
    };

    // handle click a lesson 
    const onClickLesson = ({ item, key, keyPath, selectedKeys, domEvent }) => {
        setSelectedLesson(key);
    }

    return (
        <Layout style={{ minHeight: "100vh" }}>
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
                        {React.cloneElement(props.children, { blocks })}
                    </Content>
                    <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </Layout>
    );
};
