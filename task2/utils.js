// 判断arr是否为一个数组，返回一个bool值
function isArrray(arr) {
    return arr instanceof Array;
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(func) {
    return func instanceof Function;
}

//　深度克隆
function cloneObject(src) {
    var target;

    for(var property in src) {
        if(src.hasOwnProperty(property)) {
            target[property] = typeof src[property] === 'object'
                ? cloneObject(src[property])
                : src[property];
        }
    }

    return target;
}

// 对数组进行去重操作
//方法一
function uniqArray(arr) {
    var result = [];

    for(var i = 0; i < arr.length; i++) {
        if(result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }

    return result;
}

//方法二： 效率不高
//function uniqArray(arr) {
//  return arr.filter(function (item, index, self) {
//      return self.indexOf(item) === index;
//  });
//}

//方法三：使用哈希表
//function uniqArray(arr) {
//    var obj = {};
//    return arr.filter(function (item) {
//        return obj.hasOwnProperty(item) ? false : obj[item] = true ;
//    });
//}



// 实现一个简单的trim函数
function simpleTrim(str) {
    return str.replace( /\s+/g, "" );
}

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    for(var i = 0 ; i < arr.length; i++) {
        fn(arr[i], i);
    }
}

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var count = 0;

    for(var i in obj) {
        count++;
    }

    return count;
}

// 判断是否为邮箱地址
function isEmail(emailStr) {
    return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+$/.test(emailStr);
}

// 判断是否为手机号
function isMobilePhone(phone) {
    return /^\d{11}$/.test(phone);
}



