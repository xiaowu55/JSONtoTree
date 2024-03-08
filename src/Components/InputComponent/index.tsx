import React, { useContext } from 'react';
import { Flex, Input } from 'antd';
import JsonContext from '../../context/JsonContext';

const { TextArea } = Input;


const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setJsonDate: React.Dispatch<React.SetStateAction<string>>) => {
    // console.log('Change:', e.target.value);
    setJsonDate(e.target.value);
}

const InputComponent: React.FC = () => {

    const { setJsonDate } = useContext(JsonContext);


    return (
        <Flex vertical gap={32}>
            <TextArea
                showCount
                maxLength={2000}
                onChange={(e) => onChangeHandler(e, setJsonDate)}
                placeholder="disable resize"
                style={{ height: 120, resize: 'none' }}
            />
        </Flex>)
}


export default InputComponent;