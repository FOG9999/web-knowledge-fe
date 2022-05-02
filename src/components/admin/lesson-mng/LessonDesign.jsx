import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";
import { LessonService } from "../../../apis/LessonService";
import { templateBlockList } from "../../../shared/fake/TemplateBlock";
import { DesignBLockList } from "./DesignBlockList";
import { TemplateBlockList } from "./TemplateBlockList";
import { Block } from "../../models/Block";
import { useSelector } from "react-redux";
import { WINDOW_SMALL_WIDTH } from "../../../constants";

const LessonContext = React.createContext();

export { LessonContext };

export const LessonDesign = ({ listDesignBlocks, setListDesignBlocks }) => {
    const [templateBLockList, setTemplateBlockList] = useState([]);
    const [currentLesson, setCurrentLesson] = useState({});

    const windowWidth = useSelector((state) => state.window.winWidth);

    const { lId } = useParams();

    useEffect(() => {
        getCurrentLesson();
        setTemplateBlockList(templateBlockList);
    }, []);

    const getCurrentLesson = () => {
        LessonService.getLesson(lId).then((lesson) => {
            setCurrentLesson(lesson);
        });
    };

    /**
     *
     * @param {string} type: customizable -> same Draggable type can be dropped in Droppable
     * @param {droppableId} source: the DroppableId that the current draggable came from
     * @param {droppableId} destination: the DropppableId that is droppped in
     * @param {draggableId} draggableId: the current draggable's id
     * @param {string} reason: 'CANCEL' | 'DROP'
     */
    const onDragEnd = ({ type, source, draggableId, destination, reason }) => {
        if (reason === "DROP" && destination) {
            if (source.droppableId === "template-list" && destination.droppableId === "design-list") {
                // find the template block that has the dragging Id
                let draggingTemplateBlock = templateBLockList.filter((template) => template.id === draggableId)[0];
                if (draggingTemplateBlock) {
                    let newDesignBlock;
                    if (listDesignBlocks.length) {
                        let lastDeisgnBlockInList = listDesignBlocks[listDesignBlocks.length - 1];
                        newDesignBlock = new Block(`This is a new ${draggingTemplateBlock.code} block`, currentLesson.id, null, lastDeisgnBlockInList.id, draggingTemplateBlock.code);
                    } else {
                        newDesignBlock = new Block(`This is a new ${draggingTemplateBlock.code} block`, currentLesson.id, null, null, draggingTemplateBlock.code);
                    }
                    if (draggingTemplateBlock.code === "code") {
                        newDesignBlock.content = "for (i = 0; i < 10; i += 1) {\n    if (i % 2 == 0) {\n        console.log('even');\n    }\n}";
                    }
                    let newDesignBlockList = [...listDesignBlocks];
                    newDesignBlockList.splice(destination.index, 0, newDesignBlock);
                    setListDesignBlocks(newDesignBlockList);
                }
            }
            if (source.droppableId === "design-list" && destination.droppableId === "design-list") {
                let blockToReorder = listDesignBlocks[source.index];
                let newDesignBlockList = [...listDesignBlocks];
                newDesignBlockList.splice(source.index, 1);
                newDesignBlockList.splice(destination.index, 0, blockToReorder);
                setListDesignBlocks(newDesignBlockList);
            }
        }
    };

    /**
     * pushing a new design block to the end of the current design block list. Only available when winWidth < WINDOW_SMALL_WIDTH
     * @param {TemplateBlock} templateBlock
     */
    const pushBlock = (templateBlock) => {
        let draggingTemplateBlock = templateBLockList.filter((template) => template.id === templateBlock.id)[0];
        if (draggingTemplateBlock) {
            let newDesignBlock;
            if (listDesignBlocks.length) {
                let lastDeisgnBlockInList = listDesignBlocks[listDesignBlocks.length - 1];
                newDesignBlock = new Block(`This is a new ${draggingTemplateBlock.code} block`, currentLesson.id, null, lastDeisgnBlockInList.id, draggingTemplateBlock.code);
            } else {
                newDesignBlock = new Block(`This is a new ${draggingTemplateBlock.code} block`, currentLesson.id, null, null, draggingTemplateBlock.code);
            }
            if (draggingTemplateBlock.code === "code") {
                newDesignBlock.content = "for (i = 0; i < 10; i += 1) {\n    if (i % 2 == 0) {\n        console.log('even');\n    }\n}";
            }
            let newDesignBlockList = [...listDesignBlocks, newDesignBlock];
            setListDesignBlocks(newDesignBlockList);
        }
    };

    return (
        <LessonContext.Provider value={currentLesson}>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="row">
                    <div className="col">
                        <DesignBLockList listDesignBlocks={listDesignBlocks} pushBlock={pushBlock} />
                    </div>
                    {windowWidth < WINDOW_SMALL_WIDTH ? null : (
                        <div className="col-auto">
                            <TemplateBlockList templateBLockList={templateBLockList} />
                        </div>
                    )}
                </div>
            </DragDropContext>
        </LessonContext.Provider>
    );
};
