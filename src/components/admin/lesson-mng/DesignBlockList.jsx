import { Card } from "antd"
import { useState } from "react"
import { Droppable } from "react-beautiful-dnd"
import { DesignBlock } from "./DesignBlock"

export const DesignBLockList = ({
    lessonTitle
}) => {

    const [deisgnBlockList, setDesignBlockList] = useState([])

    const renderDeisgnBlockList = () => {
        return deisgnBlockList.map((designBlock, index) => {
            return <DesignBlock designBlock={designBlock} key={index} />
        })
    }

    return <Card title={lessonTitle}>
        <Droppable droppableId="design-list">
            {
                (provided, snapshot) => {
                    return (<div
                        ref={provided.innerRef}
                        style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
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