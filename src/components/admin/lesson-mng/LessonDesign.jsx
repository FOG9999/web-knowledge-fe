import React, { useEffect, useState } from "react"
import { DragDropContext } from "react-beautiful-dnd"
import { useParams } from "react-router-dom"
import { LessonService } from "../../../apis/LessonService"
import { templateBlockList } from "../../../shared/fake/TemplateBlock"
import { DesignBLockList } from "./DesignBlockList"
import { TemplateBlockList } from "./TemplateBlockList"
import { Block } from '../../models/Block'

const LessonContext = React.createContext();

export { LessonContext }

export const LessonDesign = () => {

    const [listDesignBlocks, setListDesignBlocks] = useState([]);
    const [templateBLockList, setTemplateBlockList] = useState([]);
    const [currentLesson, setCurrentLesson] = useState({})

    const { lId } = useParams();

    useEffect(() => {
        getCurrentLesson();
        setTemplateBlockList(templateBlockList)
    }, [])

    const getCurrentLesson = () => {
        LessonService.getLesson(lId).then(lesson => {
            setCurrentLesson(lesson);
        })
    }

    /**
     * 
     * @param {string} type: customizable -> same Draggable type can be dropped in Droppable
     * @param {droppableId} source: the DroppableId that the current draggable came from
     * @param {droppableId} destination: the DropppableId that is droppped in
     * @param {draggableId} draggableId: the current draggable's id
     * @param {string} reason: 'CANCEL' | 'DROP'
     */
    const onDragEnd = ({ type, source, draggableId, destination, reason }) => {
        // find the template block that has the dragging Id
        let draggingTemplateBlock = templateBLockList.filter(template => template.id === draggableId)[0];
        if (draggingTemplateBlock) {
            let newDesignBlock;
            if (listDesignBlocks.length) {
                let lastDeisgnBlockInList = listDesignBlocks[listDesignBlocks.length - 1];
                newDesignBlock = new Block('This is a new block', currentLesson.id, null, lastDeisgnBlockInList.id, draggingTemplateBlock.code);
            }
            else {
                newDesignBlock = new Block('This is a new block', currentLesson.id, null, null, draggingTemplateBlock.code);
            }
            let newDesignBlockList = [...listDesignBlocks, newDesignBlock];
            setListDesignBlocks(newDesignBlockList);
        }
    }

    return (
        <LessonContext.Provider value={currentLesson}>
            <DragDropContext
                onDragEnd={onDragEnd}
            >
                <div className="row">
                    <div className="col">
                        <DesignBLockList listDesignBlocks={listDesignBlocks} />
                    </div>
                    <div className="col-auto">
                        <TemplateBlockList templateBLockList={templateBLockList} />
                    </div>
                </div>
            </DragDropContext>
        </LessonContext.Provider>)
}