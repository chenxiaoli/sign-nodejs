//积分记账样列

var axios = require('axios');
type ChangeData = {
  user_id: number;
  value: number;
  currency_id: number;
  memo: string;
  request_id: string;
};

async function change(data: ChangeData) {
    //请求数据签名
    const msg=JSON.stringify(data)


    const res=await axios.post(
        'http://localhost:3000/sign',
        { data: msg},
    );

    console.log(JSON.stringify(res.data))

    const signed=res.data  //已签名数据

    //提交动账
    try {
        const ledger_res=await axios.post(
            'https://yicang.sztitan.com/api/v1/nft/ledger/change',
            signed,
        );
        console.log("动账结果",JSON.stringify(ledger_res.data))
    } catch (err){
        console.log("动账结果",JSON.stringify(err.response.data))
    }

}
// 给uer_id 3 加1积分
change({
    user_id: 3,
    value: 1,
    currency_id: 1,
    memo: "测试",
    request_id: '47f867fcbfca11ed960af6f1f6ea4462'
})
