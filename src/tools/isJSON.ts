/**
 * 
 * @param str 字符串
 * @returns boolean
 */
//如果JSON.parse能够转换成功；
//并且转换后的类型为object 且不等于 null
//那么这个字符串就是JSON格式的字符串。
export function isJSON(str:string) {
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