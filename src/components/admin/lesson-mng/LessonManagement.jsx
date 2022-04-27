import { Tabs } from "antd";
import { useState } from "react";
import { BlockListRenderer } from "../../BlockListRenderer";
import { LessonDesign } from "./LessonDesign";

const { TabPane } = Tabs;

export const LessonManagement = () => {
    
    const [listDesignBlocks, setListDesignBlocks] = useState([]);
    
    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab="Design" key="1">
                <LessonDesign listDesignBlocks={listDesignBlocks} setListDesignBlocks={setListDesignBlocks} />
            </TabPane>
            <TabPane tab="Preview" key="2">
                <BlockListRenderer blocks={listDesignBlocks} />
            </TabPane>
        </Tabs>
    );
};
