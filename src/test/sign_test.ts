import { Wallet } from 'ethers';
import { hashMessage } from '../utils';

const privateKey="0x9fec7c421c04542df75562dd6c28444fd10f3c6759c12627ddc0f9d29b0bc933"
const address="0x181E2FBa631cE44081ca2BC3eA59Eac71A1eE7d8"


async function test(){
const sig="0x8f45bd43790895399be25a155891ff583b2d36787d06d13e35090248504d84cb29e5899bdf2b7b32dc15e4f293dbebd362081a6d4fa75c280b0c9cca1202c4861b"


const msg="eyJ1c2VyX2lkIjozLCJ2YWx1ZSI6MSwiY3VycmVuY3lfaWQiOjEsIm1lbW8iOiLmtYvor5UiLCJyZXF1ZXN0X2lkIjoiNDdmODY3ZmNiZmNhMTFlZDk2MGFmNmYxZjZlYTQ0NjIifQ=="
// const dd=ethers.getBytes(msg)
const signer=new Wallet(privateKey)

const signature= await signer.signMessage(msg)


if(signature==sig){
    console.log("verfied")
}
console.log(signature)

}

test()