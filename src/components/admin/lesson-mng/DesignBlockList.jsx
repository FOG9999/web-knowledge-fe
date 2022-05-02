import { PlusOutlined } from "@ant-design/icons";
import { Card, Dropdown, Menu } from "antd";
import { useContext } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { WINDOW_SMALL_WIDTH } from "../../../constants";
import { templateBlockList } from "../../../shared/fake/TemplateBlock";
import { DesignBlock } from "./DesignBlock";
import { LessonContext } from "./LessonDesign";

export const DesignBLockList = ({ listDesignBlocks, pushBlock }) => {
    const currentLesson = useContext(LessonContext);
    const windowWidth = useSelector((state) => state.window.winWidth);

    const menu = (
        <Menu>
            {templateBlockList.map((templBlock) => {
                return <Menu.Item key={templBlock.id} onClick={() => pushBlock(templBlock)}>{templBlock.title}</Menu.Item>;
            })}
        </Menu>
    );

    const renderDeisgnBlockList = () => {
        return listDesignBlocks.map((designBlock, index) => {
            return <DesignBlock designBlock={designBlock} key={designBlock.id} index={index} />;
        });
    };

    const getExtraDropdown = () => {
        if (windowWidth > WINDOW_SMALL_WIDTH) {
            return null;
        } else {
            return (
                <Dropdown overlay={menu} placement="bottomLeft" arrow>
                    <span className="cursor-pointer">
                        <PlusOutlined />
                    </span>
                </Dropdown>
            );
        }
    };

    return (
        <Card title={currentLesson.title} style={{ minHeight: "100%" }} extra={getExtraDropdown()}>
            <Droppable droppableId="design-list" key={1}>
                {(provided, snapshot) => {
                    return (
                        <div style={{ minHeight: "500px", maxHeight: "70vh", overflowY: "auto" }} ref={provided.innerRef} {...provided.droppableProps}>
                            {renderDeisgnBlockList()}
                            {provided.placeholder}
                        </div>
                    );
                }}
            </Droppable>
        </Card>
    );
};
