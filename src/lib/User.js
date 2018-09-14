
import { getCookie, encodeData } from "./unit";
import $ from './http'


export default {
    getLoginStatus: () => {
        let key = "teemo";
        return getCookie(key) ? !!getCookie(key) : false;
    },
    login: (username, password, cb) => {
        $("/REST/login", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded"
            }),
            body: encodeData({
                username,
                password
            })
        }).then(cb ? cb : null)
    },
    logout: (cb) => {
        $("/REST/logout", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded"
            })
        }).then(cb ? cb : null)
    }
}