/**
 * 用于将对象数据转化为TreeNode形式
 */

interface JsonTreeNode {
    [key: string]: JsonTreeNode | string;
}

export function transformData(obj: JsonTreeNode, parentKey = ''): Array<object> {
    const result = [];
    const nodeKey = parentKey;

    for (const key in obj) {
        const currentKey:string = nodeKey ? `${nodeKey}-${key}` : key;
        if (typeof obj[key] === 'object') {
            result.push({
                title: key,
                key: currentKey,
                children: transformData(obj[key] as JsonTreeNode, currentKey)
            });
        } else {
            result.push({
                title: `${key}: ${obj[key]}`,
                key: currentKey
            });
        }
    }
    console.log(result);
    return result;
}
