export function formatNumber(num = 0, gutter = 3) {
    if (Number.isNaN(Number(num))) {
        return "--,--"
    }
    let number = String(num)
    let remain
    let index = number.indexOf(".")
    if (index >= 0) {
        remain = number.slice(index + 1)
        number = number.slice(0, index)
    }
    let num_3 = []
    let result
    let numResult = number
    let reg = new RegExp(`(\\d{${gutter}})$`, "g")
    do {
        result = numResult.match(reg)
        if (result) {
            num_3.unshift(result[0])
            numResult = numResult.slice(0, numResult.lastIndexOf(result[0]))
        } else {
            if (numResult)
                num_3.unshift(numResult)
        }
    } while (result)
    return `${num_3.join(",")}${remain ? "." + remain : ""}`
}
export function percent(number = 0, total, fixed = 2) {
    if (!total) {
        return "--,--"
    }
    try {
        number = parseFloat(number)
        total = parseFloat(total)
    } catch (err) {
        return "--,--"
    }
    if (total === 0) {
        return "--,--"
    }
    return (number / total * 100).toFixed(fixed).toString() + "%"
}
export function encodeData(data) {
    let dataArr = [];
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            if (data[key] !== undefined)
                dataArr.push(key + "=" + encodeURIComponent(data[key]));
        }
    }
    return dataArr.join("&");
}
export function formatDate(date, format = "YYYY-MM-DD HH:mm:ss") {
    if (!date) {
        return "--,--"
    }
    date = new Date(date)
    let year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours(),
        min = date.getMinutes(),
        seconds = date.getSeconds()

    return format.replace("YYYY", year)
        .replace("MM", month >= 10 ? month : "0" + month)
        .replace("DD", day >= 10 ? day : "0" + day)
        .replace("HH", hour >= 10 ? hour : "0" + hour)
        .replace("mm", min >= 10 ? min : "0" + min)
        .replace("ss", seconds >= 10 ? seconds : "0" + seconds)
}
export function age({
    from = new Date(),
    to = new Date(),
    format = "auto"
}) {
    let age = Math.abs(new Date(to) - new Date(from))
    let remain = 0
    let ms = age % 1000
    remain = Math.floor(age / 1000)
    let s = remain % 60
    remain = Math.floor(remain / 60)
    let min = remain % 60
    remain = Math.floor(remain / 60)
    let hour = remain % 24
    remain = Math.floor(remain / 24)
    let day = remain % 30
    remain = Math.floor(remain / 30)
    let month = remain % 12
    remain = Math.floor(remain / 12)
    let year = remain

    if (format === "auto" || format === "ms") {
        return `${year ? year + "年" : ""}${month ? month + "月" : ""}${day ? day + "天" : ""}${hour ? hour + "时" : ""}${min ? min + "分" : ""}${s ? s + "秒" : ""}${ms}毫秒`
    }
    if (format === "year") {
        return `${year}年`
    }
    if (format === "month") {
        return `${year ? year + "年" : ""}${month}月`
    }
    if (format === "day") {
        return `${year ? year + "年" : ""}${month ? month + "月" : ""}${day}天`
    }
    if (format === "hour") {
        return `${year ? year + "年" : ""}${month ? month + "月" : ""}${day ? day + "天" : ""}${hour}时`
    }
    if (format === "min") {
        return `${year ? year + "年" : ""}${month ? month + "月" : ""}${day ? day + "天" : ""}${hour ? hour + "时" : ""}${min}分`
    }
    if (format === "second") {
        return `${year ? year + "年" : ""}${month ? month + "月" : ""}${day ? day + "天" : ""}${hour ? hour + "时" : ""}${min ? min + "分" : ""}${s}秒`
    }
}
export function initThousands(num = 0) {
    return num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
export function getRandomAlphaNum(len) {
    var rdmString = "";
    for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
    return rdmString.substr(0, len);
}
export function mapStatus(status) {
    let map = {
        normal: '正常',
        error: '出错',
        published: '已发布',
        verified: '已验证',
        waitVerify: '待验证',
        delay: '推迟发布',
        publishing: '发布中'
    }
    return map[status] ? map[status] : 'invalid status type';
}

export function objToSingle(object, result, hasObj) {
    for (const key in object) {
        if (typeof object[key] === 'object') {
            if (hasObj) {
                result[key] = object[key];
            }
            objToSingle(object[key], result, hasObj)
        } else {
            result[key] = object[key];
        }
    }
}
export function getCookie(key) {
    let cookieObj = {}
    document.cookie.split(';').forEach(item => {
        let key = item.split('=')[0]
        let val = item.split('=')[1]
        cookieObj[key] = val
    })
    return cookieObj[key]
}

export function localToUTC(timestamp) {
    var d = new Date(timestamp);
    var localTime = d.getTime();
    var localOffset = d.getTimezoneOffset() * 60000; //getTimezoneOffset()返回是以分钟为单位，需要转化成ms
    var utc = localTime + localOffset;
    return utc
}
export function UTCTolocal(timestamp) {
    var d = new Date(timestamp);
    var UTCTime = d.getTime();
    var localOffset = d.getTimezoneOffset() * 60000; //getTimezoneOffset()返回是以分钟为单位，需要转化成ms
    var local = UTCTime - localOffset;
    return local
}

export function getSearch() {
    let search = {}
    if (!window.location.search.split('?')[1]) {
        return search
    }
    let searchArr = window.location.search.split('?')[1].split('&');
    searchArr.forEach(item => {
        let key = item.split('=')[0]
        let val = item.split('=')[1]
        search[key] = window.decodeURIComponent(val);
    })
    return search
}