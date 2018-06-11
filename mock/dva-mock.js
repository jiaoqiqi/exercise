// src/mock/app.js
// 引入 mockjs 库，用于造假数据
var Mock = require('mockjs');

// 造假数据
const data = Mock.mock({
    'user|10': [
        {
            'id': '@id',
            'username': '@name',
            'address': '@city(true)'
        }
    ]
});

export default {

    // 造数据接口，当请求 url="localhost:8000/app/me"，请求方式 method = "GET" 时就会进入这个方法
    [`GET localhost:8000/app/me`] (req, res) {
        const response = {};
        response.data = data;   // 使用 mock 造的假数据
        res.json(response);
    }

};
