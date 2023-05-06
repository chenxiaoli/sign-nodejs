**环境**  
ubuntu，nodejs

**安装**
1. 在代码目录下运行命令： yarn  

**使用**  
1. 配置钱包私钥和地址 可以使用命令 yarn wallet 生成一个钱包，然后把生成的钱包(privateKey,address)配置在constants.ts文件里。
2. 运行http守护程序 yarn serve  

**运行**  
   yarn serve  


**api:**
**请求交易签名**
path: /sign
method: post
request body: {data:"string,签名的数据"}


curl -H "Content-Type: application/json" -X POST -d '{"data": "123"}' "http://127.0.0.1:3000/sign"