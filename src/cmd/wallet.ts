import ethers =require("ethers");



async function wallet(){
    const signer =  ethers.Wallet.createRandom()
    const address=await signer.getAddress()
    const privateKey=signer.privateKey
    console.log("address:",address)
    console.log("privateKey:",privateKey)
}

wallet()