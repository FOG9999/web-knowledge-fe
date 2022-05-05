import Prism from "prismjs";
import { Input, Modal, Typography } from "antd";
import { useEffect, useRef, useState } from "react";

const { Title } = Typography;

export const DesignBlockSetting = ({ block, visible, handleSave, handleCancel }) => {

    const textareaRef = useRef();

    const [stateBlock, setStateBlock] = useState('');
    const [cursorPosition, setCursorPosition] = useState(0);

    useEffect(() => {
        setStateBlock(block);
    }, [block]);

    useEffect(() => {
        if(textareaRef.current){
            textareaRef.current.resizableTextArea.textArea.selectionStart = textareaRef.current.resizableTextArea.textArea.selectionEnd = cursorPosition + 1;
        }        
    }, [cursorPosition])

    const onKeyDown = (evt) => {        
        if(evt.code === 'Tab'){
            evt.preventDefault()
            let string = evt.target.value;
            let {selectionStart, selectionEnd} = evt.target;
            string = string.substring(0, selectionStart)+'\t'+string.substring(selectionStart, string.length);
            setStateBlock({...stateBlock, content: string});
            setCursorPosition(evt.target.selectionStart);
        }        
    };

    const onChange = (evt) => {
        setStateBlock({...block, content: evt.target.value})
    }

    return (
        <Modal visible={visible} title="Chỉnh sửa block" onOk={() => handleSave(stateBlock)} onCancel={handleCancel}>
            <Input.TextArea ref={textareaRef} value={stateBlock.content} onChange={(e) => onChange(e)} onKeyDown={(e) => onKeyDown(e)} rows={10}/>
        </Modal>
    );
};
