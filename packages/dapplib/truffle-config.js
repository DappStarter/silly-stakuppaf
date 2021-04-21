require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inflict enter brand venture strong riot mad huge idea loan flower ghost'; 
let testAccounts = [
"0xc77f26c5e5c869ebd3741bfa5f1dfdab55253888a4b7c54299b02a6518b0a6bf",
"0x1634d5da2345d2ba552011051417006db8100116f11d374c07cc7a32954e1ad7",
"0x07450550433bbcdc499276a833a97ffe6933a2fab9af43607cc71788e50f51d7",
"0x66d9111a52d3e598e137e3bfde6ec951f2dda733b5b72ece3028c9032fe10abd",
"0xdf358e3804584e6d546810316bc42f6cd267706e88f1ac779836236f0f56ca05",
"0xa58a6986a1c0550b54fe9cd681a08ee0b5fd9477d04f90452c81b6ec9e788b8c",
"0x05f9e81afd9b046ddecfa8158ef6976edac9e3ae351fc7809edb50106867c4ab",
"0xaebf8d0af0b2ee5a7736cde1d9df6d71196234fd60a3eef74a8e72eba261854f",
"0xc8b6dbc459ec3376f86a3dccf83e392422dc515e11d862fa3c292f15193aef77",
"0x0ed483b4d12356e9dd2841d88c2e308895c166960461b510c3c5d42e522ed16d"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


