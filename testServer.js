const express = require("express");
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.post("/REST/users", (req, res) => {
    let list = [
        {
            mail: "wzhtest7@zaoshu.io",
            create_at: "2018-05-28T05:40:40.504Z",
            expire_at: new Date(),
            id: 17,
            name: "wzhtest4",
            type: "paid",
            dataset_expired: true,
            status: 'normal'
        }, {
            mail: "wzhtest7@zaoshu.io",
            create_at: "2018-05-28T05:40:40.504Z",
            expire_at: new Date(),
            id: 1,
            name: "wzhtest4",
            type: "internal",
            dataset_expired: false,
            status: 'normal'
        }, {
            mail: "wzhtest7@zaoshu.io",
            create_at: "2018-05-28T05:40:40.504Z",
            expire_at: new Date(),
            id: 12,
            name: "wzhtest4",
            type: "trial",
            dataset_expired: false,
            status: 'blocked'
        }, {
            mail: "wzhtest7@zaoshu.io",
            create_at: "2018-05-28T05:40:40.504Z",
            expire_at: (new Date() / 1000) - 8 * 24 * 60 * 60,
            id: 13,
            name: "wzhtest4",
            type: "blocked",
            dataset_expired: false,
            status: 'normal'
        }
    ]
    res.send({
        code: 0,
        data: {
            count: list.length,
            list: list
        }
    })
})
app.get("/REST/users/search", (req, res) => {
    res.send({
        code: 0,
        data: {
            list: [{
                mail: "wzhtest7@zaoshu.io",
                create_at: "2018-05-28T05:40:40.504Z",
                id: 17,
                name: "wzhtest4",
                type: "paid"
            }, {
                mail: "wzhtest7@zaoshu.io",
                create_at: "2018-05-28T05:40:40.504Z",
                id: 1,
                name: "wzhtest4",
                type: "internal"
            }, {
                mail: "wzhtest7@zaoshu.io",
                create_at: "2018-05-28T05:40:40.504Z",
                id: 12,
                name: "wzhtest4",
                type: "trail"
            }, {
                mail: "wzhtest7@zaoshu.io",
                create_at: "2018-05-28T05:40:40.504Z",
                id: 13,
                name: "wzhtest4",
                type: "blocked"
            }]
        }
    })
})

app.get("/REST/user", (req, res) => {

    res.send({
        code: 0,
        data: {
            "name": "wzh",
            "id": req.query.id,
            "email": "wzh@zaoshu.io",
            "mobile": "13161987838",
            "company": "zaoshu",
            "title": "web",
            "type": '内部账号',
            "status": "on",
            "region": "US",
            "effect_at": '2018-08-05T05:40:40.504Z',
            "expired_at": "2018-09-28T05:40:40.504Z",
            "datasets": [
                {
                    country: "All",
                    expired: false,
                    accessed: 66,
                    total: 120,
                },
                {
                    country: "US",
                    expired: true,
                    accessed: 15,
                    total: 30,
                },
                {
                    country: "HK",
                    expired: false,
                    accessed: 10,
                    total: 30,
                },
                {
                    country: "SH",
                    expired: true,
                    accessed: 22,
                    total: 30,
                },
                {
                    country: "SZ",
                    expired: false,
                    accessed: 12,
                    total: 30,
                }
            ]
        }
    })
})
app.post("/REST/user", (req, res) => {

    res.send({
        code: 0,
        data: {
            id: 2,
            name: "tset@zaoshu.io",
            password: "w292jwqe"
        }
    })
})
app.put("/REST/user", (req, res) => {

    res.send({
        code: 0,
        data: {

        }
    })
})
app.delete("/REST/user", (req, res) => {

    res.send({
        code: 0,
        data: {

        }
    })
})
app.post("/REST/user/resetPassword", (req, res) => {

    res.send({
        code: 0,
        data: {
            id: 2,
            name: "tset@zaoshu.io",
            password: "w292jwqe"
        }
    })
})



app.post("/REST/datasets", (req, res) => {
    let list = [
        {
            dataset: "HTHT",
            country: "HK",
            status: 1, //0
            expired_at: "2020-05-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "HK",
            status: 1, //0
            expired_at: "2020-05-28T05:40:40.504Z",
            effect_at: "2016-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "SH",
            status: 1, //0
            expired_at: "2018-06-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "SZ",
            status: 1, //0
            expired_at: "2020-05-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "SZ",
            status: 1, //0
            expired_at: "2020-05-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "US",
            status: 1, //0
            expired_at: "2020-05-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "US", status: 1, //0
            expired_at: "2020-05-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "US", status: 1, //0
            expired_at: "2020-05-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "US", status: 1, //0
            expired_at: "2020-05-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "US", status: 1, //0
            expired_at: "2020-05-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "US", status: 0, //0
            expired_at: "2020-05-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "US", status: 1, //0
            expired_at: "2019-05-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "US", status: 0, //0
            expired_at: "2019-05-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "US", status: 0, //0
            expired_at: "2019-05-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "US", status: 0, //0
            expired_at: "2019-05-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "US", status: 0, //0
            expired_at: "2019-05-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "US", status: 0, //0
            expired_at: "2019-05-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "US", status: 0, //0
            expired_at: "2019-05-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "US", status: 0, //0
            expired_at: "2019-05-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "US", status: 0, //0
            expired_at: "2019-05-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "HTHT",
            country: "SZ", status: 0, //0
            expired_at: "2019-05-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }, {
            dataset: "YY",
            country: "US", status: 0, //0
            expired_at: "2018-06-28T05:40:40.504Z",
            effect_at: "2018-05-28T05:40:40.504Z"
        }
    ]

    let { page, limit, country } = req.query;
    if (country && country !== "All") {
        list = list.filter(item => item.country === country)
    }
    let count = list.length;
    let sublist = list.slice((page - 1) * limit, page * limit);
    res.send({
        code: 0,
        data: {
            count: count,
            expired: true,
            list: sublist
        }
    })
})


app.put("/REST/datasets", (req, res) => {
    res.send({
        code: 0,
        data: {}
    })
})
app.post('/REST/datasets/overview', (req, res) => {
    res.send({
        code: 0,
        data:
            [
                { country: "US", expired: false, total: 9, accessed: 9 },
                { country: "SH", expired: false, total: 28, accessed: 28 },
                { country: "SZ", expired: false, total: 23, accessed: 23 },
                { country: "All", expired: false, total: 60, accessed: 60 }
            ]
    })
})

//数据源统计 获取总数据源数
app.get('/REST/statistics/datasets/overview', (req, res) => {
    res.send({
        code: 0,
        data:
            [
                { country: "US", count: 9 },
                { country: "SH", count: 28 },
                { country: "SZ", count: 23 },
                { country: "All", count: 60 }
            ]
    })
})



//数据源统计 获取数据源列表
// let body6 = {
//     country: 'All', //US, HK,SH, SZ
//     page: 1,
//     limit: 10,
//     sort: {
//         account: 'increase', //decrease
//         times: 'increase', //decrease
//     }
// }
app.post('/REST/statistics/datasets', (req, res) => {
    let list = [
        {
            dataset_name: 'HTHT',
            Icon: 'HTHT',
            count: 8000,
        }, {
            dataset_name: 'YY',
            Icon: 'YY',
            count: 8000,
        }, {
            dataset_name: 'HTHT',
            Icon: 'HTHT',
            count: 8000,
        }, {
            dataset_name: 'HTHT',
            Icon: 'HTHT',
            count: 8000,
        }, {
            dataset_name: 'HTHT',
            Icon: 'HTHT',
            count: 8000,
        }, {
            dataset_name: 'HTHT',
            Icon: 'HTHT',
            count: 8000,
        }, {
            dataset_name: 'HTHT',
            Icon: 'HTHT',
            count: 8000,
        }, {
            dataset_name: 'HTHT',
            Icon: 'HTHT',
            count: 8000,
        }, {
            dataset_name: 'HTHT',
            Icon: 'HTHT',
            count: 8000,
        }, {
            dataset_name: 'HTHT',
            Icon: 'HTHT',
            count: 8000,
        }, {
            dataset_name: 'HTHT',
            Icon: 'HTHT',
            count: 8000,
        }
    ]
    let { page, limit, country } = req.body;
    if (country && country !== "ALL") {
        list = list.filter(item => item.country === country)
    }
    let count = list.length;
    let sublist = list.slice((page - 1) * limit, page * limit);
    res.send({
        code: 0,
        data: {
            count,
            list: sublist
        },
        msg: ''
    })
})

app.post('/REST/statistics/datasets/search', (req, res) => {
    let list = [
        {
            dataset: 'HTHT',
            count: 8000,
        }, {
            dataset: 'YY',
            count: 8000,
        }, {
            dataset: 'HTHT',
            count: 8000,
        }, {
            dataset: 'HTHT',
            count: 8000,
        }, {
            dataset: 'HTHT',
            count: 8000,
        }, {
            dataset: 'HTHT',
            count: 8000,
        }, {
            dataset: 'HTHT',
            count: 8000,
        }, {
            dataset: 'HTHT',
            count: 8000,
        }, {
            dataset: 'HTHT',
            count: 8000,
        }, {
            dataset: 'HTHT',
            count: 8000,
        }, {
            dataset: 'HTHT',
            count: 8000,
        }
    ]
    let { page, limit, country } = req.body;
    if (country && country !== "All") {
        list = list.filter(item => item.country === country)
    }
    let count = list.length;
    let sublist = list.slice((page - 1) * limit, page * limit);
    res.send({
        code: 0,
        data: {
            count,
            list: sublist
        },
        msg: ''
    })
})


//数据源统计 获取单个数据源指标列表
// let body7 = {
//     datasetId: 'HTHT',
//     leyword: 'HTHT.shcljsl',
//     page: 1,
//     limit: 10
// }
app.post('/REST/statistics/datasets/figures', (req, res) => {

    let list = [
        {
            title: '',
            figure_id: 'eabses',
            count: 8000,
            last_time: 1534744211
        }, {
            title: 'Club',
            figure_id: 'eabses',
            count: 8000,
            last_time: 1534744211
        }, {
            title: 'Hotels',
            figure_id: 'eabses',
            count: 8000,
            last_time: 1534744211
        }, {
            title: 'Hotels',
            figure_id: 'eabses',
            count: 8000,
            last_time: 1534744211
        }, {
            title: 'Hotels',
            figure_id: 'eabses',
            count: 8000,
            last_time: 1534744211
        }, {
            title: 'Hotels',
            figure_id: 'eabses',
            count: 8000,
            last_time: 1534744211
        }, {
            title: 'Hotels',
            figure_id: 'eabses',
            count: 8000,
            last_time: 1534744211
        }, {
            title: 'Hotels',
            figure_id: 'eabses',
            count: 8000,
            last_time: 1534744211
        },
    ]

    let { page, limit, keyword } = req.body;
    if (keyword && keyword !== "") {
        list = list.filter(item => item.figure_name === keyword)
    }
    let count = list.length;
    let sublist = list.slice((page - 1) * limit, page * limit);

    res.send({
        code: 0,
        data: {
            count,
            list: sublist
        },
        msg: ''
    })
})

app.post('/REST/statistics/datasets/figures/search', (req, res) => {

    let list = [
        {
            figure_name: 'Hotels',
            figure: 'eabses',
            count: 8000,
            last_time: 1534744211
        }, {
            figure_name: 'Club',
            figure: 'eabses',
            count: 8000,
            last_time: 1534744211
        }, {
            figure_name: 'Hotels',
            figure: 'eabses',
            count: 8000,
            last_time: 1534744211
        }, {
            figure_name: 'Hotels',
            figure: 'eabses',
            count: 8000,
            last_time: 1534744211
        }, {
            figure_name: 'Hotels',
            figure: 'eabses',
            count: 8000,
            last_time: 1534744211
        }, {
            figure_name: 'Hotels',
            figure: 'eabses',
            count: 8000,
            last_time: 1534744211
        }, {
            figure_name: 'Hotels',
            figure: 'eabses',
            count: 8000,
            last_time: 1534744211
        }, {
            figure_name: 'Hotels',
            figure: 'eabses',
            count: 8000,
            last_time: 1534744211
        },
    ]

    let { page, limit, keyword } = req.body;
    if (keyword && keyword !== "") {
        list = list.filter(item => item.figure_name === keyword)
    }
    let count = list.length;
    let sublist = list.slice((page - 1) * limit, page * limit);

    res.send({
        code: 0,
        data: {
            count,
            list: sublist
        },
        msg: ''
    })
})

//数据源统计 获取单个数据源单个指标用户查看列表
// let body7 = {
//     figureId: 'bfa4db3e',
//     daterange: '1534744211,1534744211',
//     page: 1,
//     limit: 10
// }
app.post('/REST/statistics/datasets/figures/logs', (req, res) => {

    let list = [
        {
            total: 22,
            userName: "zh",
            last_time: 1526860800,
            count: 33,
            action: ["dateType", "dateRange", "filter", "download"]
        },
        {
            total: 22,
            userName: "zh",
            last_time: 1526860800,
            count: 33,
            action: ["dateType", "dateRange", "filter", "download"]
        },
        {
            total: 22,
            userName: "zh",
            last_time: 1526860800,
            count: 33,
            action: ["dateType", "dateRange", "download", "showSpecialDescription"]
        },
        {
            total: 22,
            userName: "zh",
            last_time: 1526860800,
            count: 33,
            action: ["dateType", "filter", "download", "showSpecialDescription"]
        },
        {
            total: 22,
            userName: "zh",
            last_time: 1526860800,
            count: 33,
            action: ["dateType", "dateRange", "filter", "download", "showSpecialDescription"]
        },
        {
            total: 22,
            userName: "zh",
            last_time: 1526860800,
            count: 33,
            action: ["dateRange", "filter", "download", "showSpecialDescription"]
        },
    ]
    let { page, limit } = req.body;
    let count = list.length;
    let sublist = list.slice((page - 1) * limit, page * limit);
    res.send({
        code: 0,
        data: {
            count,
            list: sublist
        },
        msg: ''
    })
})


//用户行为统计

// let body7 = {
//     userType: 'trial',
//     daterange: '1534744211,1534744211',
//     page: 1,
//     limit: 10
// }

app.post('/REST/statistics/users', (req, res) => {
    let list = [
        {
            id: 1,
            name: "zh",
            Account: 'wangzhiheng@zaoshu.io',
            type: 'trial',
            effect_at: 1534744211,
            last_time: 1534744211
        }, {
            id: 2,
            name: "zh",
            Account: 'wangzhiheng@zaoshu.io',
            type: 'paid',
            effect_at: 1534744211,
            last_time: 1534744211
        }, {
            id: 3,
            name: "zh",
            Account: 'wangzhiheng@zaoshu.io',
            type: 'blocked',
            effect_at: 1534744211,
            last_time: 1534744211
        }, {
            id: 1,
            name: "zh",
            Account: 'wangzhiheng@zaoshu.io',
            type: 'trial',
            effect_at: 1534744211,
            last_time: 1534744211
        }, {
            id: 1,
            name: "zh",
            Account: 'wangzhiheng@zaoshu.io',
            type: 'trial',
            effect_at: 1534744211,
            last_time: 1534744211
        }, {
            id: 1,
            name: "zh",
            Account: 'wangzhiheng@zaoshu.io',
            type: 'trial',
            effect_at: 1534744211,
            last_time: 1534744211
        }, {
            id: 1,
            name: "zh",
            Account: 'wangzhiheng@zaoshu.io',
            type: 'trial',
            effect_at: 1534744211,
            last_time: 1534744211
        }, {
            id: 1,
            name: "zh",
            Account: 'wangzhiheng@zaoshu.io',
            type: 'trial',
            effect_at: 1534744211,
            last_time: 1534744211
        }
    ]
    let { page, limit } = req.body;
    let count = list.length;
    let sublist = list.slice((page - 1) * limit, page * limit);
    res.send({
        code: 0,
        data: {
            count: count,
            list: sublist
        },
        msg: ''
    })
})


// let body7 = {
//     userId: 'wangzhiheng@zaoshu.io',
//     keyword: '',
//     daterange: '1534744211,1534744211',
//     page: 1,
//     limit: 10
// }
app.post('/REST/statistics/users/action', (req, res) => {
    let list = [
        {
            last_time: 1534744211,
            dataset: 'HTHT',
            figure: 'skfdjjk',
            action: ["dateType", "dateRange", "download", "showSpecialDescription"]
        }, {
            last_time: 1534744211,
            dataset: 'HTHT',
            figure: 'skfdjjk',
            action: ["dateType", "filter", "download", "showSpecialDescription"]
        }, {
            last_time: 1534744211,
            dataset: 'HTHT',
            figure: 'skfdjjk',
            action: ["dateType", "dateRange", "filter", "showSpecialDescription"]
        }, {
            last_time: 1534744211,
            dataset: 'HTHT',
            figure: 'skfdjjk',
            action: ["dateType", "dateRange", "filter", "download",]
        }, {
            last_time: 1534744211,
            dataset: 'HTHT',
            figure: 'skfdjjk',
            action: ["dateRange", "filter", "download", "showSpecialDescription"]
        },
    ]
    let { page, limit } = req.body;
    let count = list.length;
    let sublist = list.slice((page - 1) * limit, page * limit);
    res.send({
        code: 0,
        data: {
            count: count,
            list: sublist
        },
        msg: ''
    })
})
app.post('/REST/statistics/users/action/search', (req, res) => {
    let list = [
        {
            last_time: 1534744211,
            dataset: 'HTHT',
            figure: 'skfdjjk',
            action: ["dateType", "dateRange", "download", "showSpecialDescription"]
        }, {
            last_time: 1534744211,
            dataset: 'HTHT',
            figure: 'skfdjjk',
            action: ["dateType", "filter", "download", "showSpecialDescription"]
        }, {
            last_time: 1534744211,
            dataset: 'HTHT',
            figure: 'skfdjjk',
            action: ["dateType", "dateRange", "filter", "showSpecialDescription"]
        }, {
            last_time: 1534744211,
            dataset: 'HTHT',
            figure: 'skfdjjk',
            action: ["dateType", "dateRange", "filter", "download",]
        }, {
            last_time: 1534744211,
            dataset: 'HTHT',
            figure: 'skfdjjk',
            action: ["dateRange", "filter", "download", "showSpecialDescription"]
        },
    ]
    let { page, limit } = req.body;
    let count = list.length;
    let sublist = list.slice((page - 1) * limit, page * limit);
    res.send({
        code: 0,
        data: {
            count: count,
            list: sublist
        },
        msg: ''
    })
})

app.listen(5001, () => {
    console.log('The test server is on port 5001')
})