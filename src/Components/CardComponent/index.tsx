import React, { useContext } from 'react';
import { Card, Tree } from 'antd';
import JsonContext from '../../context/JsonContext';
import { isJSON } from '../../tools/isJSON';
import { transformData } from '../../tools/JSONtoTree';

interface CardComponentProps {
    style?: React.CSSProperties;
}

function renderCard(data: string) {
    const obj = JSON.parse(data);
    const result = transformData(obj)
    return (
        <Tree
            showLine
            defaultExpandAll={true}
            treeData={result}
        />
    )
}

const CardComponent: React.FC<CardComponentProps> = ({style}) => {
    const { jsonDate } = useContext(JsonContext);


    return (<Card
        style={style}
        title={'RESULT'}>
        {
            isJSON(jsonDate) ?
                renderCard(jsonDate) :
                <p>JSON格式不合法</p>
        }
    </Card>)
}

export default CardComponent;

