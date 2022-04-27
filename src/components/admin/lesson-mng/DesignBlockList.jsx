import { Card } from "antd"
import { useContext, useState } from "react"
import { Droppable } from "react-beautiful-dnd"
import { DesignBlock } from "./DesignBlock"
import { LessonContext } from "./LessonDesign"

export const DesignBLockList = ({ listDesignBlocks }) => {

    const currentLesson = useContext(LessonContext);

    const renderDeisgnBlockList = () => {
        return listDesignBlocks.map((designBlock, index) => {
            return <DesignBlock designBlock={designBlock} key={index} />
        })
    }

    return <Card title={currentLesson.title} style={{ minHeight: '100%' }}>
        <Droppable droppableId="design-list" key={1}>
            {
                (provided, snapshot) => {
                    return (<div style={{minHeight: '500px', maxHeight: '70vh', overflowY: 'auto'}}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {
                            renderDeisgnBlockList()
                        }
                    </div>)
                }
            }
        </Droppable>
    </Card>
}