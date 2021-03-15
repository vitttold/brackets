module.exports = function check(str, bracketsConfig) {
    let newArr = bracketsConfig.map((item) => item.join(""));
    let newArr2 = [];
    for (let i = 0; i < newArr.length; i++) {
        if (str.includes(newArr[i])) {
           // newArr2 = newStr.push(newArr[i]);
             str = str.replace(newArr[i], "");
             i = -1;
        }
    }

    if (str.length  === 0) {
        return true;
    }
    return false;
};
