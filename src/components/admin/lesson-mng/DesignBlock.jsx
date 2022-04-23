import { CloseOutlined, EditOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { useEffect, useState } from 'react';
import { Block } from '../../models/Block';

export const DesignBlock = ({ designBlock }) => {

    return <Card className='mb-2'>
        <div className='row'>
            <div className="col">
                {
                    designBlock.content
                }
            </div>
            <div className='col-auto row'>
                <span className="col">
                    <EditOutlined />
                </span>
                <span className="col">
                    <SettingOutlined />
                </span>
                <span className="col">
                    <CloseOutlined />
                </span>
            </div>
        </div>

    </Card>
}