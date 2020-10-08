# Multiplexer

See `/build/contracts/Multiplexer.json` for deployment details.

## Usage

You must pass an array of addresses and an array of values to send to those addresses (by index)

### Send Ether

```
function sendEth(address[] _to, uint256[] _value) payable returns (bool _success)
```

### Send ERC20 Tokens

First you must `approve` the multiplexer contract address with enough tokens to process your request

```
function sendErc20(address _tokenAddress, address[] _to, uint256[] _value) returns (bool _success)
```


### RSK Network Address
#### Mainnet contract Address: 0xd10776ba541fcE3387e3dF26391BEDAE2e6d94c3 
#### Testnet contract address: 0xD10776BA541FCE3387e3dF26391bedae2e6d94c3

#### ABI
[ { "constant": false, "inputs": [ { "name": "_to", "type": "address[]" }, { "name": "_value", "type": "uint256[]" } ], "name": "sendEth", "outputs": [ { "name": "_success", "type": "bool" } ], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "_tokenAddress", "type": "address" }, { "name": "_to", "type": "address[]" }, { "name": "_value", "type": "uint256[]" } ], "name": "sendErc20", "outputs": [ { "name": "_success", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" } ]
