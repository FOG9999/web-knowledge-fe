import { PlusOutlined } from "@ant-design/icons";
import { Card, Dropdown, Menu } from "antd";
import { useContext, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { WINDOW_SMALL_WIDTH } from "../../../constants";
import { templateBlockList } from "../../../shared/fake/TemplateBlock";
import { DesignBlock } from "./DesignBlock";
import { LessonContext } from "./LessonDesign";
import { DesignBlockSetting } from "./setting-popup/DesignBlockSetting";

export const DesignBLockList = ({ listDesignBlocks, pushBlock, setListDesignBlocks }) => {
    
    const [showSetting, setShowSetting] = useState(false);
    const [blockSetting, setBlockSetting] = useState({});
    
    const currentLesson = useContext(LessonContext);

    let windowWidth = useSelector((state) => state.window.winWidth);

    const menu = (
        <Menu>
            {templateBlockList.map((templBlock) => {
                return <Menu.Item key={templBlock.id} onClick={() => pushBlock(templBlock)}>{templBlock.title}</Menu.Item>;
            })}
        </Menu>
    );

    const renderDeisgnBlockList = () => {
        return listDesignBlocks.map((designBlock, index) => {
            return <DesignBlock designBlock={designBlock} key={designBlock.id} index={index} openModal={openDeisgnBlockSetting} />;
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

    const openDeisgnBlockSetting = (block) => {
        setBlockSetting(block);
        setShowSetting(true);
    }

    const handleCancelBlockSetting = () => {
        setShowSetting(false)
    }

    const handleSaveBlockSetting = (newSetting) => {
        let indexOfBlock = -1;
        listDesignBlocks.forEach((b, ind) => {
            if(b.id === blockSetting.id){
                indexOfBlock = ind;
            }
        })
        let newList = [...listDesignBlocks];
        newList.splice(indexOfBlock, 1, newSetting);
        setListDesignBlocks(newList);
        setShowSetting(false);
    }

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
            <DesignBlockSetting visible={showSetting} handleCancel={handleCancelBlockSetting} handleSave={handleSaveBlockSetting} block={blockSetting} />
        </Card>
    );
};
