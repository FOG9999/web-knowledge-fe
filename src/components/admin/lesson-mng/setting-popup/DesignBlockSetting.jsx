import Prism from "prismjs";
import { Input, Modal, Typography } from "antd";
import { useEffect, useState } from "react";

const { Title } = Typography;

export const DesignBlockSetting = ({ block, visible, handleSave, handleCancel }) => {

    const [stateBlock, setStateBlock] = useState('');

    useEffect(() => {
        setStateBlock(block);
    }, [block]);

    const onChange = (evt) => {
        let string = evt.target.value;
        if(evt.code === 'Tab'){
            let {selectionStart, selectionEnd} = evt.target;
            string = string.substring(0, selectionStart)+'\t'+string.substring(selectionStart+1, string.length)
        }
        console.log(string);
        setStateBlock({...stateBlock, content: string});
    };

    return (
        <Modal visible={visible} title="Chỉnh sửa block" onOk={() => handleSave(stateBlock)} onCancel={handleCancel}>
            <Input.TextArea value={stateBlock.content} onKeyDown={(e) => onChange(e)} rows={10}/>
        </Modal>
    );
};
