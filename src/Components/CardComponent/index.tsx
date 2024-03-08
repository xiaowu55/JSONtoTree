import React, { useContext } from 'react';
import { Card } from 'antd';
import JsonContext from '../../context/JsonContext';


function isJSON(str:string) {
    if (typeof str == 'string') {
        try {
            const obj = JSON.parse(str);
            if (typeof obj == 'object' && obj) {
                console.log('successsful')
                return true;
            } else {
                return false;
            }

        } catch (e) {
            console.log('error：' + str + '!!!' + e);
            return false;
        }
    }
    console.log('It is not a string!')
}


const CardComponent: React.FC = () => {
    const { jsonDate } = useContext(JsonContext);


    const jsonData1 =
    {
        "a": {
            "a.a": "1",
            "a.b": "2",
        },
        "b": "3"
    }

    // for (const [key, value] of Object.entries(jsonData1)) {
    //     if (value instanceof Object)
    //         return (
    //             <Card >
    //                 <p>{`${key}:${value}`}</p>
    //             </Card>)
    // }

    return isJSON(jsonDate) ? (
        <Card>
            <p>{jsonDate.toString()}</p>
        </Card>
    ) : (
        <Card>
            <p>JSON格式不合法</p>
        </Card>
    )
}

export default CardComponent;