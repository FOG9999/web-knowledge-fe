import { DragDropContext } from "react-beautiful-dnd"
import { DesignBLockList } from "./DesignBlockList"

export const LessonDesign = () => {
    return <DragDropContext>
        <div className="row">
            <div className="col-8">
                <DesignBLockList />
            </div>
            <div className="col-4">

            </div>
        </div>
    </DragDropContext>
}