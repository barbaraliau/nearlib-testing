const nearlib = require("nearlib");
const bs58 = require('bs58');

const url = 'https://rpc.nearprotocol.com';
const nearProvider = new nearlib.providers.JsonRpcProvider(url);
const txHash = '2Dfz86KmLmUary8n4LkZjg3ixGsWwnTAd7UTgfrnr4De';
const accountId = 'dinoaroma';

// Cannot get txStatus for this txHash
// Sending a POST request works:
// {
//   "jsonrpc": "2.0",
//     "method": "tx",
//       "id": "whatever",
//         "params": ["8Ha8nvE7t1wHB8h5GdzMCnbDfCs9Zg1XeSLHo1umCVPy", "dinoaroma"]
// }
async function getTxStatus(txHash, accountId) {
  const outcome = await nearProvider.txStatus(txHash, accountId);
  console.log({outcome});
}

getTxStatus(txHash, accountId);
