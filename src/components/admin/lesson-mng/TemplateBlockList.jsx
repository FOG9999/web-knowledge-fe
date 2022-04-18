import { Card } from "antd";
import { useEffect, useState } from "react"
import { Droppable } from "react-beautiful-dnd";
import { templateBlockList } from "../../../shared/fake/TemplateBlock";
import { TemplateBlock } from "./TemplateBlock";
import '../../../styles/TemplateBlockList.scss';

export const TemplateBlockList = () => {
    const [templateBLockList, setTemplateBlockList] = useState([]);

    useEffect(() => {
        setTemplateBlockList(templateBlockList)
    }, [])

    const renderTemplateBlockList = () => {
        return templateBLockList.map((templateBlock, index) => {
            return <TemplateBlock templateBlock={templateBlock} key={templateBlock.id} index={index} />
        })
    }

    return <Card className='template-block-list-card' style={{ width: '100%' }}>
        <Droppable droppableId="template-list" isDropDisabled={true}>
            {
                (provided, snapshot) => {
                    return (<div className="mb-2"
                        ref={provided.innerRef}
                        style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                        {...provided.droppableProps}
                    >
                        {
                            renderTemplateBlockList()
                        }
                        {provided.placeholder}
                    </div>)
                }
            }
        </Droppable>
    </Card>
}