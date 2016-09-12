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


// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    element.className = element.className
                        ? element.className + ' ' + newClassName
                        : newClassName;
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    var reg = new RegExp('(\\s|^)' + oldClassName + '(\\s|$)');
    element.className = element.className.replace(reg, ' ').replace(/(^\s*)|(\s*$)/g,'');
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    return element.parentNode === siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
// http://www.ruanyifeng.com/blog/2009/09/find_element_s_position_using_javascript.html
function getPosition(element) {
    var postion = {};
    postion.x = element.getBoundingClientRect().left;
    postion.y = element.getBoundingClientRect().top;
    return postion;
}

// 实现一个简单的Query
function $(selector) {
    var id = selector.match(/#\S+/g)[0];
    var tag = selector.match(/\S+/g)[0];

    var result = getElementById(id);

    return result;
}

// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    if(element.addEventListener) {
        //DOM2级处理
        element.addEventListener(event, listener, false);
    }else if(element.attachEvent) {
        //IE事件处理
        element.attachEvent('on' + event, listener);
    }else{
        //DOM0级
        element['on'+event] =  listener;
    }
}

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    if(element.addEventListener) {
        //DOM2级处理
        element.removeEventListener(event, listener, false);
    }else if(element.attachEvent) {
        //IE事件处理
        element.detachEvent('on' + event, listener);
    }else{
        //DOM0级
        element['on'+event] =  null;
    }
}

function preventDefault(event) {
    if(event.preventDefault) {
        event.preventDefault();
    }else{
        event.returnValue = false;
    }
}

function stopPropagation(event) {
    if(event.stopPropagation) {
        event.stopPropagation();
    }else {
        event.cancelBubble = true;
    }
}

function getEvent(event) {
    return event? event: window.event;
}

function getElement(event) {
    return event.target || event.srcElement;
}

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    // your implement
    addEvent(element,'click',listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    // your implement
    addEvent(element,'keydown', function (e) {
        var keycode;
        if(window.event) {
            keycode = e.keyCode;
        }else if(e.which) {
            keycode = e.which;
        }else {
            return;
        }

        if(keycode === 13) {
            listener();
        }
    });
}

// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    // your implement
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    // your implement
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=cookieName+ "=" +escape(cookieValue)+
        ((expiredays === null) ? "" : ";expires="+exdate.toGMTString());
}

// 获取cookie值
function getCookie(cookieName) {
    // your implement
    var cookieObj={};
    var cookieSplit=[];
    // 以分号（;）分组
    var cookieArr=document.cookie.split(";");
    for(var i=0,len=cookieArr.length;i<len;i++) {
        if(cookieArr[i]) {
            cookieSplit=cookieArr[i].split("=");
            cookieObj[simpleTrim(cookieSplit[0])]=simpleTrim(cookieSplit[1]);
        }
    }
    return cookieObj[cookieName];
}

// 封装ajax
function ajax(url, options) {
    // your implement
}

// 比较两个对象是否相等
function objectEquals(x, y) {
    if (x === null || x === undefined || y === null || y === undefined) { return x === y; }
    if (x.constructor !== y.constructor) { return false; }
    if (x instanceof Function) { return x === y; }
    if (x instanceof RegExp) { return x === y; }
    if (x === y || x.valueOf() === y.valueOf()) { return true; }
    if (Array.isArray(x) && x.length !== y.length) { return false; }
    if (x instanceof Date) { return false; }
    if (!(x instanceof Object)) { return false; }
    if (!(y instanceof Object)) { return false; }

    var p = Object.keys(x);
    return Object.keys(y).every(function(i) { return p.indexOf(i) !== -1; }) &&
        p.every(function(i) { return objectEquals(x[i], y[i]); });
}

