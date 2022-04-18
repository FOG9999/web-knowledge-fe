import { DragDropContext } from "react-beautiful-dnd"
import { DesignBLockList } from "./DesignBlockList"
import { TemplateBlockList } from "./TemplateBlockList"

export const LessonDesign = () => {
    return <DragDropContext>
        <div className="row">
            <div className="col">
                <DesignBLockList />
            </div>
            <div className="col-auto">
                <TemplateBlockList />
            </div>
        </div>
    </DragDropContext>
}