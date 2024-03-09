import React, { useContext } from 'react';
import { Input } from 'antd';
import JsonContext from '../../context/JsonContext';

const { TextArea } = Input;

interface InputComponentProps {
    style?: React.CSSProperties;
}

const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setJsonDate: React.Dispatch<React.SetStateAction<string>>) => {
    // console.log('Change:', e.target.value);
    setJsonDate(e.target.value);
}



const InputComponent: React.FC<InputComponentProps> = ({style}) => {

    const { setJsonDate } = useContext(JsonContext);


    return (
            <TextArea
                style={style}
                showCount
                onChange={(e) => onChangeHandler(e, setJsonDate)}
            />
            )

}


export default InputComponent;