
let Promise = require('promise');
export default (...argv) => {
    argv[1] = {
        ...argv[1],
        credentials: 'include'
    }
    return new Promise(async (reslove, reject) => {
        let res = await fetch(...argv)
        try {
            let resp = await res.json()
            let { code, data, message, errcode, errmsg, msg } = resp
            if (Number(code) === 0 || Number(errcode) === 0) {
                reslove(data)
            } else {
                console.log(errmsg || msg)
                reject({ code, message, resp, headers: res.headers })
            }
        } catch (error) {
            //处理非200错误
            reject(error)
        }
    })
}
