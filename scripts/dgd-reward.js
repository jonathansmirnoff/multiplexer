const Multiplexer = artifacts.require('./Multiplexer.sol');
const multiplexer = Multiplexer.at(Multiplexer.address);

console.log('Multiplex Address', Multiplexer.address);

//const ERC20 = artifacts.require('./TestMintableToken.sol');
//const token = ERC20.at('0xe0b7927c4af23765cb51314a0e0521a9645f0e2a');
const tokenWeiPerAddress = 100000000;
const addresses = [  
  '',
];
const balances = addresses.map(() => tokenWeiPerAddress);
const total = balances.reduce((t, n) => t + n, 0);

module.exports = async () => {
  //const multiplexer = await Multiplexer.at(Multiplexer.address);
  //console.log(`Sending ${total} token wei`);
  // console.log('Setting new allowance', await token.approve(multiplexer.address, total, { gas: 6000000, gasPrice: 12e9 }));
  //console.log('Sending', await multiplexer.sendErc20(token.address, addresses, balances, { gas: 6000000, gasPrice: 12e9 }));
  //let tx = await multiplexer.sendEth(addresses, balances, { gas: 6000000, gasPrice: 65000003 })
  //console.log(tx);
};