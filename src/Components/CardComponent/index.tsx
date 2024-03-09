import React, { useContext } from 'react';
import { Card, Tree } from 'antd';
import JsonContext from '../../context/JsonContext';
import { isJSON } from '../../tools/isJSON';
import { transformData } from '../../tools/JSONtoTree';

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

const CardComponent: React.FC = () => {
    const { jsonDate } = useContext(JsonContext);


    return (<Card>
        {
            isJSON(jsonDate) ?
                renderCard(jsonDate) :
                <p>JSON格式不合法</p>
        }
    </Card>)
}

export default CardComponent;

//测试数据
// const jsonData1 =
// {
//     "a": {
//         "a.a": "1",
//         "a.b": "2"
//     },
//     "b": "3"
// }