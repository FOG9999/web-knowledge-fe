import { Tabs } from 'antd'
import { LessonDesign } from './LessonDesign'

const { TabPane } = Tabs

export const LessonManagement = () => {
    return (
        <Tabs defaultActiveKey='1'>
            <TabPane tab="Design" key="1">
                <LessonDesign />
            </TabPane>
            <TabPane tab="Preview" key="2">
                <div>
                    Preview tab
                </div>
            </TabPane>
        </Tabs>
    )
}