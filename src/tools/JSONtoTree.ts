/**
 * 用于将对象数据转化为TreeNode形式
 */

interface JsonTreeNode {
    [key: string]: JsonTreeNode | string;
}

export function transformData(obj: JsonTreeNode, parentKey = ''): Array<object> {
    const result = [];   // 用于保存结果
    const nodeKey = parentKey;  // 后续将用于构建单钱节点唯一标识符

    for (const key in obj) {
        const currentKey:string = nodeKey ? `${nodeKey}-${key}` : key;
        if (typeof obj[key] === 'object') {
            //如果这个键的值是一个对象就递归
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
