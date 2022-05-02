import Prism from "prismjs";
import { Input, Modal, Typography } from "antd";
import { useEffect, useState } from "react";

const { Title } = Typography;

export const DesignBlockSetting = ({ block, visible, handleSave, handleCancel }) => {

    const [stateBlock, setStateBlock] = useState('');

    useEffect(() => {
        setStateBlock(block);
    }, [block]);

    const onKeyDown = (evt) => {        
        if(evt.code === 'Tab'){
            let string = evt.target.value;
            let {selectionStart, selectionEnd} = evt.target;
            string = string.substring(0, selectionStart)+'\t'+string.substring(selectionStart+1, string.length);
            evt.target.selectionStart = evt.target.selectionEnd = selectionStart + 1;
            evt.preventDefault()
            setStateBlock({...stateBlock, content: string});
        }        
    };

    const onChange = (evt) => {
        setStateBlock({...block, content: evt.target.value})
    }

    return (
        <Modal visible={visible} title="Chỉnh sửa block" onOk={() => handleSave(stateBlock)} onCancel={handleCancel}>
            <Input.TextArea value={stateBlock.content} onChange={(e) => onChange(e)} onKeyDown={(e) => onKeyDown(e)} rows={10}/>
        </Modal>
    );
};
