//积分记账样列

var axios = require('axios');
async function sign_request(data: ChangeData) {
    //请求数据签名
    const msg=JSON.stringify(data)
    const res=await axios.post(
        'http://127.0.0.1:3000/sign',
        { data: msg},
    );

    console.log(JSON.stringify(res.data))

    const signed=res.data  //已签名数据
}
// 给uer_id 3 加1积分
sign_request({
    user_id: 3,
    value: 500,
    currency_id: 1,
    memo: "测试",
    request_id: '47f86111b1ca12ed911af6f1f1114412'
})
