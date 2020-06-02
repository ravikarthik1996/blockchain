var Web3 = require('web3');
var web3 = new Web3();
var Accounts = require('web3-eth-accounts');
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8042'));
var accounts = new Accounts('http://localhost:8042');
var fs = require('fs');
//var key1=web3.eth.accounts.decrypt({fs.readFile('~/home/pi/Desktop/Github/Blockchain_dev/MyChains/node/keystore/UTC--2019-11-05T16-31-08.501251729Z--adff829b43c9e8c7f04906657dac2d2d8d6d8016')},'ipadsony2014');
//var en=web3.eth.accounts.encrypt('0xadff829b43c9e8c7f04906657dac2d2d8d6d8016','ipadsony2014');
//var key1=web3.eth.accounts.decrypt(en,'ipadsony2014');
var key=web3.eth.accounts.decrypt({
	"address":"adff829b43c9e8c7f04906657dac2d2d8d6d8016",
	"crypto":{
		"cipher":"aes-128-ctr",
		"ciphertext":"0a613c26e6fae050182c99208342af6b80c2ba255fec84eb72c950b33e501390",
		"cipherparams":{"iv":"7091d2112e40c076a011fa745a25ccc7"},
		"kdf":"scrypt",
		"kdfparams":{
			"dklen":32,
			"n":262144,
			"p":1,
			"r":8,
			"salt":"40c7150ea24fc22278faff972755902b5897e373b1047153c7d9181f99a20223"
		},
		"mac":"c4ac475c587a1f7432391788a311a22503c8615414e711e0e00adc2b066cfced"
		},
	"id":"025ef408-df1f-4412-8516-25cef54e5c6d",
	"version":3
}, 'ipadsony2014');

console.log(key1);
console.log(key.privateKey);
//var account=web3.eth.accounts.privateKeyToAccount("0xadff829b43c9e8c7f04906657dac2d2d8d6d8016");
//console.log(account.address);
//console.log(keystore.toString());
//const d = web3.eth.accounts.decrypt(keystore, 'ipadsony2014');
//console.log(d.privateKey);
