import { CloseOutlined, EditOutlined, SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { useEffect, useState } from 'react';
import Prism from "prismjs";

export const DesignBlock = ({ designBlock }) => {

    const getBlockStyles = () => {
        switch(designBlock.type){
            case 'warn': {
                return {backgroundColor: '#ff8800', color: 'white'};
            }
            case 'success': {
                return {backgroundColor: '#007e33', color: 'white'};
            }
            case 'error': {
                return {backgroundColor: '#cc0000', color: 'white'};
            }
            default: {
                return {backgroundColor: 'inherit'};
            }
        }
    }

    const displayContent = () => {
        switch(designBlock.type){
            case 'code': {
                return <div style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: Prism.highlight(designBlock.content, Prism.languages.extend("js"), "js") }} />
            }
            case 'h1': {
                return <h1>{designBlock.content}</h1>
            }
            case 'h2': {
                return <h2>{designBlock.content}</h2>
            }
            default: {
                return <p>{designBlock.content}</p>
            }
        }
    }

    return <Card className='mb-2' style={getBlockStyles()}>
        <div className='row'>
            <div className="col d-flex">
                <div className='design-block-title border-end' style={{width: '60px'}}>
                    {designBlock.type}
                </div>
                <div className='design-block-content ps-3'>
                    {
                        displayContent()
                    }
                </div>
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