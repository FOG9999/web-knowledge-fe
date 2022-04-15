import { Draggable } from "react-beautiful-dnd"

export const TemplateBlock = ({
    templateBlock, index
}) => {
    return <Draggable draggableId={templateBlock.id} index={index}>
        {
            (provided, snapshot) => (<div
                ref={provided.innerRef}
                style={{ backgroundColor: snapshot.isDragging ? 'blue' : 'grey' }}
                {...provided.droppableProps}
            >
                <div className="template-block">
                    <div className="p-2">
                        <img src={templateBlock.img} alt="" width={200} height={200} />
                    </div>
                    <div className="template-block-title">
                        <span>
                            <b>{templateBlock.title}</b>
                        </span>
                    </div>
                </div>
            </div>)
        }
    </Draggable>
}