import { LayoutContainer } from "../../layouts/LayoutContainer"
import { LessonManagement } from "../admin/lesson-mng/LessonManagement"

export const LessonMngWrapper = () => {
    return (<LayoutContainer>
        <LessonManagement />
    </LayoutContainer>)
}