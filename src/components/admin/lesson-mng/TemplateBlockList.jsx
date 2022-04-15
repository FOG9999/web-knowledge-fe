import { Card } from "antd";
import { useState } from "react"
import { Droppable } from "react-beautiful-dnd";
import { TemplateBlock } from "./TemplateBlock";

export const TemplateBlockList = () => {
    const [templateBLockList, setTemplateBlockList] = useState([]);

    const renderTemplateBlockList = () => {
        return templateBLockList.map((templateBlock, index) => {
            return <TemplateBlock templateBlock={templateBlock} key={index} />
        })
    }

    return <Card title="Danh sách khối" style={{ width: '100%' }}>
        <Droppable droppableId="template-list">
            {
                (provided, snapshot) => {
                    return (<div
                        ref={provided.innerRef}
                        style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                        {...provided.droppableProps}
                    >
                        {
                            renderTemplateBlockList()
                        }
                    </div>)
                }
            }
        </Droppable>
    </Card>
}