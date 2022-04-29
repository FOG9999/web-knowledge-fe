import { CloseOutlined, EditOutlined, SettingOutlined } from "@ant-design/icons";
import { Card, Typography } from "antd";
import { useEffect, useState } from "react";
import Prism from "prismjs";
import { Draggable } from "react-beautiful-dnd";
import "../../../styles/DesignBlock.scss";

const { Title } = Typography;

export const DesignBlock = ({ designBlock, index }) => {
    useEffect(() => {
        console.log("index change");
    }, [index]);

    useEffect(() => {
        console.log("block change");
    }, [designBlock]);

    const getBlockStyles = () => {
        switch (designBlock.type) {
            case "warn": {
                return { backgroundColor: "#ff8800", color: "white" };
            }
            case "success": {
                return { backgroundColor: "#007e33", color: "white" };
            }
            case "error": {
                return { backgroundColor: "#cc0000", color: "white" };
            }
            default: {
                return { backgroundColor: "white" };
            }
        }
    };

    const displayContent = () => {
        switch (designBlock.type) {
            case "code": {
                return <div style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: Prism.highlight(designBlock.content, Prism.languages.extend("js"), "js") }} />;
            }
            case "h1": {
                return <Title level={3}>{designBlock.content}</Title>;
            }
            case "h2": {
                return <Title level={4}>{designBlock.content}</Title>;
            }
            default: {
                return <p>{designBlock.content}</p>;
            }
        }
    };

    return (
        <Draggable draggableId={designBlock.id} index={index}>
            {(provided, snapshot) => {
                return (
                    <div className="design-block-wrapper mb-2" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <Card style={getBlockStyles()}>
                            <div className="row">
                                <div className="col d-flex">
                                    <div className="design-block-title border-end" style={{ width: "60px" }}>
                                        {designBlock.type}
                                    </div>
                                    <div className="design-block-content ps-3">{displayContent()}</div>
                                </div>
                                <div className="col-auto row">
                                    <span className="col">
                                        <EditOutlined />
                                    </span>
                                    <span className="col">
                                        <SettingOutlined />
                                    </span>
                                    <span className="col">
                                        <CloseOutlined />
                                    </span>
                                </div>
                            </div>
                        </Card>
                    </div>
                );
            }}
        </Draggable>
    );
};
