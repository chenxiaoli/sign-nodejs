

import express = require('express');
import { privateKey } from './constants';
import { Wallet } from 'ethers';
const app: express.Application = express();
const port = 3000;
const hostname = '127.0.0.1';


app.use(express.json()); // for parsing application/json

app.get('/', (req: any, res: any) => res.send('Hello World!'));

app.post('/sign', async function (req: any, res: any) {
  const data=req.body["data"]
  const signer=new Wallet(privateKey)
  const signature = await signer.signMessage(data);
  res.send(JSON.stringify({data,signature}));


});
app.listen(port, hostname, () => console.log(`Example app listening on port ${port}!`));